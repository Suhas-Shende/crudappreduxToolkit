import React from 'react'
import "./CustomModal.css";
import {useSelector} from "react-redux"
const CustomModal = (props) => {

    const allUsers=useSelector((state)=>state.app.users);
    const singleUser=allUsers.filter((item)=>item.id===props.id);
    const closeEvent=()=>{
        props.setModal(!props.modal)
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
        <h1>id{props.id}</h1>
        <h1> {singleUser[0].name}</h1>
        <h1> {singleUser[0].email}</h1>
        <h1> {singleUser[0].age}</h1>
        <h1> {singleUser[0].gender}</h1>
        
        <button onClick={closeEvent}>close</button>

        </div>
    </div>
  )
}

export default CustomModal