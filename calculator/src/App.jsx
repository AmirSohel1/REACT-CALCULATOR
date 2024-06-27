import { useState } from "react";
import "./App.css";
import Buttons from "./component/Buttons";
import Display from "./component/Display";
import Head from "./component/Head";

function App() {
  const [data, setData] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setData("");
    } else if (buttonText === "=") {
      try {
        const res = eval(data);
        setData(res.toString());
      } catch (e) {
        setData("Error");
      }
    } else {
      const newDisValue = data + buttonText;
      setData(newDisValue);
    }
  };

  return (
    <>
      <div className="container">
        <Head />
        <Display value={data} />
        <Buttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
