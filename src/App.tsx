import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Auth/Home/';
import { NewRoom } from './pages/Auth/NewRoom/';
import { Room } from './pages/Room/General/';
import { AdminRoom } from './pages/Room/Admin/';
import { GlobalStyles } from './styles/global';
import { LogoutButton } from './components/LogoutButton';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<AuthContextProvider>
				<div style={{ marginBottom: '5rem' }}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/salas/nova" component={NewRoom} />
						<Route path="/salas/:id" component={Room} />
						<Route path="/admin/salas/:id" component={AdminRoom} />
					</Switch>
				</div>
				<LogoutButton />
			</AuthContextProvider>
		</BrowserRouter>
	);
}

export default App;
