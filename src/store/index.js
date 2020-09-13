import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inputValue: '',
        list: [],
        indexId: 4
    },
    mutations: {
        initList(state, listData) {
            state.list = listData
        },
        changeInput(state, value) {
            state.inputValue = value
        },
        addItem(state) {
            state.list.push({
                id: state.indexId,
                info: state.inputValue.trim(),
                done: false
            })
            state.indexId++;
            state.inputValue = ''
        },
        confirmItem(state, item) {
            state.list[item.id].done = !state.list[item.id].done
        },
        deleteItem(state, item) {
            //根据id查找对应的索引项
            const i = state.list.findIndex(x => x.id === item.id)
                //根据索引删除元素
            if (i !== -1) {
                state.list.splice(i, 1)
            }
        }
    },
    actions: {
        // context相当于store
        getList(context) {
            axios.get('/list.json').then(res => {
                // console.log(res);
                //因为只有mutation才能修改state中的数据
                context.commit('initList', res.data)
            })
        }
    },
    getters: {
        residue(state) {
            return state.list.filter(x => x.done === false).length
        }
    },
    modules: {}
})