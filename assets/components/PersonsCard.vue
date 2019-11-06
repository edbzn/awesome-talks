<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">{{ type }} ({{ persons.length }})</div>
    </header>
    <ul class="card-content">
      <li v-for="person in persons" :key="person.name">
        <nuxt-link :to="'?q=' + person.name">@{{ person.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    persons: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
</script>
