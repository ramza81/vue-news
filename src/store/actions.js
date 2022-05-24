import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItem } from '../api/index.js';

export default {
    // // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS', response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },

    // async
    async FETCH_NEWS({ commit }) {
        try {
            const response = await fetchNewsList();
            commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },    

    // // promise
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //     .then(({ data }) => {
    //         commit('SET_ASK', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },

    // async
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },

    // // promise
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //     .then(({ data }) => {
    //         commit('SET_JOBS', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },

    // async
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList();
        commit('SET_JOBS', response.data);
        return response;
    },  

    // // promise
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //     .then(({ data }) => {
    //         commit('SET_USER', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },

    // async
    async FETCH_USER({ commit }, name) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;
    },      

    // // promise
    // FETCH_ITEM({ commit }, item) {
    //     return fetchItem(item)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // },

    // async
    async FETCH_ITEM({ commit }, item) {
        const response = await fetchItem(item);
        commit('SET_ITEM', response.data);
        return response;
    },     

    // // promise
    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //     .then(({ data }) => commit('SET_LIST', data))
    //     .catch(error => console.log(error));
    // },

    // async
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST', response.data);
        return response;
    },      
}