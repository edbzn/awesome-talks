<template>
  <b-navbar :mobile-burger="false">
    <template slot="start">
      <b-navbar-item tag="div">
        <Search :query="query" :on-search="onSearch" />
      </b-navbar-item>
    </template>
    <template slot="end">
      <transition name="fade">
        <b-navbar-item tag="div" v-if="query">
          <b-tag
            rounded
            type="is-info"
            closable
            attached
            aria-close-label="Reset search input"
            @close="onReset"
            >{{ query }}</b-tag
          >
        </b-navbar-item>
      </transition>
      <b-navbar-item tag="div">
        <b-tag rounded type="is-dark"
          >{{ resources.length }}
          {{ resources.length > 1 ? 'items' : 'item' }}</b-tag
        >
      </b-navbar-item>
    </template>
  </b-navbar>
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
