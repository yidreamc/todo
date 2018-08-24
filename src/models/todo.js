
export default {

  namespace: 'todo',

  state: {
    currentItem: {
      id: '',
      text: '',
    },
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    
    update(state, action) {
      return { ...state, ...action.payload }
    },

    submit(state) {
      state.list.push(state.currentItem)
      return { ...state,...state.list}
    }
  },

};
