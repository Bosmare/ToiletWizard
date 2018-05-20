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
  
  let nextState
  console.log('### REDUX LOG ###')
  
  if (!state) {
    console.log('setting initial state')
    nextState = initialState
  }
  else if (REDUCERS[action.type]){
    nextState = REDUCERS[action.type] (state,action)
  }
  else {
    console.log('undefined action type: ' + action.type)
    nextState = state
  }

  console.log('action: ', action)
  console.log('next state: ', nextState)
  console.log('### END LOG ###')

  return nextState
}