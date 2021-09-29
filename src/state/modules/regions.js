import axiosInstance from '@/services/axios'
export const state = {
    regions: []
};

export const mutations = {

};

export const getters = {

};

export const actions = {
    fetchRegions ({state, commit}) {
        return axiosInstance.get('https://member.daryn.online/api/statistic/region')
            .then(res => {
                const regions = res.data;
                commit('setItems', {resource: 'regions', items: regions}, {root: true})
                return state.items
            })
    }
};
