import React from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// styles
import '../stylesheets/app.scss';

// component
import Route from './settings/route';

// variables
const history = createBrowserHistory();

const App: React.FC = () => {
	// use effects
	React.useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div id='GArveyApp'>
			<Router history={history}>
				<Route />
			</Router>
		</div>
	);
};

export default App;
