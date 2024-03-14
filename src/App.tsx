
import './App.css'
import { useCounterStore } from './store'

function App() {
  const {count} = useCounterStore()

  return (
    <>
     <button >
          count in parent is {count}
      </button>
      <OtherComponent count={count}/>
    </>
    
  )
}


const OtherComponent = (props:any) => {
  const { decrement, increment} = useCounterStore()
  return (
    <>
    
      <h1>Vite + React + Zustand</h1>
      <div className="card">
        <button >
          count is {props.count}
        </button>
        <button onClick={increment}>Increment</button> <button onClick={decrement}>Decremement</button>
       
      </div>
    
    </>
  )
}

export default App
