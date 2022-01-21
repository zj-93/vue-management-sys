import { signIn } from '@/api/login'
const user = {
    state: {
        userInfo: {}
    },
    mutations: {
        SET_USER_INFO(state, data) {
            state.userInfo = data
        }
    },
    actions: {
        Login({
            commit
        }, content) {
            new Promise((resolve, reject) => {
                signIn(content).then(res => {
                    if(res) {
                        commit('SET_USER_INFO', res.data)
                        resolve(res)
                    }
                })
            })
        }
    }
}

export default user