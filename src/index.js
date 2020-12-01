import './styles/main.css';
import { renderMainPage } from './modules/home'
import { menu } from './modules/menu';
import { renderPage } from './modules/helper'

renderMainPage();

const tabs = [
  {id: 'menuButton', render: renderPage(menu)},
];
