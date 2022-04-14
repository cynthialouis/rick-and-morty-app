import httpClient from './httpClient'

const getAllCharactersFromApi = (params) =>
	httpClient.get('/api/character', { params })

const getCharacterFromApi = (id) => httpClient.get(`/api/character/${id}`)

export { getAllCharactersFromApi, getCharacterFromApi }
