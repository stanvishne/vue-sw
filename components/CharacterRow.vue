<template>
  <v-list-tile
    :key="item.title"
    avatar
  >
    <v-list-tile-avatar>
      <img :src="item.avatar">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="item.name"/>
      <v-list-tile-sub-title v-html="item.gender"/>
    </v-list-tile-content>
  </v-list-tile>  
</template>

<script>
export default {
  name: 'CharacterRow',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
