<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">Tags ({{ tags.length }})</div>
    </header>
    <div class="card-content">
      <b-taglist>
        <router-link
          v-for="(tag, index) in tags"
          :key="index"
          :to="'tags/' + tag"
        >
          <b-tag rounded>#{{ tag }}</b-tag>
        </router-link>
      </b-taglist>
    </div>
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
