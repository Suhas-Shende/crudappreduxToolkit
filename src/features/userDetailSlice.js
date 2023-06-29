import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://649bc7bc048075719236eb2a.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//readUser
export const showUser = createAsyncThunk(
    //action type string
    'showUser',
    // callback function
    async () => {
      const res = await fetch('https://649bc7bc048075719236eb2a.mockapi.io/crud').then(
      (data) => data.json()
    )
    return res;
    

})

//DeleteUser
export const deleteUser = createAsyncThunk(
    //action type string
    'deleteUser',
    // callback function
    async (id) => {
      const res = await fetch(`https://649bc7bc048075719236eb2a.mockapi.io/crud/${id}`,{method:"DELETE"}).then(
      (data) => data.json()
    )
    return res;
    

})



//Updateuserdatail
export const updateUser = createAsyncThunk(
    "updateUser",
    async (data, { rejectWithValue }) => {
      const response = await fetch(
        `https://649bc7bc048075719236eb2a.mockapi.io/crud/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
  
          body: JSON.stringify(data),
        }
      );
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );







export const userDetail = createSlice({
  name: "gty",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },

    //readvalue
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users =  action.payload;
     
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    //Delete user
    [deleteUser.pending]: (state) => {
        state.loading = true;
      },
      [deleteUser.fulfilled]: (state, action) => {
        state.loading = false;
        const {id}=action.payload;

        if(id){

            state.users=state.users.filter((ele)=>ele.id!==id)
        }
       
      },
      [deleteUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },

   //updateUser
   [updateUser.pending]: (state) => {
    state.loading = true;
  },
  [updateUser.fulfilled]: (state, action) => {
    state.loading = false;
    state.users=state.users.map((ele)=>
    ele.id===action.payload.id?action.payload:ele
    
    )
  },
  [updateUser.rejected]: (state, action) => {
    state.loading = false;
    state.users = action.payload;
  },





  },
});
export default userDetail.reducer;
