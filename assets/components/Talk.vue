<template>
  <div class="column is-one-mobile is-half-tablet is-half-desktop is-one-third-widescreen">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">{{ talk.title }}</div>
      </header>
      <div class="card-content">
        <b-taglist>
          <nuxt-link v-for="(tag, index) in talk.tags" :key="index" :to="'?q=' + tag">
            <b-tag rounded>#{{ tag }}</b-tag>
          </nuxt-link>
        </b-taglist>
        <p class="credits is-size-7">
          <span>Speaker</span>
          <strong>
            <a :href="talk.author.profileURL">{{ talk.author.name }}</a>
          </strong>, added by
          <strong>
            <a :href="talk.contributor.profileURL">{{ talk.contributor.name }}</a>
          </strong>.
        </p>
        <p>{{ talk.description }}</p>
      </div>
      <div class="card-footer">
        <a :href="talk.link.profileURL" class="card-footer-item">Watch resource</a>
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
.card {
  height: 100%;
}
.card-content {
  padding-bottom: 68px;
}
.card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.credits {
  margin: 14px 0;
}
</style>
