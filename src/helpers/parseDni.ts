// src/helpers/parseDni.ts

// Esta función es un ejemplo. Debes ajustarla a la forma real del DNI Argentino.
// Supongamos que el OCR devuelve un array de líneas y en alguna línea aparece:
// DNI: 12345678
// NOMBRE: JUAN PEREZ

export function parseDniData(ocrResult: string[]): {
	dni?: string;
	nombreCompleto?: string;
} {
	let dni: string | undefined;
	let nombreCompleto: string | undefined;

	// Busca línea que contenga algo tipo "DNI"
	for (const line of ocrResult) {
		const l = line.toUpperCase();
		if (l.includes('DNI')) {
			// Extraer número
			const match = l.match(/\b(\d{7,8})\b/); // DNI suele tener 7 u 8 dígitos
			if (match) dni = match[1];
		}

		// Suponemos que en otra línea aparece el nombre y apellido juntos
		// Podrías buscar un patrón más sofisticado, o suponer que la línea 2 es Nombre Apellido
		if (!nombreCompleto && !l.includes('DNI') && l.split(' ').length >= 2) {
			// Toma esta línea como nombre completo (ej: "JUAN PEREZ")
			nombreCompleto = line.trim();
		}

		if (dni && nombreCompleto) break;
	}

	return { dni, nombreCompleto };
}
