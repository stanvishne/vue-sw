<template>
  <v-card-text class="character-info">
    <div class="info-div">
      <p>gender: {{ item.gender }}</p>
      <p>height: {{ item.height }}</p>
      <p>mass: {{ item.mass }}</p>
      <p>hair color: {{ item['hair_color'] }}</p>
      <p>birth year: {{ item['birth_year'] }}</p>
      <p>home planet: {{ planets.find(planet => item['homeworld'] === planet.url) ? planets.find(planet => item['homeworld'] === planet.url).name : '' }}</p>
    </div>
    <img :src="item.avatar">
  </v-card-text>
</template>

<script>
export default {
  name: 'CharacterInfo',
  props: {
    item: {
      type: Object,
      default: () => {}
    },
    planets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.character-info {
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-content: center;
  align-items: flex-start;
}
</style>
