import { createList } from './helper'

const menu = {
    renderAreaId: 'contContainer',
    render: (location) => {
        createList(location, 'Our Menu: Hamburguer','Pizza', 'Ice Cream', 'Fries' )
    }
}

export { menu }