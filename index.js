import Vue from 'vue';
import Button from './src/button';
import ButtonGroup from './src/buttonGroup';
import Icon from './src/icon';
import Input from './src/Input';
import Row from './src/row';
import Col from './src/col'

Vue.component('t-button', Button);
Vue.component('t-button-group', ButtonGroup);
Vue.component('t-icon', Icon);
Vue.component('t-input', Input);
Vue.component('t-row', Row);
Vue.component('t-col', Col);
new Vue({
  el: '#app',
  data: {
    loading1: false,
    message:'hello'
  },
  methods:{
    inputChange(e){
      console.log(e.target.value);
      console.log('hahhahhah')
    }
  }
});


// //单元测试
// import chai from 'chai';
// const expect = chai.expect;
// {
//   let Constructor = Vue.extend(Button);
//   console.log(Constructor);
//   // let button = new Constructor();
//   //动态创建元素挂载，propsData传递参数props,但怎么传slot?
//   let vm = new Constructor({
//     propsData: {
//       icon: 'shezhi'
//     }
//   });
//   console.log(button);
//   vm.$mount();
//   let useElement = vm.$el.querySelector('use');
//   useElement.getAttribute('xlink:href');
//   expect(useElement.getAttribute('xlink:href')).to.eq('#icon-shezhi');
//   console.log('useElement',useElement);
// }
// {
//   let Constructor = Vue.extend(Button);
//   console.log(Constructor);
//   // let button = new Constructor();
//   //动态创建元素挂载，propsData传递参数props,但怎么传slot?
//   let button = new Constructor({
//     propsData: {
//       icon: 'shezhi',
//       loading:true
//     }
//   });
//   console.log(button);
//   button.$mount();
//   let useElement = button.$el.querySelector('use');
//   useElement.getAttribute('xlink:href');
//   expect(useElement.getAttribute('xlink:href')).to.eq('#icon-jiazai');
//   console.log('useElement',useElement);
// }
// {
//   let Constructor = Vue.extend(Button);
//   console.log(Constructor);
//   // let button = new Constructor();
//   //动态创建元素挂载，propsData传递参数props,但怎么传slot?
//   let button = new Constructor({
//     propsData: {
//       icon: 'shezhi',
//       loading:true
//     }
//   });
//   button.$mount();
//   let svg = button.$el.querySelector('svg');
//   let {order}= window.getComputedStyle(svg);
//   expect(order).to.eq('1');
// }