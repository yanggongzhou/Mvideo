// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ViewUI from 'view-design';
import locale from 'view-design/dist/locale/en-US';

import { Button,Card,Row,Col,Menu,MenuItem} from 'view-design'

import 'view-design/dist/styles/iview.css'
import '@/assets/main.css'

import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)
Vue.component("Button",Button)
Vue.component("Card",Card)
Vue.component("Row",Row)
Vue.component("Col",Col)
Vue.component("Menu",Menu)
Vue.component("MenuItem",MenuItem)

// Vue.use(ViewUI, { locale });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
