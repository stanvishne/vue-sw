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
              <character-info
                :item="item"
                :planets="planets"/>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-list>
      <v-btn
        :disabled="!previous"
        color="pink"
        dark
        small        
        bottom
        left
        fab
        @click="loadPrevious">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-btn
        :disabled="!next"        
        color="pink"
        dark
        small
        bottom
        left
        fab
        @click="loadNext">
        <v-icon>chevron_right</v-icon>
      </v-btn>
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
      items: 'characters/getCharacters',
      next: 'characters/getNext',
      previous: 'characters/getPrevious',
      planets: 'planets/getPlanets'
    })
  },
  beforeMount() {
    this.fetchCharacters()
  },

  methods: {
    ...mapActions({
      fetchCharacters: 'characters/getCharacters'
    }),
    loadNext: function() {
      this.fetchCharacters({ url: this.next })
    },
    loadPrevious: function() {
      this.fetchCharacters({ url: this.previous })
    }
  }
}
</script>

<style scoped>
.rebel-logo {
  width: 50px;
  height: 50px;
}
</style>
