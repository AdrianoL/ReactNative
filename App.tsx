import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store_';
import Navigation from './src/components_/Navigation';
import Toast from 'react-native-toast-message';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Navigation />
			<Toast ref={(ref) => Toast.setRef(ref)} />
		</Provider>
	);
};

export default App;
