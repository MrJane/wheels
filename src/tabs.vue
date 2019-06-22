<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "tabs",
    data(){
      return{

      }
    },
    props:{
      selected:{
        type:[Number,String],
        required:true
      },
      direction:{
        type:String,
        default:'horizontal',
        validator(value){
          return ['horizontal','vertical'].indexOf(value)>=0
        }
      }
    },
    methods:{

    },
    created(){
      // this.$emit('update:selected')
    }
  }
</script>

<style lang="scss" scoped>
    .tabs {

    }
</style>