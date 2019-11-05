<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">Tags ({{ tags.length }})</div>
    </header>
    <ul class="card-content">
      <li v-for="(tag, index) in tags" :key="index">
        <a :href="'tags/' + tag">#{{ tag }}</a>
      </li>
    </ul>
  </div>
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
