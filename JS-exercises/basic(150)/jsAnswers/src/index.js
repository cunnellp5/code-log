import _ from 'lodash';
import './styles/styles.css';

require('./domscripts/header');

function component() {
  var jsbasics = document.createElement('div');
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var toggler = document.createElement('button');
  var br = document.createElement('br');
  var nav = document.createElement('nav');
  
  nav.innerHTML = _.join(['Home', 'page'], ' ');
  btn.innerHTML = 'Render JSBasics';
  toggler.innerHTML = 'toggle JSBasics';
  jsbasics.setAttribute('id', 'jsbasics');
  element.setAttribute('id', 'wrapper');
  jsbasics.style.display = 'block';

  element.appendChild(nav)
  nav.appendChild(br);
  nav.appendChild(btn);
  nav.appendChild(toggler);
  element.appendChild(jsbasics)


  lazyJsBasic(btn)
  toggleButton(toggler)

  return element;
}

function lazyJsBasic(btn) {
  btn.onclick = e => import(/* webpackChunkName: "JSBasics" */ './JSBasics').then(module => {
    var JSBasics = module.default;
    JSBasics();
    require('./domscripts/sidenav');
  });
}

function toggleButton(toggler) {
  toggler.onclick = e => {
    var basic = document.getElementById('jsbasics');
    if(basic.style.display === 'none') {
      basic.style.display = 'block';
    } else {
      basic.style.display = 'none'
    }
  }
}

document.body.appendChild(component());

