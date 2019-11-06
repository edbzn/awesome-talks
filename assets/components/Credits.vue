<template>
  <p class="credits is-size-7">
    <span>Speaker</span>
    <strong>
      <a
        :href="author.profile"
        :title="author.profile"
        target="_blank"
        rel="noopener"
        >{{ author.name }}</a
      > </strong
    >, added by
    <strong>
      <a
        :href="contributor.profile"
        :title="contributor.profile"
        target="_blank"
        rel="noopener"
        >{{ contributor.name }}</a
      > </strong
    >.
  </p>
</template>

<script>
export default {
  props: {
    contributor: {
      type: Object,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.credits {
  margin: 14px 0;
}
</style>
