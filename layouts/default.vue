<template>
  <div class="background">
    <b-navbar type="is-dark" :shadow="true" :mobile-burger="false">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">📖 Talks-bookish</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <a
            class="button is-primary icon-left"
            href="https://github.com/Edouardbozon/talks-bookish/edit/master/static/resources.json"
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
          <strong>Talks-bookish</strong> by
          <a href="https://twitter.com/edouardbozon">Edouard Bozon</a>. The
          source code is
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          licensed.
          <a
            href="https://github.com/Edouardbozon/talks-bookish/edit/master/static/resources.json"
          >Add resource</a>
          to this list.
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
