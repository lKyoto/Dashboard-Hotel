import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#9F89E8',
    secondary: '#A3ACFF',
    third: '#89B1E8',
    fourt:"96E5FF",
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    icon_color: '#DCAEFF'
  },
  options: {
    customProperties: true
  },
  iconfont: 'md',
})
