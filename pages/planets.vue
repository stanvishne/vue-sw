<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/rebelLogo.png" class="rebel-logo">
      <blockquote class="blockquote">Star Wars planets</blockquote>
      <v-list two-line>
        <v-expansion-panel dark focusable>
          <v-expansion-panel-content v-for="(item,i) in items" :key="i">
            <div slot="header">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              {{ item.name }}
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-list>
      <v-btn :disabled="!previous" color="pink" dark small bottom left fab @click="loadPrevious">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-btn :disabled="!next" color="pink" dark small bottom left fab @click="loadNext">
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
      items: 'planets/getPlanets',
      next: 'planets/getNext',
      previous: 'planets/getPrevious'
    })
  },
  beforeMount() {
    this.fetchPlanets()
  },

  methods: {
    ...mapActions({
      fetchPlanets: 'planets/getPlanets'
    }),
    loadNext: function() {
      this.fetchPlanets({ url: this.next })
    },
    loadPrevious: function() {
      this.fetchPlanets({ url: this.previous })
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
