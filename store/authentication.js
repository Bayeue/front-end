const state = () => ({
  token: null,
})

const mutations = {
  setToken(state, param) {
    state.token = param
  },
}

const actions = {
  setToken(store, param) {
    store.commit('setToken', param)
  },
  async fetchLogin(store, param) {
    const response = await this.$axios.post(
      // 'https://virtserver.swaggerhub.com/gozza/Payment-Point/1.0.0-beta/api/users/login',
      'http://localhost:19000/login',
      {
        username: param.email,
        password: param.password,
      }
    )

    this.$cookies.set('token', response.data.result.token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    store.commit('setToken', response.data.result.token)

    this.$router.push('/')
  },
  async fetchLogout(store) {},
}

export default { state, mutations, actions }
