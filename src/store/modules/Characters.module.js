import { getAllCharacters } from '@/api/characters.api'

const state = {
	characters: [],
}

const getters = {
	getCharacters(state) {
		return state.characters
	},
}

const actions = {
	async fetchCharacters({ commit }) {
		try {
			const response = await getAllCharacters()
			commit('SET_CHARACTERS', response.data.results)
		} catch (error) {
			console.error(error)
		}
	},
}

const mutations = {
	SET_CHARACTERS(state, data) {
		state.characters = data
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
