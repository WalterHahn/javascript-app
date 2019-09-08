import './styles/app.scss';

var template = require('./templates/index.pug');

document.getElementById('app').innerHTML = template({
  title: 'javascript-app'
});
