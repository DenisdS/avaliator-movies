import api from '@/api'

export default {
  LIKE_MOVIE({ commit }, { title }) {
    return new Promise(async (resolve, reject) => {
      try {
        const card = await api.likeMovie(title)
        commit('SET_CARD', card)
        resolve(card)
      } catch(error) {
        reject(error)
      }
    })
  }
}