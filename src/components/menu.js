export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'Клиент бетіне өту',
        icon: ' ri-profile-line',
        link: '/chat'
    },
    {
        id: 3,
        label: 'Нұсқаулық',
        icon: 'ri-settings-2-line',
        link: '/calendar'
    },
    {
        id: 4,
        label: 'Видео-конференция',
        icon: 'ri-chat-1-line',
        link: '/chat'
    },
    {
        id: 5,
        label: 'Қолданушылар',
        icon: 'ri-contacts-line',
        subItems: [
            {
                id: 6,
                label: 'Оқушылар',
                link: '/users/students'
            },
            {
                id: 7,
                label: 'Оқушы еместер',
                link: '/users/not-students'
            }
        ]
    },
    {
        id: 14,
        label: 'Аймақтар',
        icon: 'mdi mdi-map-marker',
        link: '/regions'
    },
    {
        id: 17,
        label: 'Мектеп',
        icon: 'ri-home-3-line',
        link: '/schools'
    },
    {
        id: 18,
        label: 'Операциялар',
        icon: 'ri-file-settings-line',
        subItems: [
            {
                id: 21,
                label: 'Жауаптар',
                link: '/auth/login-1'
            },
            {
                id: 22,
                label: 'Видео',
                link: '/auth/register-1'
            },
            {
                id: 23,
                label: 'Тест пен тапсырма',
                link: '/auth/recoverpwd-1'
            }
        ]
    },
    {
        id: 25,
        label: 'ҰБТ',
        icon: 'ri-profile-line',
        link: '/chat'
    },
    {
        id: 36,
        label: 'Қызметкерлер',
        icon: 'ri-profile-line',
        link: '/chat'
    },
    {
        id: 37,
        label: 'Статистика',
        icon: 'ri-pencil-ruler-2-line',
        link: '/chat'
    },
    {
        id: 57,
        label: 'Құпия сөзді ауыстыру',
        icon: 'ri-eraser-fill',
        link: '/',
        badge: {
            variant: 'danger',
            text: 'menuitems.forms.badge'
        }
    },
    {
        id: 65,
        label: 'menuitems.tables.text',
        icon: 'ri-table-2',
        subItems: [
            {
                id: 66,
                label: 'menuitems.tables.list.basic',
                link: '/tables/basic'
            },
            {
                id: 67,
                label: 'menuitems.tables.list.advanced',
                link: '/tables/advanced'
            },
        ]
    }
];
