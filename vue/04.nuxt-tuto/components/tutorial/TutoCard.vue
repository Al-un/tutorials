<template>
  <transition name="tuto" appear>
    <section>
      <header>
        <div>{{ title }}</div>
      </header>
      <div class="content">
        <slot></slot>
      </div>
      <div class="sources">
        <a
          v-for="source in links"
          :key="source.link"
          class="source"
          :href="source.link"
        >{{ source.name }}</a>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "tuto-card",
  props: {
    title: String,
    content: String,
    sources: [String, Object]
  },
  computed: {
    links() {
      return Array.isArray(this.sources)
        ? this.sources
        : [{ link: this.sources, name: "Source" }];
    }
  }
};
</script>



<style lang="scss" scoped>
section {
  background: white;
  border-radius: 4px;
  color: $font-black;
  margin: 1rem 0px;

  header {
    background: $color-secondary;
    padding: 0.5rem 2rem;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .sources {
    a {
      color: grey;
    }
    border-top: 1px solid $color-secondary;
    padding: 0.5rem 2rem;
  }
  .content {
    padding: 1rem 2rem;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.tuto-enter-active {
  transition: all 0.6s ease;
}
.tuto-enter {
  transform: translateX(10px);
  opacity: 0;
}
</style>
