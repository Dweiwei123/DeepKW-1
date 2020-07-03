import VueRouter from 'vue-router'

import home from '../components/Home/home.vue'
import about from '../components/About/about.vue'
import groups from '../components/About/groups.vue'
import works from '../components/Works/works.vue'
import news from '../components/News/news.vue'
import contact from '../components/Contact/contact.vue'
const router = new VueRouter({
    routes:[
        {path: '/', redirect: '/home'},
        {path: '/home', component: home},
        {
            path: '/about', 
            component: about,
            children:[
                {path:'groups',component:groups},
            ] 
        },
        {path: '/news', component: news},
        {path: '/works', component: works},
        {path: '/contact', component: contact}
    ]
});
export default router