import { useState } from "react";
import "../assets/style/friendsAdd.css";

const FriendsAdd = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const [img, setImg] = useState("");

  const changeInputText = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const changeInputNum = (e) => {
    const { value } = e.target;
    setNum(value);
  };
  const changeInputImg = (e) => {
    const { value } = e.target;
    setImg(value);
  };

  const onSubmit = (e) => {
    onAdd(text, num, img);
    setText("");
    setNum("");
    setImg("");
  };

  return (
    <div className="add">
      <label htmlFor="chk">
        이름
        <input type="text" value={text} onChange={changeInputText} />
      </label>
      <label htmlFor="chk">
        나이
        <input type="number" value={num} onChange={changeInputNum} />
      </label>
      <label htmlFor="chk">
        사진
        <input type="url" value={img} onChange={changeInputImg} />
      </label>
      <button type="submit" onClick={onSubmit}>
        추가
      </button>
    </div>
  );
};

export default FriendsAdd;
