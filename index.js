import Vue from 'vue';
import Button from './src/button';
import ButtonGroup from './src/buttonGroup';
import Icon from './src/icon';
import Input from './src/Input';
import Row from './src/row';
import Col from './src/col'
import Toast from './src/toast';
import Tabs from './src/tabs';
import TabBody from './src/tabs-body';
import TabItem from './src/tabs-item';
import TabPanel from './src/tabs-panel';
import TabHead from './src/tabs-head';
import plugin from './src/plugin';

Vue.component('t-button', Button);
Vue.component('t-button-group', ButtonGroup);
Vue.component('t-icon', Icon);
Vue.component('t-input', Input);
Vue.component('t-row', Row);
Vue.component('t-col', Col);
Vue.component('t-tabs', Tabs);
Vue.component('t-tabs-item', TabItem);
Vue.component('t-tabs-body', TabBody);
Vue.component('t-tabs-body', TabBody);
Vue.component('t-tabs-panel', TabPanel);
Vue.component('t-tabs-head', TabHead);

Vue.use(plugin);
new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: 'hello',
    selectTab: 'nba'
  },
  created () {
    // this.$toast('<strong>我是toast组件</strong>', {
    //   enableHtml: true,
    //   closeButton: {
    //     text: '知道了',
    //     callback (toast) {
    //       console.log(toast);
    //     },
    //
    //   }
    // })
    /*
        this.$toast('更多文字更多文字更多文字更多文字更多文字更多文字更多文字更多文字', {
          enableHtml: true,
          closeButton: {
            text: '知道了',
            callback (toast) {
              console.log(toast);
            },

          }
        })
        */
  },
  methods: {
    yyy (data) {
      console.log(data)
    },

    inputChange (e) {
      console.log(e.target.value);
      console.log('hahhahhah')
    },
    showToast () {
      this.$toast('我是toast组件', {
        enableHtml: true
      })
    }
  },

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