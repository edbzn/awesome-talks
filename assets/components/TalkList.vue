<template>
  <section v-if="!error">
    <transition-group name="slide-fade" class="mt columns is-multiline">
      <Talk
        v-for="resource in resources"
        :key="resource.title"
        :talk="resource"
      ></Talk>
    </transition-group>
    <section
      class="column hero is-large"
      key="no-match"
      v-if="query && resources.length === 0"
    >
      <div class="hero-body">
        <div class="container">
          <h1 class="title">No match found for "{{ query }}".</h1>
          <h2 class="subtitle">Please try another keyword.</h2>
        </div>
      </div>
    </section>
  </section>
  <section class="column hero is-large" v-else>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Oops, something wrong happened...</h1>
        <h2 class="subtitle">Error: {{ error }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import Talk from '~/assets/components/Talk';

export default {
  components: {
    Talk
  },

  props: {
    resources: {
      type: Array,
      required: true
    },
    query: {
      type: String,
      required: true
    },
    error: {
      type: String
    }
  }
};
</script>

<style scoped>
.mt {
  margin-top: 8px;
}
.hero {
  text-align: center;
}
</style>
