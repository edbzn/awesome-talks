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
          <SearchBar
            :on-search="search"
            :on-reset="reset"
            :resources="matchResources"
            :query="query"
          />
          <TalkList :resources="matchResources" :query="query" :error="error" />
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios';
import TalkList from '~/assets/components/TalkList';
import SearchBar from '~/assets/components/SearchBar';
import TagsCard from '~/assets/components/TagsCard';
import PersonsCard from '~/assets/components/PersonsCard';
import { pick, pickAndSpread } from '~/utils/pick';
import { deepCompare } from '~/utils/compare';

export default {
  name: 'browse',

  components: {
    SearchBar,
    TalkList,
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
.mr {
  margin-right: 8px;
}
</style>
