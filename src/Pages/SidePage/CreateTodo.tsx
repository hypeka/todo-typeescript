import React,{useState} from 'react'
import DatePicker from 'react-date-picker';
import {useNavigate} from 'react-router-dom'

interface Props {}

export const CreateTodo = (props: Props) => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [about, setAbout] = useState("");

  const [startDate, setStartDate] = useState(new Date());

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
            <DatePicker
              selected={startDate}
              // onChange={(date: Date) => setStartDate(date)}
            />
          </div>
          <div className="create-btn">
            {/* <button onClick={(e) => createTodoHandler(e)}>Create TODO</button> */}
          </div>
        </div>
      </div>
    </>
  )
}