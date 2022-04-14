import {
	getAllCharactersFromApi,
	getCharacterFromApi,
} from '@/api/characters.api'

const state = {
	characters: [],
	pagination: null,
	character: null,
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
	async fetchCharacterFromApi({ commit }, id) {
		try {
			const response = await getCharacterFromApi(id)
			commit('SET_CHARACTER', response.data)
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
	SET_CHARACTER(state, data) {
		state.character = data
	},
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}
