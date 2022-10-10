import { createStore } from 'vuex'

// firebase import
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth'

const store = createStore({
    state: {
        // points: 0
        user: null,
        authIsReady: false
    },
    mutations: {
        // updatePoints(state, payload) {
        //     state.points = state.points + payload
        // }
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed:', state.user)
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }

    },
    actions: {
        async signup(context, { email, password }) {
            console.log('signup action')

            // async code
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error('Could not complete Signup')
            }
            // setTimeout(() => {
            //     context.commit('setUser', { email, password })
            // }, 2000)
        },
        async login(context, { email, password }) {
            console.log('login action')

            // async code
            const res = await signInWithEmailAndPassword(auth, email, password)
            if (res) {
                context.commit('setUser', res.user)
            } else {
                throw new Error('Could not complete Login')
            }
        },
        async logout(context) {
            console.log('logout actions')

            await signOut(auth)
            context.commit('setUser', null)
        }
    }
})

const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})

// export the store
export default store