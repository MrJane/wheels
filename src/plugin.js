import Toast from './toast'

export default {
  install (Vue, options) {
    Vue.prototype.$toast = function (message, toastOpt) {
      console.log(toastOpt,'toastOpt')
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: toastOpt
      });
      toast.$slots.default = [message] //这行代码要在 toast.$mount()之前;
      toast.$mount();
      // console.log(toast.$el);
      document.body.appendChild(toast.$el);
      // console.log(message)
    }
  }
}