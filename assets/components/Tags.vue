<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">Tags ({{ tags.length }})</div>
    </header>
    <div class="card-content">
      <b-taglist>
        <nuxt-link v-for="(tag, index) in tags" :key="index" :to="'?q=' + tag">
          <b-tag rounded>#{{ tag }}</b-tag>
        </nuxt-link>
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
