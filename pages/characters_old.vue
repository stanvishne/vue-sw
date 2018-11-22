<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5">
      <blockquote class="blockquote">
        Star Wars characters
      </blockquote>
      <v-list two-line>
        <template v-for="(item,i) in items">
          <character-row
            :key="i-item.name"
            :item="item" />
          <v-divider :key="i" />
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import CharacterRow from '../components/CharacterRow.vue'
import Api from '../Api/characters.js'
import gApi from '../Api/giphy.js'

export default {
  components: {
    CharacterRow
  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    const res = await this.loadC()
    const updatedRes = await Promise.all(
      res.map(async item => {
        const images = await gApi.getImages(item.name)
        const imageUrl = images.data[0].images['480w_still'].url
        const updatedItem = { ...item, avatar: imageUrl }
        return updatedItem
      })
    )

    this.items = updatedRes
  },
  methods: {
    loadC: async () => {
      const res = await Api.getCharacters()
      const results = res.results
      return results
    }
  }
}
</script>
