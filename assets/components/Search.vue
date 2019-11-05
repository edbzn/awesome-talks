<template>
  <b-field>
    <b-input
      v-model="q"
      rounded
      placeholder="Search anything..."
      @input="search"
      @change="search"
      type="search"
      icon="magnify"
    ></b-input>
  </b-field>
</template>

<script>
export default {
  props: {
    query: {
      type: String,
      required: true
    },
    onSearch: {
      type: Function,
      required: true
    }
  },

  data() {
    return { q: this.query };
  },

  watch: {
    query() {
      this.q = this.query;
    }
  },

  methods: {
    search(query) {
      this.onSearch(query.trim());
    }
  }
};
</script>
