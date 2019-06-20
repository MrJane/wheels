<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @input="$emit('input',$event.target.value)"
        >
        <template v-if="error">
            <icon class="icon-error" name="error"></icon>
            <span class="error-msg">{{error}}</span>
        </template>
    </div>
</template>

<script>
  import Icon from './icon'

  export default {
    name: "TInput",
    components: {Icon},
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-hover-color: #666;
    $border-radius: 4px;
    $border-shadow-color: rgba(0, 0, 0, .5);
    $red: #f1452d;
    .wrapper {display: inline;align-items: center;
        >:not(:last-child){margin-right: .5em}
        > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;
            &:hover {border: 1px solid $border-hover-color;border-radius: $border-radius;}
            &:focus {box-shadow: inset 0px 1px 3px $border-shadow-color;outline: none;}
            &[disabled], &[readonly] {border: 1px solid red;color: red;}
        }
        &.error {
            > input {border: 1px solid red;}
        }
        .error-msg {
            color: $red;}
        .icon-error {fill: $red;} }
</style>