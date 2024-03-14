
import './App.css'
import { CounterStore, useCounterStore } from './store'

const printCountValue = () => {
  const value = useCounterStore.getState().count
  //set state
  //useCounterStore.setState({count: 7})
 return (value)
}

function App() {
  const count = useCounterStore((state) => state.count)

  return (
    <>
    <p>Computed count state: {printCountValue()}</p>
     <button >
          count in parent is {count}
      </button>
      <OtherComponent count={count}/>
    </>
    
  )
}


const OtherComponent = ({count}: CounterStore) => {
  const { decrement, increment, asyncIncrement} = useCounterStore()
  return (
    <>
    
      <h1>Vite + React + Zustand</h1>
      <div className="card">
       
        <button onClick={asyncIncrement}>IncrementAsync</button> 
        <button onClick={increment}>IncrementAsync</button>
        <button >
          count is {count}
        </button>
        <button onClick={decrement}>Decremement</button>
       
      </div>
    
    </>
  )
}

export default App
