<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "tabs",
    data () {
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: [Number, String],
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    //provide 提供的东西相关的子孙组件都能获取到，子组件要注入inject
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {},
    mounted () {
      this.eventBus.$emit('update:selected',this.selected)
    }
  }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>