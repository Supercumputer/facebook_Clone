import Login from "../Page/Login/Login"
import Home from "../Page/Home/Home"
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout"
import VideoLayout from "../Layout/VideoLayout/VideoLayout"
import Video from '../Page/Video/Video'
import MaketPlace from "../Page/MaketPlace/MaketPlace"
import Group from "../Page/Group/Group"
import Game from "../Page/Game/Game"
import UserLayout from "../Layout/UserLayout/UserLayout"
import User from "../Page/User/User"
import Error from "../Page/Eroor/Errord"
const publicRouter = [
    
    {
        path: '/login',
        component: Login
    },
    {
        path: '/*',
        component: Error
    }
    
    
]

const privateRouter = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout
    },
    {
        path: '/video',
        component: Video,
        layout: VideoLayout
    },
    {
        path: '/maketplace',
        component: MaketPlace,
        layout: VideoLayout
    }, 
    {
        path: '/group',
        component: Group,
        layout: VideoLayout
    },
    {
        path: '/game',
        component: Game,
        layout: VideoLayout
    },
    {
        path: '/user/:userName',
        component: User,
        layout: UserLayout
    }
]

export { publicRouter, privateRouter }