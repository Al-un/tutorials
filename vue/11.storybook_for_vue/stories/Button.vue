<template>
  <button :class="{rounded: rounded}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: { rounded: { default: false } }
};
</script>

<style>
.rounded {
  border-radius: 10px;
}
</style>
