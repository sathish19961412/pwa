import React from 'react'
import Header  from './components/Header/Header';
import TopContainer from './components/TopContainer/TopContainer';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Project';

const App=()=>{
  return(
    <div>
       <Header />
       <TopContainer/>
       <Skills />
       <Projects/>
    </div>
  )
}

export default App;
