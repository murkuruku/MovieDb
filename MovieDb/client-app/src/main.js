// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VeeValidate from "vee-validate";
import { Validator } from 'vee-validate';
import router from './router';
import store from './store/index';

Vue.use(VeeValidate);

Validator.extend('releasYear', {
  getMessage: (field, [args]) => `The  ${field} must be from ${args} to ${new Date().getFullYear()}`,
  validate: (value, [args]) => {
    return parseInt(new Date().getFullYear()) >= parseInt(value)
     && parseInt(value) >= parseInt(args);
  },
});
Validator.extend('age', {
  getMessage: (field, [args]) => `The actor  ${field} should not bet over ${args}`,
  validate: (value, [args]) => {
    return parseInt(args) > parseInt(value);
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
