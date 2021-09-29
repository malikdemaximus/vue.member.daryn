import axiosInstance from '@/services/axios'
import { rejectError } from '@/helpers'

//namespaced: true,
export const state = {
    user: null,
    isAuthResolved: false
};
export const getters = {
    authUser (state) {
        return state.user || null
    },
    isAuthenticated (state) {
        return !!state.user
    }
};
export const actions = {
    loginWithEmailAndPassword ({commit}, userData) {
        return axiosInstance.post('/api/auth/login', userData)
            .then(res => {
                const user = res.data
                localStorage.setItem('token', user.token)
                commit('setAuthState', true)
                commit('setAuthUser', user)
            })
            .catch(err => rejectError(err))
    },
    getAuthUser ({getters}) {
        const authUser = getters['authUser']
        const token = localStorage.getItem('token')

        if (authUser && token) { return Promise.resolve(authUser) }
    },
    logout ({commit}) {
        return new Promise((resolve) => {
            localStorage.removeItem('token')
            commit('setAuthUser', null)
            resolve(true)
        })
    },
};
export const mutations = {
    setAuthUser (state, user) {
        return state.user = user
    },
    setAuthState (state, authState) {
        return state.isAuthResolved = authState
    }
}












