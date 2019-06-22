<template>
    <div class="tabs-head" :class="classes">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "tabsHead",
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    created () {
      console.log('父亲给的BUS', this.eventBus)
    }, computed: {
      classes () {
        return {
          active: this.active
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .tabs-head {
        display: flex;
        height: 40px;
        border: 1px solid red;
        align-items: center;
        .actions {
            /*靠右了类似浮动float right*/
            margin-left: auto;
        }
    }
</style>