import { useState } from "react";
import FriendsList from "./FriendsList";
import catDB from "../assets/DB/catData";
import "../assets/style/friends.css";
import FriendsListBtn from "./FriendsListBtn";
import FriendsAdd from "./FriendsAdd";

const Friends = () => {
  const [data, setData] = useState(catDB);
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  // 삭제
  const onDel = (id) => {
    setData(data.filter((list) => list.id !== id));
  };

  // 모두삭제
  const allDell = () => {
    setData([]);
  };

  // 복구
  const reset = () => {
    setData(catDB);
  };

  // 추가
  const onAdd = (text, num, img) => {
    setData([
      ...data,
      {
        id: catDB.length++,
        name: text,
        age: num,
        image: img,
      },
    ]);
  };

  return (
    <section>
      <h2>고양이 친구들 : {data.length}마리</h2>
      <label htmlFor="chk">
        <input type="checkbox" id="chk" onChange={handleToggle} /> 고양이 추가
      </label>
      <FriendsList data={data} onDel={onDel} />
      <FriendsListBtn data={data} allDell={allDell} reset={reset} />
      {isToggle && <FriendsAdd data={data} onAdd={onAdd} />}
    </section>
  );
};

export default Friends;
