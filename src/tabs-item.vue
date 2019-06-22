<template>
    <div class="tabs-item" @click="changeItem" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    data(){
      return{
        active:false,
      }
    },
    name: "tabs-item",
    inject: ['eventBus'],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    methods: {
      changeItem () {
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = this.name === name;
      })
      // console.log('孙子的BUS', this.eventBus)
    },
    computed:{
      classes(){
        return{
          active:this.active
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    .tabs-item {
        /*flex-grow: 1;*/
        flex-shrink: 0;
        padding: 4px 2em;
        &.active{
            background-color: green;
        }
    }
</style>