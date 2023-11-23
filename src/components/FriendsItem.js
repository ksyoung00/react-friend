import React from "react";

const FriendsItem = ({ item, onDel }) => {
  const { id, name, age, image } = item;
  const path = process.env.PUBLIC_URL;

  return (
    <li>
      <img src={path + image} alt={name} />
      <p>
        <strong>이름 : {name}</strong>
        <span>나이 : {age}</span>
        <button onClick={() => onDel(id)}>삭제</button>
      </p>
    </li>
  );
};

export default FriendsItem;
