import Auth from "./Component/Auth/Auth";
import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import { useEffect,useRef} from "react";
import { useDispatch } from "react-redux";
import { mailAction } from "./Store/mail-slice";
function App() {
  const isInitialRef = useRef(true);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(isInitialRef.current)
    {
      isInitialRef.current=false;
    fetch("https://mailclientbox-c312c-default-rtdb.firebaseio.com//mail.json")
    .then((response)=>{if(!response){ throw new Error("Network issue"); }return response.json();})
    .then((mailData)=>{
      if(mailData)
      {
        Object.keys(mailData).forEach((mailId) => {
          let temp={
            mailId,
            ...mailData[mailId]
          }
          if(temp.sender===localStorage.getItem("email")||temp.reciver===localStorage.getItem("email"))
          {
            dispatch(mailAction.addMail(temp));
          }
        });
      }})
    .catch((error)=>{
      console.log(error);
    })
     return;
    }
   },[dispatch]);
  return (
    <Routes>
      <Route path="/" element={ <Auth/>} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  );
}
export default App;
