import { Alert } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/native';

class TimeoutService {
	private timer: number = 0;
	private intervalId: NodeJS.Timeout | null = null;
	private static TIMER_DURATION = 1800; // 30 minutos en segundos
	private static WARNING_DURATION = 60; // 1 minuto en segundos

	constructor(private navigationRef: NavigationContainerRef<any>) {}

	public startWatch() {
		this.timer = TimeoutService.TIMER_DURATION;
		this.intervalId = setInterval(() => {
			this.timer--;

			if (this.timer === 0) {
				this.stopWatch();
				Alert.alert(
					'Session Time OUT',
					'Your session has timed out. Please login again.',
					[
						{
							text: 'OK',
							onPress: () => {
								this.navigationRef.navigate('Login');
							},
						},
					],
				);
			} else if (this.timer === TimeoutService.WARNING_DURATION) {
				// Mostrar advertencia
				Alert.alert('Warning', 'Your session will expire in 1 minute.');
			}
		}, 1000);
	}

	public resetWatch() {
		this.timer = TimeoutService.TIMER_DURATION;
	}

	public stopWatch() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	// Sugerencias y Modificaciones:
	// - Usamos `Alert` para notificaciones.
	// - Asegúrate de manejar la navegación correctamente con `navigationRef`.
}

export default TimeoutService;
