import Vue from 'vue'
import Vuex from 'vuex'
import GAMES_DATA from '../datas/games.json'
import POKEMONS_DATA from '../datas/pokemons.json'

Vue.use(Vuex)

const STATE = {
  pokemons: POKEMONS_DATA,
  games: GAMES_DATA
};
const GETTERS = {
  pokemons: state => state.pokemons,
  pokemons_sort_byid: state => state.pokemons.sort((a, b) => {
    if(a.national_id.slice(1,4) > b.national_id.slice(1,4)){
      return 1;
    } else if (a.national_id.slice(1,4) == b.national_id.slice(1,4)) {
      return (a.name_chs.length > b.name_chs.length) ? 1 : -1;
    } else {
      return -1;
    }
  }),
  games: state => state.games,
};
const MUTATIONS = {};
const ACTIONS = {};

export default new Vuex.Store({
  state: STATE,
  getters: GETTERS,
  mutations: MUTATIONS,
  actions: ACTIONS,
  modules: {}
})
