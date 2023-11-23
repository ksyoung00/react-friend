import React from "react";
import FriendsItem from "./FriendsItem";
import "../assets/style/friendsList.css";

const FriendsList = ({ data, onDel }) => {
  return (
    <ul className="listUl">
      {data.map((item) => (
        <FriendsItem key={item.id} item={item} onDel={onDel} />
      ))}
    </ul>
  );
};

export default FriendsList;
