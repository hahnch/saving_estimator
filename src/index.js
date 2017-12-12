/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/App.css';
import './css/index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
/**
 * Created by Christian on 29.10.2017.
 */
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './stylesheets/config_page.css';
import './stylesheets/header_page.css';
import './stylesheets/semantic.min.css';
import './stylesheets/main.css';

var Counterpart = require('counterpart');

Counterpart.registerTranslations("Deutsch", require("./translation/de_common.js"));
Counterpart.registerTranslations("English", require("./translation/en_common.js"));
Counterpart.registerTranslations("Deutsch", require("./translation/de_config_page.js"));
Counterpart.registerTranslations("English", require("./translation/en_config_page.js"));
Counterpart.registerTranslations("Deutsch", require("./translation/de_home.js"));
Counterpart.registerTranslations("English", require("./translation/en_home.js"));
Counterpart.setLocale('English');

render(<App />, window.document.getElementById('root'));
registerServiceWorker();