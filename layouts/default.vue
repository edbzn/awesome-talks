<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Talks-bookish</a>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
    <nuxt />
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
            >Add resources</a
          >
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
html {
  background: #f8f8f8;
}
.footer {
  padding: 3rem 1.5rem 3rem;
  background: #eee;
}
</style>
