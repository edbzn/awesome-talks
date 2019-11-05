<template>
  <section class="columns">
    <aside class="column aside is-3">
      <section class="section">
        <Tags :tags="tags" />
        <Persons :persons="authors" type="Authors" />
        <Persons :persons="contributors" type="Contributors" />
      </section>
    </aside>
    <div class="column">
      <section class="section">
        <div class="container">
          <h1 class="title">📖 Tech talks</h1>
          <Search :resources="matchResources" :on-search="search" />
          <div class="columns is-multiline" v-if="!error">
            <Talk
              v-for="(resource, index) in matchResources"
              :key="index"
              :talk="resource"
            ></Talk>
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

  computed: {
    matchResources() {
      return this.resources.filter((resource) =>
        deepCompare(resource, this.query)
      );
    }
  },

  methods: {
    search(query) {
      this.query = query;
    }
  }
};
</script>

<style scoped>
.aside {
  max-width: 330px;
  min-width: 300px;
}
</style>
