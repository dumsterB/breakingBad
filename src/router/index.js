import Vue from 'vue'
import VueRouter from 'vue-router'
import EpisodesList from "../views/EpisodesList";
import Episode from "../views/Episode";
import Charactars from "../views/CharactarsList";
import Charactar from "../views/Charactar";
import Home from "../views/Home";
import Rating from "../views/Rating";
import Favourites from "../views/Favourites";

Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
            name:'Home',
        },
        {
            path:'/episodes',
            component:EpisodesList,
            name:'Episodes',
        },
        {
            path:'/episodes/:id',
            component:Episode,
            name:'Episode',
            props:true
        },
        {
            path:'/characters',
            component:Charactars,
            name:"Charactars"
        },
        {
            path:'/character/:id',
            component:Charactar,
            name:'Charactar',
            props:true
        },
        {
            path:'/rating',
            component:Rating,
            name:'Rating',
        },
        {
            path:'/favourites',
            component:Favourites,
            name:'Favourites'
        }
    ],
    mode:'history'
})
export default router