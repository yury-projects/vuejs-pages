import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jwt: null,
    },
    actions: {
        setJWT({dispatch}, newJWT) {
            dispatch('SET_JWT', newJWT)
        }
    },
    mutations: {
        SET_JWT (state, newJWT) {
            state.jwt = newJWT
        }
    }
})
