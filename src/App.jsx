import "./App.css";
import Counter2 from "./components/Counter2";
import { useState, useCallback, useMemo } from "react";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleInc = () => {
    setCount1((prevState) => prevState + 1);
  };

  const handleDesc = () => {
    setCount1((prevState) => prevState - 1);
  };

  // for counter 2
  const handleInc2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const handleDesc2 = useCallback(() => {
    setCount2(count2 - 1);
  }, [count2]);

  console.log("I am from app");

  const problenFunc = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return i;
  }, [count1]);

  // const problenFunc = () => {
  //   let i = 0;
  //   while (i < 1000000000) i++;

  //   return i;
  // };

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow">
              <div className="card-body">
                {problenFunc}
                <h4>Countet 1</h4>
                <h1>{count1}</h1>
                <hr />
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={handleDesc}
                >
                  --
                </button>
                <button className="btn btn-sm btn-info" onClick={handleInc}>
                  ++
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Counter2
        count2={count2}
        handleDesc2={handleDesc2}
        handleInc2={handleInc2}
      />
    </>
  );
}

export default App;
