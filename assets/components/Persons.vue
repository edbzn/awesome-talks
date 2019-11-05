<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title">{{ type }} ({{ persons.length }})</div>
    </header>
    <ul class="card-content">
      <li v-for="person in persons" :key="person.name">
        <a :href="'persons/' + person.name">@{{ person.name }}</a>
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
