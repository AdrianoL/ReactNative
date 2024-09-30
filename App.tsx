import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Navigation from './src/components/Navigation';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
