<template>
  <p class="credits is-size-7">
    <span>Speaker</span>
    <strong>
      <a :href="author.profileURL">{{ author.name }}</a> </strong
    >, added by
    <strong>
      <a :href="contributor.profileURL">{{ contributor.name }}</a> </strong
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
