import { createSlice } from "@reduxjs/toolkit";
const mailSlice = createSlice({
  name: "mail",
  initialState: {
    allMails: [],
    unreadMails:[],
    sentMails:[],
    deletedMails:[],
  },
  reducers: {
    addMail(state, action) {
      if(action.payload.sender===localStorage.getItem("email"))
      {
        state.sentMails.push({...action.payload});
      }
      else
      {
         if(!action.payload.read)
         {
          state.unreadMails.push({...action.payload})
         }
        state.allMails.push({...action.payload});
      }
    },
    removeMail(state, action){
      state.deletedMails.push({...action.payload,deleteid:"DEL0"+state.sentMails.length});
      state.sentMails=state.sentMails.filter(value=>{
        return value.sentid!==action.payload.sentid;
      })
    }
  }
});


export const mailAction = mailSlice.actions;
export default mailSlice;
