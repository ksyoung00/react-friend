import { useState, useEffect } from "react";

const UseEffect5 = () => {
  const [count, setCount] = useState(0);
  const [txt, setTxt] = useState(0);

  const changeInput = (e) => {
    const { value } = e.target;
    // input의 반환값은 문자열
    // setTxt(Number(value));
    // setTxt(parseInt(value));
    setTxt(+value);
  };

  const increment = () => {
    setCount((num) => num + txt);
  };

  useEffect(() => {
    const timer = setInterval(increment, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [txt]);

  return (
    <div>
      <h2>입력한 값만큼 2초마다 값 증가</h2>
      <p>
        숫자 간격 : <input type="text" value={txt} onChange={changeInput} />
      </p>
      <h3>{count}</h3>
    </div>
  );
};

export default UseEffect5;
