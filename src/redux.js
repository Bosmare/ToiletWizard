const initialState = {
  error: '',
  fetching: true,
  toiletData: []
}

const REDUCERS = {
  TOILETS_REQUESTED: state => Object.assign(
    {},
    state,
    {fetching: true}
  ),
  TOILETS_SUCCESS: (state, action) => Object.assign(
    {},
    state,
    {
      toiletData: action.toiletData,
      fetching: false
    }
  ),
  TOILETS_ERROR: state => Object.assign(
    {},
    state,
    {
      fetching: true,
      error: action.error
    }
  )
}

export const rootReducer = (state, action) => {
  if (!state) return initialState

  if (REDUCERS[action.type]){
    return REDUCERS[action.type] (state,action)
  }
  else {
    console.log('undefined action type: ' + action.type)
    return state
  }
}