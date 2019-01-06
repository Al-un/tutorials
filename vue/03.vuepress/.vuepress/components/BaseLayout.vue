<template>
  <div>
    <navbar />

    <main>
      <b-container>
        <Content/>
      </b-container>
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  // Cannot be named Layout because it will be defined as a custom theme layout
  name:'base-layout',
  components: {
    Navbar
  }
};
</script>