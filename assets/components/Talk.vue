<template>
  <div class="column is-one-third-widescreen is-one-quarter-fullhd">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title has-text-grey">{{ talk.title }}</div>
      </header>
      <div class="card-image">
        <a :href="talk.link" target="_blank" rel="noopener">
          <figure class="image is-4by3">
            <img :src="talk.poster" :alt="'Poster ' + talk.title" />
          </figure>
        </a>
      </div>
      <div class="card-content">
        <p>{{ talk.description }}</p>
        <a v-for="(tag, index) in talk.tags" :key="index">#{{ tag }}</a>
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
