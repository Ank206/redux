import {increment, decrement, incrementByAmount, selectCount} from "./slices/buttonSlice"
import {useRef} from 'react'
import { useAppSelector, useAppDispatch } from './hooks/hooks';

function App() {
  const dispatch = useAppDispatch();
  const value = useRef(0);
  const count = useAppSelector(selectCount);
  return (
    <>
    	<h1 className="flex justify-center items-center bg-red-400"> Hello World </h1>
	<div>
		Number of times the button is pressed: {count}
	</div>
	<button onClick={
		() => {
			dispatch(increment())	
		}
	}> 
		Increment 
	</button>
	<button onClick={
		() => {
			dispatch(decrement())
		}
	}>
		Decrement
	</button>
	<br/>
	Value: <input type="number" ref={value}/>
	<br/>
	<button onClick={
		() => {
			const number = Number(value.current.value) || 0
			console.log(number)
			dispatch(incrementByAmount(number))
			value.current.value = 0
		}
	} >
		Increment by given value
	</button>
    </>
  )
}

export default App













