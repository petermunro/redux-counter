import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import {incAction, decAction} from './actions';


const store = createStore(counter)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={/* call the increment action creator here */}
      onDecrement={/* call the decrement action creator here */}
    />,
    rootEl  
  )
}

render()
store.subscribe(render)
