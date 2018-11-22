<template>
  <v-card-text class="gray">
    <p>gender: {{ item.gender }}</p>
    <p>height: {{ item.height }}</p>
    <p>mass: {{ item.mass }}</p>
    <p>hair color: {{ item['hair_color'] }}</p>
    <p>birth year: {{ item['birth_year'] }}</p>
  </v-card-text>
</template>

<script>
export default {
  name: 'CharacterInfo',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
