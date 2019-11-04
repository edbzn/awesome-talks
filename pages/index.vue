<template>
  <section class="main-content columns">
    <aside class="column is-2 section">
      <Tags :tags="tags" />
    </aside>
    <div class="container column is-10">
      <section class="section">
        <h1 class="title">Best talks</h1>
        <div class="columns is-multiline">
          <talk
            v-for="(resource, index) in resources"
            :key="index"
            :talk="resource"
          ></talk>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import axios from '@nuxtjs/axios';
import Talk from '~/assets/components/Talk';
import Tags from '~/assets/components/Tags';

export default {
  name: 'browse',

  components: {
    Talk,
    Tags
  },

  async asyncData(context) {
    try {
      const { resources } = await context.$axios.$get('./resources.json');
      const tags = resources.reduce(
        (tagsAcc, { tags }) => [...tagsAcc, ...tags],
        []
      );

      return { resources, tags };
    } catch {
      return { resources: [], tags: [] };
    }
  }
};
</script>
