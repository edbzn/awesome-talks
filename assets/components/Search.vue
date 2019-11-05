<template>
  <b-field>
    <b-input
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
    resources: {
      type: Array,
      required: true
    },
    onSearch: {
      type: Function,
      required: true
    }
  },

  methods: {
    search(query) {
      this.onSearch(query.trim());
    }
  }
};
</script>
