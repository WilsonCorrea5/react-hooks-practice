import React from 'react'
import ReactDOM from 'react-dom/client'

import { TodoApp } from './08-useReducer/TodoApp'

// import { CallbackHook } from './05-memos-and-useMemo/CallbackHook'
// import { MemoHook } from './05-memos-and-useMemo/MemoHook'
// import { Memorize } from './05-memos-and-useMemo/Memorize'
// import { Layout } from './04-useLayoutEffect/Layout'
// import { FocusScreen } from './03-useRef/FocusScreen'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterCustomHook } from './01-useState/CounterCustomHook'
// import { FormCustomHook } from './02-useEffect/FormCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import {HooksApp} from './HooksApp'
// import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
// import { Padre } from './06-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
   <TodoApp/>
 //</React.StrictMode>
)
