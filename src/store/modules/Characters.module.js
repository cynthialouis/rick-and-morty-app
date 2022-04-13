import { getAllCharactersFromApi } from '@/api/characters.api'

const state = {
	characters: [],
}

const getters = {
	getCharacters(state) {
		return state.characters
	},
}

const actions = {
	async fetchCharactersFromApi({ commit }, params) {
		try {
			const response = await getAllCharactersFromApi(params)
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
