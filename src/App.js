import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Viesti from './Viesti'
import Posts from './Posts'
import { scryRenderedDOMComponentsWithTag } from 'react-dom/test-utils'


const App = () => {

//App komponetin tila
const [showLaskuri, setShowLaskuri] = useState(false)
const [showPosts, setShowPosts] = useState(true)
const huomio = () => {
  alert ('Huomio!')
} 

  return (
    <div className="App">
      <h1>Hello from React!</h1>

      {showLaskuri && <Laskuri huomio={huomio} />}

      {showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Piilota laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(!showLaskuri)}>Näytä laskuri</button>}

      {!showPosts && <button onClick={() => setShowPosts(!showPosts)}>Näytä posts</button>}

      {showPosts && <button onClick={() => setShowPosts(!showPosts)}>Piilota posts</button>}
     
      <Viesti  teksti="Tervehdys app komponentista" />
      {showPosts && <Posts/>}
 
    </div>
  )
}

export default App
