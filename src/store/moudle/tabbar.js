const tabBar = {
    state: {
        barList: [{
            key:"Home",
            keyPath:"/home"
        }]
    },
    mutations: {
        SET_BAR_LIST: (state, content) => {
            // 不允许重复，每个标签只允许存在一个
            let ind = state.barList.findIndex(el => el.key === content.key)
            if(ind == -1) {
                state.barList.push(content)
            }
            // 每个标签都可以重复打开多个
            // state.barList.push(content)
        },
        DEL_BAR_LIST: (state, index) => {
            state.barList.splice(index, 1)
        }
    },
    actions: {
        setBarList({
            commit
        },  content) {
            commit('SET_BAR_LIST', content)
        },
        delBarList({
            commit
        },  index) {
            commit('DEL_BAR_LIST', index)
        },
    }
}

export default tabBar