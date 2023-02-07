import './App.css';
import { useState } from 'react';
function App() {
  const [name,setName] = useState('')
  const [num,setNum] = useState('')
  const [contacts,setContacts] = useState([])


const createContact=()=>{
setContacts([...contacts,{name:name,number:num}])
setName('')
setNum('')
}

const clearContact=() =>{
setContacts([])
}

  return (
    <div className="app">
      
      <div className="mainHeading">
        <h1>Contact List</h1>
      </div>
      <div className="subHeading">
      <div style={{display:'flex',margin:'20px'}}>
        <h3>No of contacts : {contacts.length}</h3>
        <button style={{marginLeft:'300px'}} onClick={clearContact}>Clear Contacts</button>
      </div>
      </div>
      <div className='addBlock'>
        <label>Name :</label>
      <div className="input">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="" />
      </div><br />
        <label>Ph No :</label>
      <div className="input">
        <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} placeholder="" />
      </div><br />
      <button onClick={createContact}>Add Contact</button>
      </div>
      
      <div className="todos">
        { contacts.map((obj)=>{
          return(
        <div className="todo">
          <div className="left">
        
            <p>{obj.name}  : {obj.number}</p>
          </div>
          <div className="right">
            <i onClick={(e)=>{
                contacts.splice(contacts.indexOf(obj), 1);
                setContacts([...contacts]);
            }
           } 
            className="fas fa-times"></i>
          </div>
        </div>
    
            );
          })
        }
      </div>
    </div>
  );
}

export default App;

