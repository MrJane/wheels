<template>
    <!--这个属性太长需要重构-->
    <!--<div class="col" :class="[`col-${span}`,`offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">-->
    <div class="col" :class="colClasses"
         :style="colStyle">
        <div style="border: 1px solid green;height: 60px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Tcol",
    props: {
      //type如果有多种类型用数组
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data () {
      return {
        gutter: 0,
      }
    },
    computed: {
      colStyle () {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      },
      colClasses () {
        let {span, offset} = this;
        return [`col-${span}`, `offset-${offset}`]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .col {
        /*height: 60px;*/
        /*background: grey;*/
        width: 50%;
        /*border: 1px solid red;*/
        /*不能用margin与下面margin-left冲突会导致不对齐，改用padding*/
        /*margin: 0 10px;*/
        padding: 0 10px;
        $class: col-;
        /*sass循环生成样式*/
        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $offset: offset-;
        /*sass循环生成样式*/
        @for $n from 1 through 24 {
            &.#{$offset}#{$n} {
                margin-left: ($n/24)*100%;;
            }
        }
    }
</style>