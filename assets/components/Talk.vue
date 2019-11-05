<template>
  <div
    class="column is-one-mobile is-half-tablet is-half-desktop is-one-third-widescreen"
  >
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">{{ talk.title }}</div>
      </header>
      <div class="card-image">
        <a :href="talk.link" target="_blank" rel="noopener">
          <figure class="image is-4by3">
            <img :src="talk.poster" :alt="'Poster ' + talk.title" />
          </figure>
        </a>
      </div>
      <div class="card-content">
        <b-taglist>
          <router-link
            v-for="(tag, index) in talk.tags"
            :key="index"
            :to="'tags/' + tag"
          >
            <b-tag rounded>#{{ tag }}</b-tag>
          </router-link>
        </b-taglist>
        <p>{{ talk.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    talk: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.tags a {
  margin-right: 4px;
}
</style>
