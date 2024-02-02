// actions.js
export const incrementWpm = (wpm) => ({
    type: 'WPM',
    payload:{
        wpm
    }
  });
  
  export const incrementAcc = (acc) => ({
    type: 'ACC',
    payload:{
        acc
    }
  });
  
  export const incrementAvgWpm = (count,wpm) => ({
    type: 'AVGWPM',
    payload:{
        count,
        wpm
    }
  });
  