<template>
  <div
    class="column is-one-mobile is-12-tablet is-half-desktop is-half-widescreen is-one-third-fullhd"
  >
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">{{ talk.title }}</div>
      </header>
      <div class="card-content">
        <Tags :tags="talk.tags" />
        <Credits :author="talk.author" :contributor="talk.contributor" />
        <p>{{ talk.description }}</p>
      </div>
      <div class="card-footer">
        <a :href="talk.link.profileURL" class="card-footer-item"
          >Watch resource</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '~/assets/components/Tags';
import Credits from '~/assets/components/Credits';

export default {
  components: {
    Tags,
    Credits
  },

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
</style>
