import React,{useContext, useState} from 'react'
import DatePicker from 'react-date-picker';
import {useNavigate} from 'react-router-dom'
import Swal from "sweetalert2";
import { TodoContext } from '../../Context/TodoContext';


export const CreateTodo = () => {
  const navigate = useNavigate();

  const {todo ,setTodo} = useContext(TodoContext)

  const [topic, setTopic] = useState<string>("");
  const [about, setAbout] = useState<string>("");

  const [value, onChange] = useState(new Date());

  const createTodoHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(topic === "" || about === ""){
      Swal.fire({
        title: "Sorry ! ",
        text: "Empty field detected !",
        icon: "error",
        confirmButtonText: "OK",
        timerProgressBar: true,
        timer: 5000,
      });
    }else{

    }
  }



  return (
    <>
      <div className="body-content">
        <div className="title">
          <h4>Create Todo</h4>
        </div>
        <div className="create-main">
          <div className="create-input">
            <label htmlFor="">Topic : </label>
            <br />
            <input
              type="text"
              placeholder="topic here ..."
              value={topic}
              // onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="create-input">
            <label htmlFor="">About : </label>
            <br />
            <textarea
              name=""
              id=""
              cols={60}
              rows={2} 
              placeholder="write description about ..."
              value={about}
              // onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="create-input">
            <label htmlFor="">Must Complete On : </label>
            <br />
            <DatePicker onChange={onChange} value={value} />
          </div>
          <div className="create-btn">
            <button onClick={createTodoHandler}>Create TODO</button>
          </div>
        </div>
      </div>
    </>
  )
}