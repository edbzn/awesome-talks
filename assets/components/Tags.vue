<template>
  <b-taglist>
    <nuxt-link v-for="(tag, index) in tags" :key="index" :to="'?q=' + tag">
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
