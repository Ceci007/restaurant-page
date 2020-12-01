/* eslint-disable import/prefer-default-export */
// functin to create list in my menu and contact page
function createList(location, title, ...args) {
  location.textContent = title;
  const list = document.createElement('ul');
  [...args].forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
  location.appendChild(list);
}

// Render about/menu/home
function renderPage(page) {
  return () => {
    const renderArea = document.getElementById(page.renderAreaId);
    renderArea.innerHTML = '';
    page.render(renderArea);
  };
}

// button creation
function createButton(name) {
  const button = document.createElement('button');
  const btnContainer = document.querySelector('#btnContainer');
  button.setAttribute('id', `${name.toLowerCase()}Button`);
  button.className = 'button';
  button.textContent = name;
  btnContainer.appendChild(button);
}

export { createList, renderPage, createButton };