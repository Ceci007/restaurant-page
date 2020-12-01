/* eslint-disable import/prefer-default-export */
const about = {
  renderAreaId: 'contContainer',
  render: (location) => {
    const photo = document.createElement('img');
    photo.src = './images/dogo.jpg';
    location.textContent = 'Please excuse any dog hair in your food and this basic design. This project is meant to be an introduction to webpack, and I did not spend much time on CSS. I focused on DRY principle, Objects, and clean code.';
    location.appendChild(photo);
  },
};

export { about };
