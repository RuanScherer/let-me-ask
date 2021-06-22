import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/salas/nova" component={NewRoom} />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
