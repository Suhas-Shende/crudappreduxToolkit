import React,{useEffect,useState } from 'react';
import {useDispatch,useSelector} from "react-redux";
 import { deleteUser, showUser } from "../features/userDetailSlice";

 import {Link} from "react-router-dom";

 import CustomModal from './CustomModal';

const Read = () => {
   const dispatch=useDispatch();
   const {users,loading}=useSelector((state)=>state.app);
   const [id,setId]=useState();
   const [modal,setModal]=useState(false)
   

   useEffect(()=>{

          dispatch(showUser()) 
          
          
   },[]) // eslint-disable-line

  const getUser=()=>{
    dispatch(showUser());
    
  }

  if(loading){
    return (<h1>loading</h1>)
  }

   

  return (
    <div>
    {modal && <CustomModal id={id} modal={modal} setModal={setModal}/>}
    <h2>All the user</h2>
    {users && users.map((item)=>     

      (  <div className="card  w-50 mx-auto"  >
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
      <p className="card-text">{item.age}</p>
      {/* <a href="#" className="card-link">Card link</a> */}
      {/* <a href="#" className="card-link">Another link</a> */}
      <button className="card-link" onClick={()=>[setId(item.id),setModal(true)]}>view</button>
      <Link  onClick={()=>dispatch(deleteUser(item.id))} className="card-link">Delete</Link>
      <Link to={`/edit/${item.id}`} className="card-link">edit</Link>
    <button onClick={getUser}>Showuser</button>
    </div>
    
  </div>))}
  
  </div>
  )
}

export default Read