import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { incrementAcc, incrementAvgWpm, incrementWpm } from './redux/actions';
import store from './redux/store';
import './App.css';

function App({bestWpm,avgWpm,Acc,incrementAcc,incrementAvgWpm,incrementWpm}) {

  const [count, setCount] = useState(0)
  const [wpm, setWpm] = useState(0)
  const [acc, setAcc] = useState(0)
  const [word,setWord] = useState('')
  var startTime;
  var endTime;
  // console.log(store.getState().bestWpm)

  useEffect(() => {
    const source = 'asdfjkl;'
    const count = Math.floor(Math.random() * source.length)+1;
    let word = ''
    for(let i = 0 ; i < count;i ++ ){
      const ind1 = Math.floor(Math.random() * source.length);
      const ind2 = Math.floor(Math.random() * source.length);
      word += source.slice(Math.min(ind2,ind1),Math.max(ind1,ind2)+1) + ' '
    }
    setCount(count+1)
    setWord(word.trim())
  },[wpm])

  const handleType = (e) => {
    if(e.target.value === word){
      let time = startTime - endTime
      let wpm = Math.floor(eval(time/(60))*10)
      setAcc(100)
      // store.
      // store.dispatch(incrementAcc(100))
      // store.dispatch(incrementAvgWpm(count,wpm))
      // store.dispatch(incrementWpm(wpm))
      incrementAcc(100)
      incrementAvgWpm(count,wpm)
      incrementWpm(wpm)
      setWpm(wpm)
      e.target.value = ''
    }
  }


  return (
    <div className="App">
      <header className="header">
        <div className="container-header">
          <div className="logo">
            <h1>TyP0</h1>
          </div>
          <div className="stats">
            <p>Average WPM: <span className="wpm">{avgWpm}</span></p>
            <p>Accuracy: <span className="accuracy">{Acc}</span></p>
            <p>Best WPM: <span className="accuracy">{bestWpm}</span></p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="words-container">
          <h2>{word}</h2>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Start typing..." onChange={(e) => handleType(e)} onKeyDown={() => startTime = Date.now()} onKeyUp={() => endTime = Date.now()} />
        </div>
        <div style={{display:'flex'}}>
        <p style={{color:'white',fontSize:20}}>WPM: <span className="wpm" style={{marginRight:20}}>{wpm}</span></p>
        <p style={{color:'white',fontSize:20}}>Accuracy: <span className="accuracy">{acc}</span></p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  bestWpm: state.bestWpm,
  avgWpm: state.avgWpm,
  Acc: state.Acc
});

const mapDispatchToProps = (dispatch) => ({
  incrementAcc: (Acc) => dispatch(incrementAcc(Acc)),
  incrementAvgWpm:(count,wpm) => dispatch(incrementAvgWpm(count,wpm)),
  incrementWpm:(wpm)=>dispatch(incrementWpm(wpm))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App
