<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/rebelLogo.png"
        alt="Vuetify.js"
        class="rebel-logo">
      <blockquote class="blockquote">
        Star Wars characters
      </blockquote>
      <v-list two-line>
        <v-expansion-panel
          dark 
          focusable>
          <v-expansion-panel-content
            v-for="(item,i) in items"
            :key="i"
          >
            <div slot="header">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              {{ item.name }}
            </div>
            
            <v-card>
              <character-info :item="item" />
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import CharacterInfo from '../components/CharacterInfo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    CharacterInfo
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      items: 'characters/getCharacters'
    })
  },
  beforeMount() {
    this.fetchCharacters()
  },

  methods: {
    ...mapActions({
      fetchCharacters: 'characters/getCharacters'
    })
  }
}
</script>

<style scoped>
.rebel-logo {
  width: 50px;
  height: 50px;
}
</style>
