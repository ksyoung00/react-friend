import React from "react";

const FriendsListBtn = ({ id, allDell, reset }) => {
  return (
    <div className="btnWrapper">
      <button onClick={() => allDell(id)}>모두 삭제</button>
      <button onClick={reset}>초기 복구</button>
    </div>
  );
};

export default FriendsListBtn;
