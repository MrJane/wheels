<template>
    <div class="toast" ref="toast">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <!--<slot></slot>-->
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onclickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
  export default {
    name: "toast",
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 5
      },
      closeButton: {
        type: Object,  //类型为对象时，有默认值时要改成函数形式
        //为什么类型是Object default值必须是个函数？ 应为对象时引用类型，每次创建组价会重新创建closeButton一个对象
        default: () => {
          return {
            //考虑如果传入标签怎么显示,用v-html? 但slot不支持v-html绑定，所以用标签代替不用slot=><div v-html="$slots.default[0]"></div>
            // 因为我们在plugin中用$slots.default传的
            text: '关闭',
            callback: undefined
            // callback: (toast) => {
            //   toast.close()
            // }
          }
        }

      },
      //这个控制支持不支持html标签
      enableHtml:{
        type:Boolean,
        default:false
      }
    },
    mounted () {
      // console.log('关闭', this.$el);
      // this.$refs.line.style.height = this.$refs.toast.getClientRects()
      // console.log(this.$refs.toast.getClientRects()); 打印出来是0因为mounted方法是异步方法所以会存在这个问题，要使用this.$nextTick解决
      //解决line height高度问题的Js代码
      this.$nextTick(()=>{
        console.log(this.$refs.toast.getBoundingClientRect(),'lllll');
        this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height+'px'
      })
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000)
      }
    },
    methods: {
      close () {
        this.$el.remove(); //从页面中移除DOM元素
        this.$destroy(); //$destroy()并不会把元素移除掉所以要自己删掉写remove掉，但会把绑定的事件撤销掉
      },
      onclickClose () {
        this.close();
        if (this.closeButton && typeof this.closeButton.callback === 'function') {
          //this.closeButton.callback();考虑callback调用组件里的方法及属性怎么传？传this即可
          this.closeButton.callback(this);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .toast {position: fixed;color: #fff;top: 0;left: 50%;transform: translateX(-50%);
        font-size: 14px;line-height: 1.8;min-height: 40px;display: flex;align-items: center;
        background: rgba(0, 0, 0, .75);box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5);}
    .close {padding-left: 16px;flex-shrink: 0;/*假如前面换行了，后面的也会跟着换行，加上这代码即可*/}
    .line {height: 100%;/*如果父元素写的是min-height,那么这个height：100%不会生效可以 用js解决也可以用其他样式方法*/
        margin-left: 10px;border: 1px solid red; /*width: 1px;*//*background-color: red;*/
    }
</style>