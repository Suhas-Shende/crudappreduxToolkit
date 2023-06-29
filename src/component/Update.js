import React,{useState,useEffect}from 'react'
import {useParams} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { updateUser } from '../features/userDetailSlice';
import {useNavigate} from "react-router-dom"
const Update = () => {
    const {id}=useParams()
    const allUsers=useSelector((state)=>state.app.users);
   const [updateData,setupdateData]=useState();
   const dispatch=useDispatch();
   const naviagate=useNavigate()
    
    
     useEffect(()=>{
        if(id){
        const singleUser=allUsers.filter((item)=>item.id===id);
        setupdateData(singleUser[0]);
    
    }

    },[])// eslint-disable-line

    const newData=(e)=>{
        
        setupdateData({...updateData,[e.target.name]:e.target.value})
        console.log(updateData)
    }
    const handleSubmit =(e)=>{
     e.preventDefault();
      dispatch(updateUser(updateData));
      naviagate("/read");


    }
 

  return (
    <div>
    <h2 className="my-2">Fill the data</h2>
    <form className="w-50 mx-auto my-5" onSubmit={handleSubmit} >
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          value={updateData && updateData.name}
           onChange={newData}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          value={updateData && updateData.email}
           onChange={newData}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Age</label>
        <input
          type="text"
          name="age"
          class="form-control"
          value={updateData && updateData.age}
           onChange={newData}
          required
        />
      </div>
      <div className="mb-3">
        <input
          className="form-check-input"
          name="gender"
          value="Male"
          type="radio"
          checked={updateData && updateData.gender==="Male"}
         onChange={newData}
          required
        />
        <label className="form-check-label">Male</label>
      </div>
      <div className="mb-3">
        <input
          class="form-check-input"
          name="gender"
          value="Female"
          type="radio"

          checked={updateData && updateData.gender==="Female"}
           onChange={newData}
        />
        <label className="form-check-label">Female</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default Update
