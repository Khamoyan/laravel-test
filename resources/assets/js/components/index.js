import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	(
		<HashRouter>
			<Main />
		</HashRouter>
	), document.getElementById('root'));
registerServiceWorker();