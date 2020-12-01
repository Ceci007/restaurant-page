import './styles/main.css';
import { renderMainPage } from './modules/home';
import { about } from './modules/about';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import { renderPage } from './modules/helper';

renderMainPage();
renderPage(about)();

const tabs = [
  { id: 'menuButton', render: renderPage(menu) },
  { id: 'aboutButton', render: renderPage(about) },
  { id: 'contactButton', render: renderPage(contact) },
];

tabs.forEach(tab => {
  const tabButton = document.getElementById(tab.id);
  tabButton.addEventListener('click', tab.render);
});
