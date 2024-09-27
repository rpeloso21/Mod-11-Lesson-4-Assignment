import { useState } from 'react';
import Home from './Home';
import BrowseCharacters from './BrowseCharacters';
import CharacterDetails from './CharacterDetails';
import Comics from './Comics';
import Error from './Error';
import NavigationBar from './NavigationBar';
import './styles.css';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path='/home/' element={<Home/>}></Route>
        <Route path='/browse/' element={<BrowseCharacters/>}></Route>
        <Route path='/details/' element={<CharacterDetails/>}></Route>
        <Route path='/comics/' element={<Comics/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </div>
  )
}

export default App
