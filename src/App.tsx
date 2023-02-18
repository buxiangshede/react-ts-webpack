import React, {useState} from 'react';
import './app.css'
import Component1 from './Com1'
function App() {
  const [ count, setCounts ] = useState('')
  const onChange = (e: any) => {
    setCounts(e.target.value)
  }
  return (
        <>
          <h2>webpack5-react-tsq s <p>123</p></h2>
          <p style={{marginTop: '200px'}}>受控组件</p>
          <input type="text" value={count} onChange={onChange} />
          <br />
          <p>非受控组件</p>
          <input type="text" />
        <Component1 />
      </>
    )
 
}

export default App