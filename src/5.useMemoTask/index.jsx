import { useState } from 'react'
import Count from './Count'
import IsFive from './IsFive'

function UseMemoTask() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className='app'>
      <div>
        <h2>Light</h2>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1} />
      </div>
      <div>
        <h2>Hard</h2>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <IsFive value={count2} />
      </div>
    </div >
  )
}

export default UseMemoTask
