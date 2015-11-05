const React = require('react');
const { render } = require('react-dom');
const ChatApp = require('./ChatApp');

require('./reset.css');
require('./css/bootstrap.css');
require('./css/index.css');
require('./css/style.css');

render(<ChatApp />, document.getElementById('root'));
