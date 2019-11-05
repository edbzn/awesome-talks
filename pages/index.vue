<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <Tags :tags="tags" />
      <Persons :persons="authors" type="Authors" />
      <Persons :persons="contributors" type="Contributors" />
    </aside>
    <div class="container column is-10">
      <section class="section">
        <h1 class="title">Best talks</h1>
        <div class="columns is-multiline" v-if="!error">
          <Talk
            v-for="(resource, index) in resources"
            :key="index"
            :talk="resource"
          ></Talk>
        </div>
        <div v-else>{{ error }}</div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios';
import Talk from '~/assets/components/Talk';
import Tags from '~/assets/components/Tags';
import Persons from '~/assets/components/Persons';
import { pick, pickAndSpread } from '~/utils/pick';

export default {
  name: 'browse',

  components: {
    Talk,
    Persons,
    Tags
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
  }
};
</script>
