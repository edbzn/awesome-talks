<template>
  <div class="columns is-vcentered is-mobile">
    <div class="column">
      <Search :query="query" :on-search="onSearch" />
    </div>
    <div class="column">
      <b-taglist>
        <b-tag rounded type="is-dark">
          {{ resources.length }}
          {{ resources.length > 1 ? 'resources' : 'resource' }}
        </b-tag>
        <b-tag
          v-if="query"
          rounded
          type="is-info"
          closable
          attached
          aria-close-label="Reset search"
          @close="onReset"
          >{{ query }}</b-tag
        >
      </b-taglist>
    </div>
  </div>
</template>

<script>
import Search from '~/assets/components/Search';

export default {
  components: {
    Search
  },

  props: {
    resources: {
      type: Array,
      required: true
    },
    query: {
      type: String,
      required: true
    },
    onSearch: {
      type: Function,
      required: true
    },
    onReset: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.navbar {
  background: #f8f8f8;
}
.has-addons {
  margin-bottom: 0;
}
</style>
