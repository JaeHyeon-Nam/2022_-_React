import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

const Join = () => {

  const initial = () =>{
    var input1 = document.getElementById('spdla')
    input1.value = null;
   
    var input2 = document.getElementById('coxldqkd')
    input2.value = null;
    
  }


  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  return (
    <div className='temp1'>
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'></h1>
        <div>
          <input
            placeholder='이름'
            className='joinInput'
            type='text'
            id='spdla'
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='지역 (ex. 청주시 상당구)'
            className='joinInput mt-20'
            type='text'
            id='coxldqkd'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={'button mt-20'} type='submit'>
            입장
          </button>

        </Link>
        <Link 
          to={`/`}>
        <button className={'button mt-20'} type='submit' onClick={()=>{initial()}}>
            나가기
          </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Join