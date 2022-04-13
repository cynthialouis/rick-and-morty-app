import httpClient from './httpClient'

const getAllCharacters = () => httpClient.get('/api/character')

export { getAllCharacters }
