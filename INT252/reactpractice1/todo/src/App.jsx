import React from 'react'
import Forminp from './components/Forminp'
import Formoup from './components/Formoup'
import { useState } from 'react'
import ImageGallery from './components/ImageGallery'
import Imginp from './components/Imginp'
import Imagesoup from './components/Imagesoup'

const App = () => {
  const [task,settask]=useState([])

  function addtask(url){
    const copytask=[...task]
    copytask.push(url)
    settask(copytask)
   

  }

  function deletetask(idx){
    const copytask=[...task]
    copytask.splice(idx,1)
    settask(copytask)
  }



  return (
    <div>
      <Imginp addtask={addtask}/>
      <Imagesoup task={task} deletetask={deletetask} />
    </div>
  )
}

export default App
