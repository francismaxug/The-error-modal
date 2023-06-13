import { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import Page from './components/Page';
function App() {
// const message = [{
//   username: "Maxx",
//   age : 30
// }]
const [isName, setIsName] = useState([])

const cool =(prev)=>{
setIsName((prevs)=>{
  return [ prev,...prevs]
})
}
  return (
    <div className="App">
   <Page inTernal={cool}/>
   <Landing cSharp = {isName}/>
    </div>
  );
}

export default App;
