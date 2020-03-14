/**
 * 2.13 morning
 * https://coursetro.com/posts/code/139/Vue-Router-Tutorial---Using-Vue%27s-Router-Library
 */
import Router from "vue-router";
import Vue from 'vue'

Vue.use(Router);

import HelloWorld from './components/HelloWorld.vue';
import TemplateOne from './components/template/template_1.vue';
import TemplateTwo from './components/template/template_2.vue';


// const routes = [
//     { path: '/', component: HelloWorld },
//     { path: '/one', component: TemplateOne },
//     { path: '/two', component: TemplateTwo },
// ];

// export default new Router(routes);



export default new Router({
    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/1',
            // name: '1',
            component: TemplateOne
        },
        {
            path: '/2',
            // name: '2',
            component: TemplateTwo
        },

    ]
})
