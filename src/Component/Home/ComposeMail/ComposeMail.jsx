import React, { useRef, useState } from "react";
import "./ComposeMail.css";
import { ToastContainer, toast } from 'react-toastify';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState,convertToRaw } from "draft-js";

import { mailAction } from "../../../Store/mail-slice";
import { useDispatch } from "react-redux";

const ComposeMail = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
const [vis,setVisible]=useState(false);
const reciver=useRef();
const subject=useRef();
const dispatch=useDispatch();
  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    if(editorState)
    {
        setVisible(true);
    }
  };
  const mailHandler=()=>{
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const plainText = rawContentState.blocks
      .map((block) => block.text.trim())
      .filter(Boolean)
      .join('\n');
      let sender=localStorage.getItem("email");
      let mail={
        sender,
        reciver:reciver.current.value,
        subject:subject.current.value,
        mail:plainText,
        read:false,
        unread:true,
        starred:false,
        time:props.time,
        send:true,
        receive:false
      }
     
      toast.success("Mail sent successfully");
       dispatch(mailAction.addMail(mail));
      setEditorState("");
  }

  return (
    <div className="composer-backdrop">
      <div className="main-composer">
        <div className="d-flex align-items-center justify-content-between w-100 ps-3 pe-3 pt-2 curs-pointer rad text-dark">
          <h6>New Message</h6>
          <div className="close-composer">
            <span>-</span>
            <span>Resize</span>
            <span
              onClick={() => {
                props.onClick(false);
              }}
            >
              X
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between w-100  ps-3 pe-3 pt-2 pb-2  font-weight border-bottom">
          <span>To</span>
          <input type="email" name="email" id="email" className="w90" ref={reciver}/>
          <span>
            <a href="#cc">CC</a> <a href="#BCC">BCC</a>
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100  ps-3 pe-3 pt-2 pb-2  font-weight border-bottom">
          <input
            type="text"
            name="subject"
            id="subject"
            className="w90"
            placeholder="Subject"
            ref={subject}
          />
        </div>
        <div className="editor-container">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
    {vis && <button className="send" onClick={mailHandler}>Send</button>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ComposeMail;
