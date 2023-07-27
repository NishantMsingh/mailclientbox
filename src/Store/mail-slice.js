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
      state.sentMails.push({...action.payload,sentid:"SENT0"+state.sentMails.length});
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
