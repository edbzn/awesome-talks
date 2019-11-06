<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">Tags ({{ tags.length }})</div>
    </header>
    <div class="card-content">
      <Tags :tags="tags" />
    </div>
  </div>
</template>

<script>
import Tags from '~/assets/components/Tags';

export default {
  components: {
    Tags
  },

  props: {
    tags: {
      type: Array,
      required: true
    }
  }
};
</script>
