<template>
  <section class="columns">
    <aside class="column aside is-3 is-hidden-mobile">
      <section class="section">
        <TagsCard :tags="tags" />
        <PersonsCard :persons="authors" type="Authors" />
        <PersonsCard :persons="contributors" type="Contributors" />
      </section>
    </aside>
    <div class="column">
      <section class="section">
        <div class="container">
          <b-navbar :mobile-burger="false">
            <template slot="start">
              <b-navbar-item tag="div">
                <Search :query="query" :on-search="search" />
              </b-navbar-item>
            </template>
            <template slot="end">
              <b-navbar-item tag="div">
                <b-tag
                  v-if="query"
                  rounded
                  type="is-info"
                  closable
                  attached
                  aria-close-label="Reset search input"
                  @close="reset"
                  >{{ query }}</b-tag
                >
              </b-navbar-item>
              <b-navbar-item tag="div">
                <b-tag rounded type="is-dark" v-if="query"
                  >{{ matchResources.length }} items found</b-tag
                >
                <b-tag rounded type="is-dark" v-else
                  >{{ matchResources.length }} items</b-tag
                >
              </b-navbar-item>
            </template>
          </b-navbar>
          <div class="mt columns is-multiline" v-if="!error">
            <Talk
              v-for="(resource, index) in matchResources"
              :key="index"
              :talk="resource"
            ></Talk>
            <section
              class="column hero is-large"
              v-if="query && matchResources.length === 0"
            >
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
import TagsCard from '~/assets/components/TagsCard';
import PersonsCard from '~/assets/components/PersonsCard';
import { pick, pickAndSpread } from '~/utils/pick';
import { deepCompare } from '~/utils/compare';

export default {
  name: 'browse',

  components: {
    Search,
    Talk,
    TagsCard,
    PersonsCard
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
  min-width: 300px;
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
.navbar {
  background: #f8f8f8;
}
</style>
