import {
	getAllCharactersFromApi,
	getCharacterFromApi,
} from '@/api/characters.api'

const state = {
	characters: [],
	pagination: null,
	character: null,
	error: null,
}

const actions = {
	async fetchCharactersFromApi({ commit }, params) {
		const response = await getAllCharactersFromApi(params)
		if (response) {
			commit('SET_CHARACTERS', response.data.results)
			commit('SET_PAGINATION', response.data.info)
		}
	},
	async fetchCharacterFromApi({ commit }, id) {
		const response = await getCharacterFromApi(id)
		commit('SET_CHARACTER', response.data)
	},
}

const mutations = {
	SET_CHARACTERS(state, characters) {
		state.characters = characters
	},
	SET_PAGINATION(state, pagination) {
		state.pagination = pagination
	},
	SET_CHARACTER(state, character) {
		state.character = character
	},
	SET_ERROR(state, error) {
		state.characters = []
		state.character = null
		state.error = error
	},
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}
