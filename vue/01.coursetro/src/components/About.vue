<template>
  <div class="about">
    <h1>This is an about page page</h1>
    <p>Lorem ipsum toussa toussa</p>
    <p>Hello {{ da_name }} !!</p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      da_name: this.$route.params.name
    };
  }
};
</script>