import 'element-plus/packages/theme-chalk/src/base.scss';
import {createApp} from 'vue';
import App from './App';
import store, {key} from './store';
import router from './router'

// createApp(App).use(ElementPlus, {locale, size: 'small', zIndex: 3000}).use(store, key).mount('#app'); // edit
createApp(App).use(store, key).use(router).mount('#app'); // edit
