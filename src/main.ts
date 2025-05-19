import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/globals.css'

// global css
// import 'virtual:uno.css';
// import '@/assets/styles/index.scss';
// import 'element-plus/theme-chalk/dark/css-vars.css';


// // 自定义指令
// import directive from './directive';

// // 注册插件
// import plugins from './plugins/index'; // plugins

// // 高亮组件
// // import 'highlight.js/styles/a11y-light.css';
// import 'highlight.js/styles/atom-one-dark.css';
// import 'highlight.js/lib/common';
// import HighLight from '@highlightjs/vue-plugin';

// // svg图标
// import 'virtual:svg-icons-register';
// import ElementIcons from '@/plugins/svgicon';

// // permission control
// import './permission';

// // 国际化
// import i18n from '@/lang/index';

// // vxeTable
// import VXETable from 'vxe-table';
// import 'vxe-table/lib/style.css';
// VXETable.config({
//   zIndex: 999999
// });

// 修改 dialog 默认点击遮照为不关闭


const app = createApp(App)
app.use(router)
app.use(store)


// app.use(HighLight);
// app.use(ElementIcons);
// app.use(i18n);
// app.use(VXETable);
// app.use(plugins);
// // 自定义指令
// directive(app);

app.mount('#app');
