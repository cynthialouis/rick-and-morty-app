import { getAllCharactersFromApi } from '@/api/characters.api'

const state = {
	characters: [],
	pagination: null,
}

const getters = {
	getCharacters(state) {
		return state.characters
	},
	getPagination(state) {
		return state.pagination
	},
}

const actions = {
	async fetchCharactersFromApi({ commit }, params) {
		try {
			const response = await getAllCharactersFromApi(params)
			commit('SET_CHARACTERS', response.data.results)
			commit('SET_PAGINATION', response.data.info)
		} catch (error) {
			console.error(error)
		}
	},
}

const mutations = {
	SET_CHARACTERS(state, data) {
		state.characters = data
	},
	SET_PAGINATION(state, data) {
		state.pagination = data
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
