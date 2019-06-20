<template>
    <div class="t-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "buttonGroup",
    mounted(){
      console.log(this.$el.children);
      for (let node of this.$el.children) {
        if (node.nodeName.toLocaleLowerCase()!=='button') {
          console.warn('t-button-group子元素应该全是t-button')
        }
      }
    }
  }
</script>

<style lang="scss">
.t-button-group{
    display: inline-flex;
    vertical-align: middle;
    >.t-button{
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px;
        }
        &:hover{position: relative;z-index: 1;}
        &:first-child{
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child{
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
}
</style>