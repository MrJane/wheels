<template>
    <div class="col">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Tcol"
  }
</script>

<style lang="scss" scoped>
    .col {
        height: 60px;
        background: grey;
        width: 50%;
        border: 1px solid red;
        $class: col-;
        /*sass循环生成样式*/
        @for $n from 1 through 24 {
            &.#{$class}#{$n}{
                width: ($n/24)*100%;
            }
        }
    }
</style>