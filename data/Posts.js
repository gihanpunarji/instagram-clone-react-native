import { USERS } from "./Users";

export const POSTS = [
    {
        imageUrl: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/s960x960/243476569_1487099778339630_77374301437718410_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=kTyklAfTI10AX-VjvUE&_nc_ht=scontent.fcmb1-2.fna&oh=b90b0074f0447e8e177d2fb36de9b65a&oe=618D897D',
        user: USERS[0].user,
        likes: 512,
        caption: 'Go SriLankan Cricket ❤️❤️',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'gihanpunarji',
                comment: 'yooo this is sri lanka teem and this year its cup to Sri Lankan Lions!!!',
            },
            {
                user: 'kanchanachandimal',
                comment: 'Congradulations 🥰🥰🥰',
            },
            {
                user: 'kanchanachandimal',
                comment: 'Congradulations',
            },
        ],
    },
    {
        imageUrl: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t1.6435-9/p843x403/243473409_4142271522549590_3265456466123267652_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=TqMuRw1LSq0AX90czr4&_nc_ht=scontent.fcmb1-2.fna&oh=87249e62906f71fbe642dad687274c9d&oe=618B0F20',
        user: USERS[1].user,
        likes: 1299,
        caption: 'Go GrandTheftAuto',
        profile_picture: USERS[1].image,
        comments: [
            {
            user: 'gihanpunarji',
            comment: 'gta V',
            },
        ],
    },
    {
        imageUrl: 'https://th.bing.com/th/id/OIP.b8kWmRBz7b44GhphB4KFMgHaD4?w=324&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        user: USERS[2].user,
        likes: 5000,
        caption: 'I bougth a Tesla',
        profile_picture: USERS[2].image,
        comments: [
            {
            user: 'gihanpunarji',
            comment: 'Tesla Is awesome 😎😎',
        }
        ],
    }
]
