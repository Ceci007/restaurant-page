import { createList } from './helper'

const menu = {
    renderAreaId: 'contContainer',
    render: (location) => {
        createList(location, 'Our Menu:','Treats', 'Meet-ball', 'Bone', 'Chicken' )
    }
}

export { menu }