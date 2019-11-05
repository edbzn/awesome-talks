<template>
  <section class="columns">
    <aside class="column aside is-3 is-hidden-mobile">
      <section class="section">
        <Tags :tags="tags" />
        <Persons :persons="authors" type="Authors" />
        <Persons :persons="contributors" type="Contributors" />
      </section>
    </aside>
    <div class="column">
      <section class="section">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-one-third">
              <Search :query="query" :on-search="search" />
            </div>
            <div class="column has-text-right is-size-7">
              <span class="mr">
                <b-tag
                  v-if="query"
                  rounded
                  type="is-info"
                  closable
                  aria-close-label="Reset search input"
                  @close="reset"
                >{{ query }}</b-tag>
              </span>
              <span v-if="query">{{ matchResources.length }} items found</span>
              <span v-else>{{ matchResources.length }} items</span>
            </div>
          </div>
          <div class="mt columns is-multiline" v-if="!error">
            <Talk v-for="(resource, index) in matchResources" :key="index" :talk="resource"></Talk>
            <section class="column hero is-large" v-if="query && matchResources.length === 0">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">No match found for "{{ query }}".</h1>
                  <h2 class="subtitle">Please try another keyword.</h2>
                </div>
              </div>
            </section>
          </div>
          <b-message v-else type="is-danger">{{ error }}</b-message>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios';
import Talk from '~/assets/components/Talk';
import Search from '~/assets/components/Search';
import Tags from '~/assets/components/Tags';
import Persons from '~/assets/components/Persons';
import { pick, pickAndSpread } from '~/utils/pick';
import { deepCompare } from '~/utils/compare';

export default {
  name: 'browse',

  components: {
    Search,
    Talk,
    Persons,
    Tags
  },

  data() {
    return { query: '' };
  },

  async asyncData(context) {
    try {
      const { resources } = await context.$axios.$get('./resources.json');
      const tags = pickAndSpread(resources, 'tags');
      const authors = pick(resources, 'author');
      const contributors = pick(resources, 'contributor');
      return { resources, tags, contributors, authors, error: null };
    } catch (error) {
      return {
        resources: [],
        tags: [],
        contributors: [],
        authors: [],
        error: error.message
      };
    }
  },

  watch: {
    '$route.query.q'(query = '') {
      this.search(query);
    }
  },

  computed: {
    matchResources() {
      if (!this.query) {
        return this.resources;
      }

      return this.resources.filter((resource) =>
        deepCompare(resource, this.query)
      );
    }
  },

  methods: {
    search(query) {
      this.query = query;
      if (query) {
        this.$router.push({ path: this.$route.path, query: { q: query } });
      } else {
        this.$router.push({ path: this.$route.path });
      }
    },
    reset() {
      this.search('');
    }
  },

  created() {
    if (this.$route.query.q) {
      this.query = this.$route.query.q;
    }
  }
};
</script>

<style scoped>
.aside {
  max-width: 330px;
  min-width: 260px;
}
.hero {
  text-align: center;
}
.mt {
  margin-top: 8px;
}
.mr {
  margin-right: 8px;
}
</style>
