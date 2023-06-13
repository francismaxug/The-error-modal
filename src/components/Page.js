import React, {useState} from 'react'
import './Page.css'
import PopUp from './PopUp'
const Page = ({inTernal}) => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [errorr, setErrorr] = useState()
console.log(errorr);

const shoot = (e)=>{
setName(()=>e.target.value)
}
const shot = (e)=>{
  setAge(()=>e.target.value)
  }
  
  const sendAll = (e)=> {
    e.preventDefault()
    if(name==="" || age===""){
      setErrorr({
        title: "Invalid Input",
        message: "Name and Age should be filled"
      })
      return
    }
    if(age<1){
      setErrorr({
        title: "Invalid Age",
        message: "Age should be > 1"
      })
      return
    }
    const send = {
      username: name,
      age: +age
    } 
    setName("")
    setAge("")
    inTernal(send)
    console.log(send);
}
const shut = ()=>{
  setErrorr(null)
}
  return (
    
    <div className='nice'>
      <div>
        { errorr && <PopUp onTitle={errorr.title} onMessage={errorr.message} trigger={shut}/>}
      <label>Username</label> <br/>
      <input type="text" value={name} onChange={shoot} />
      </div>
      <div>
      <label>Age (years)</label> <br/>
      <input type="number" min= "0" step="1" placeholder='enter here' value={age} onChange={shot}/>
      </div>
      <div>
        <button onClick={sendAll}>Add User</button>
      </div>
      </div>
  )
}

export default Page
