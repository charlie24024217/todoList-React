import React, { useEffect, useState } from "react";

const useCounter = ({ workTime, start }) => {
  const [remainTime, setRemainTime] = useState(workTime === true ? 1500 : 180);

  useEffect(() => {
    if (start) {
      // console.log("正在執行useCounter");
      let interval = setInterval(() => {
        setRemainTime((remainTime) => remainTime - 1);
        // console.log("正在執行interval");
      }, 1000);

      return () => clearInterval(interval);
    }
    if (remainTime < 0) {
      setRemainTime(workTime === true ? 1500 : 180);
    }
  }, [start]);

  // console.log(remainTime);

  return remainTime;
};

export default useCounter;
