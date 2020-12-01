/* eslint-disable import/prefer-default-export */
import { createButton } from './helper';

// Add main page elements
const renderMainPage = () => {
  const container = document.getElementById('content');
  const btnContainer = document.createElement('div');

  function addH1() {
    const head = document.createElement('h1');
    head.textContent = 'Dogo buffet';
    container.appendChild(head);
  }

  function addButtonContainer() {
    btnContainer.setAttribute('id', 'btnContainer');
    container.appendChild(btnContainer);
  }

  function addContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.setAttribute('id', 'contContainer');
    container.appendChild(contentContainer);
  }

  addH1(); addButtonContainer(); addContentContainer();
  ['About', 'Menu', 'Contact'].forEach(btn => createButton(btn));
};

export { renderMainPage };