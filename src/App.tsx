import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/salas/nova" component={NewRoom} />
					<Route path="/salas/:id" component={Room} />
				</Switch>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
