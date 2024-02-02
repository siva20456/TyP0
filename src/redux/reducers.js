// reducers.js
const initialState = {
    bestWpm: 0,
    avgWpm:0,
    Acc:0
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'WPM':
        console.log(action.payload,state.bestWpm)
        if (parseInt(action.payload.wpm) > parseInt(state.bestWpm)){
            return { ...state,bestWpm: action.payload.wpm };
        }
        return { ...state };
      case 'ACC':
        if (parseInt(action.payload.acc) > parseInt(state.Acc)){
            return { ...state, Acc:action.payload.acc };
        }
        return { ...state };
      case 'AVGWPM':
        const avgSum = eval(((action.payload.count - 1)*state.avgWpm) + action.payload.wpm) 
        return {...state, avgWpm:eval(avgSum/action.payload.count)}
      default:
        return state;
    }
  };
  
  export default rootReducer;
  