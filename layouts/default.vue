<template>
  <div class="background">
    <b-navbar type="is-dark" transparent>
      <template slot="brand">
        <b-navbar-item tag="nuxt-link" :to="{ path: '/' }"
          >awesome-talks</b-navbar-item
        >
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <a
            class="button icon-left is-primary is-inverted is-outlined is-rounded"
            href="https://github.com/Edouardbozon/awesome-talks/blob/master/README.md"
          >
            <b-icon icon="help" size="is-small"></b-icon>
            <strong>How it works</strong>
          </a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <a
            class="button is-primary icon-left is-rounded"
            href="https://github.com/Edouardbozon/awesome-talks/edit/master/static/resources.json"
          >
            <b-icon icon="plus"></b-icon>
            <strong>Add resource</strong>
          </a>
        </b-navbar-item>
      </template>
    </b-navbar>
    <main class="main">
      <nuxt />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Made by
          <a href="https://twitter/com/edouardbozon">Edouard Bozon</a> and
          <a href="https://github.com/Edouardbozon/awesome-talks/contributors"
            >contributors</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Browse',
          icon: 'browse',
          to: { name: 'browse' }
        }
      ]
    };
  }
};
</script>

<style>
.background {
  background: #f8f8f8;
}
.footer {
  padding: 3rem 1.5rem 3rem;
  background: #eee;
}
.main {
  min-height: calc(100vh - 44px);
}
</style>
