<template>
    <div class="tabs-panel" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "tabs-panel",
    inject: ['eventBus'],
    data(){
      return{
        active:false
      }
    },
    props: {
      name: {
        type: String
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        if (name === this.name) {
          this.active = true;
          console.log(`panel${this.name}没有被选中了`)
        } else {
          this.active = false
        }

      })
    }
  }
</script>

<style lang="scss" scoped>
    .tabs-panel {
        &.active {
            background-color: green;
        }
    }
</style>