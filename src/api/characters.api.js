import httpClient from './httpClient'

const getAllCharactersFromApi = (params) =>
	httpClient.get('/api/character', { params })

export { getAllCharactersFromApi }
