import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        loading: false,
        error: null,
        episodes: [],
        episode: [],
        characters: [],
        character: [],
        favourites: [],
        winners: []
    },
    mutations: {
        SET_ERROR(state, payload) {
            state.error = payload
        },
        SET_LOADING(state, payload) {
            state.loading = payload
        },
        SET_EPISODE(state, payload) {
            state.episodes = payload
        },
        GET_EPISODE_ID(state, payload) {
            state.episode = payload
        },
        SET_CHARACTERS(state, payload) {
            state.characters = payload
        },
        GET_CHARACTER_ID(state, payload) {
            state.character = payload
        },
        ADD_TO_FAVOURITS(state, payload) {
            if (localStorage.getItem('favourites')) {
                let localStorageArr = JSON.parse(localStorage.getItem('favourites'))
                console.log(localStorageArr)
                localStorageArr.push(payload)
                localStorage.setItem("favourites", JSON.stringify(localStorageArr))
            } else {
                let localStorageArrEmpty = [payload]
                localStorage.setItem("favourites", JSON.stringify(localStorageArrEmpty))
            }
        },
        GET_FAVOURITES(state) {
            state.favourites = JSON.parse(localStorage.getItem('favourites'));
        },
        GET_FILTER_WINNERS(state, payload) {
            state.winners = payload
        }
    },
    actions: {
        async getEpisodes({commit}) {
            commit('SET_LOADING', true)
            return await axios.get('https://www.breakingbadapi.com/api/episodes')
                .then((res) => {
                    if (res && res.data) {
                        commit("SET_EPISODE", res.data)
                    }
                    commit('SET_LOADING', false)
                }).catch((error) => {
                    return error
                })
        },
        async getEpisodeId({commit}, payload) {
            commit('SET_LOADING', true)
            return await axios.get('https://www.breakingbadapi.com/api/episodes/' + payload)
                .then((res) => {
                    commit("GET_EPISODE_ID", res.data)
                    commit('SET_LOADING', false)
                }).catch((error) => {
                    return error
                })
        },
        async getCharacters({commit}) {
            commit('SET_LOADING', true)
            return await axios.get('https://breakingbadapi.com/api/characters')
                .then((res) => {
                    if (res && res.data) {
                        commit("SET_CHARACTERS", res.data)
                    }
                    commit('SET_LOADING', false)
                }).catch((error) => {
                    return error
                })
        },
        async getCharacterId({commit}, payload) {
            commit('SET_LOADING', true)
            return await axios.get('https://breakingbadapi.com/api/characters/' + payload.char_id)
                .then((res) => {
                    commit("GET_CHARACTER_ID", res.data)
                    commit('SET_LOADING', false)
                }).catch((error) => {
                    return error
                })
        },
        async getWinners({commit}) {
            return await axios.get('https://breakingbadapi.com/api/characters')
                .then((res) => {
                    let largest = res.reduce(function (x, y) {
                        return (x > y) ? x : y;
                    });
                    console.log(largest, 'fwefw')
                    commit('GET_FILTER_WINNERS', largest)
                }).catch((error) => {
                    return error
                })
        }
    },
    getters: {
        episodes(state) {
            return state.episodes
        },
        episode(state) {
            return state.episode
        },
        characters(state) {
            return state.characters
        },
        character(state) {
            return state.character
        },
        loading(state) {
            return state.loading
        },
        favourites(state) {
            return state.favourites
        },
        winners(state) {
            return state.winners
        }
    }
})
export default store
