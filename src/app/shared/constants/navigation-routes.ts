import { NavigationRoute } from '../../shared'

export const NavigationRoutes: Array<NavigationRoute> = [
    {
        label: 'Home',
        route: '',
        active: false,
        hidden: false,
    },
    {
        label: 'About',
        route: 'about',
        active: false,
        hidden: false,
        children: [
            {
                label: '38th & Pleasure',
                route: 'mainshop',
                hidden: false
            },
            {
                label: 'Lou Cart',
                route: 'loucart',
                hidden: true
            }
        ]
    },
    {
        label: 'Locations',
        route: 'locations',
        active: true,
        hidden: false

    },
    {
        label: 'Menu',
        route: 'menu',
        active: false,
        hidden: false,
    },
    {
        label: 'Gallery',
        route: 'gallery',
        active: false,
        hidden: false,
    },
    {
        label: 'Lou Gear',
        route: 'lougear',
        active: false,
        hidden: false,
    },
]