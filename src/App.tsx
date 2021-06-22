import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App(): JSX.Element {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/salas/nova" component={NewRoom} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
