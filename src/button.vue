<template>
    <button @click="$emit('click')" class="t-button" :class="{[`icon-${position}`]:true}">
        <!--<svg v-if="icon" class="icon">-->
        <!--<use :xlink:href="`#icon-${icon}`"></use>-->
        <!--</svg>-->
        <t-icon class="icon" v-if="icon&&!loading" :name="icon"></t-icon>
        <t-icon v-if="loading" class="loading icon" name="jiazai"></t-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import Vue from 'vue';
  import Icon from './icon';

  Vue.component('t-icon', Icon);
  export default {
    name: "",
    // props:['icon','position']
    props: {
      icon: {},
      loading: {
        type: Boolean,
      },
      position: {
        type: String,
        default: 'left',
        validator (value) {
          console.log(value);
          return !(value !== 'left' && value !== 'right')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .t-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }
        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>