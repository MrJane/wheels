<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
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
            text: '关闭',
            callback: (toast) => {
              toast.close()
            }
          }
        }

      }
    },
    mounted () {
      console.log('关闭', this.$el);
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000)
      }
    },
    methods: {
      close () {
        this.$el.remove(); //从页面中移除DOM元素
        this.$destroy(); //会把绑定的事件撤销掉
      },
      onclickClose(){
        this.close();
        this.closeButton.callback();
      }
    }
  }
</script>

<style lang="scss" scoped>
    .toast {
        position: fixed;
        color: #fff;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        line-height: 1.8;
        height: 40px;
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, .75);
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .5);
    }
    .close{
        padding-left: 16px;
    }
    .line{
        height: 100%;
        margin-left: 10px;
        border: 1px solid red;
        /*width: 1px;*/
        /*background-color: red;*/
    }
</style>