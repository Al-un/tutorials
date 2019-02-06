<template>
  <div>
    <h1>
      Loading data with
      <code>asyncData</code>
    </h1>
    <p>
      IP is {{ ipAddr }}. AsyncData must be called in
      <code>pages/</code>, not in
      <code>components/</code>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    ip: String
  },
  computed: {
    ipAddr() {
      return this.ip || "undefined";
    }
  }
};
</script>

