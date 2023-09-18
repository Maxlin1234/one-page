<template>
  <span v-for="(part, i) in parts" :key="i" style="display: block">
    {{ part }}
    <br v-if="i !== parts.length - 1" />
  </span>
</template>

<script setup>
const { statement } = defineProps(['statement']);
let parts = statement.split('<BR>');
</script>