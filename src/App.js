import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useRef, useState } from "react";
import tagImg from "./tag.png";

function App() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState();
  let maxtags = 10

  const addtags = (e) => {
    if (e.key == "Enter") {
      if (inputValue.length > 1 && !tags.includes(inputValue)) {
        if (tags.length < 10) {
          inputValue.split(",").forEach((tg) => {
            console.log(tg);
            setTags([...tags, tg]);
          });
        }
      }
      e.target.value = "";
    }
  };

  const removetags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  const handleRemoveAll = () => {
    setTags([])
  }

  const handlechange = (e) => {
    setInputValue(e.target.value.replace(/\+/g, " "));
  };
  console.log(tags);

  return (
    <div className="wrapper">
      <div className="title">
        <img src={tagImg} alt="" />
        <h2>Tags</h2>
      </div>
      <div className="content">
        <p>Press enter or add a comma after each tag</p>

        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              {tag}{" "}
              <i
                className="uit uit-multiply"
                onClick={() => removetags(index)}
              ></i>
            </li>
          ))}
          <input
            type="text"
            placeholder="Press enter to add tags"
            onKeyUp={(e) => addtags(e)}
            onChange={handlechange}
          />
        </ul>
      </div>
      <div className="details">
        <p>
          <span>{ maxtags-tags.length}</span> tags are remaining
        </p>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  );
}

export default App;
