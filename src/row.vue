<template>
    <div class="row">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Trow",
    props: {
      gutter:{
        type: [Number, String]
      }
    },
    created () {
      console.log(this.$children, '没有儿子') //打印出显示是空数组展开里面又有元素
    },
    mounted () {
      console.log(this.$children, '有儿子') //可以打印出儿子有数据
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      })
      console.log(this.$children, '有儿子') //可以打印出儿子有数据
    },


    //  created 等价于 let div = document.createElement('div') 内存生成这个对象
    //  mounted 等价于 document.body.appendChild(div)  页面挂载这个对象
  }
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        width: 100%;
        margin-left: -10px;
        margin-right: -10px;
    }
</style>