/* eslint-disable import/prefer-default-export */
import { createList } from './helper';

const contact = {
  renderAreaId: 'contContainer',
  render: (location) => {
    createList(location, 'Contact me at:', 'GitHub: https://github.com/Ceci007', 'Linkedin: www.linkedin.com/in/cecilia-benítez', '+595981-123-456-arf!');
  },
};

export { contact };