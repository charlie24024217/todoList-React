import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import "./style.css";
import { ThemeProvider } from "@emotion/react";

const theme = {
  pink: {
    color: "#ff4384",
    backgroundColor: "#ffedf7",
  },
  blue: {
    color: "#00a7ff",
    backgroundColor: "#e5f3ff",
  },
};

function App() {
  const CounterStatus = {
    workTime: true,
    start: false,
  };
  const [workTime, setWorkTime] = useState(CounterStatus.workTime);
  const [start, setStart] = useState(CounterStatus.start);
  const [currentTheme, setCurrentTheme] = useState("pink");

  useEffect(() => {
    setCurrentTheme(workTime ? "pink" : "blue");
  }, [workTime]);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <TodoList
        workTime={workTime}
        setWorkTime={setWorkTime}
        start={start}
        setStart={setStart}
      />
    </ThemeProvider>
  );
}

export default App;
