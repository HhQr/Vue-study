const state = {
    title : '语文',
    number: 30
};

const getters = {

}

const mutations = {
    // 只能写同步事件
    add : function (state){
        state ++ ;
    }
}
 
const actions = {
    // 写任何异步事件
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}