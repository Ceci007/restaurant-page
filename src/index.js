import './styles/main.css';
import { renderPage } from './modules/helper'
import { menu } from './modules/menu';

const tabs = [
  {id: 'menuButton', render: renderPage(menu)},
];
