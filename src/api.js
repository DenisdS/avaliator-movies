import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  adapter: httpAdapter,
})

export default {
  loadMovies() {
    return instance
      .get(`/discover/movie?api_key=42967963fa2a9e38812670e90648d790&language=pt-BR`)
      .then(result => result.data)
  }
}