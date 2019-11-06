<template>
  <b-taglist>
    <nuxt-link v-for="tag in tags" :key="tag" :to="'?q=' + tag">
      <b-tag rounded>#{{ tag }}</b-tag>
    </nuxt-link>
  </b-taglist>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>
