import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAoQkVqV43Q8UNdLAP0cmRzpUP1_rUiVOs",
    authDomain: "shutter-62a20.firebaseapp.com",
    databaseURL: "https://shutter-62a20.firebaseio.com",
    projectId: "shutter-62a20",
    storageBucket: "shutter-62a20.appspot.com",
    messagingSenderId: "666252039732"
};

firebase.initializeApp(config);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')