import React from "react";
import context from "./context";
import Navbar from "./Navbar";


function App() {
  // let [count, setCount] = useState(0);
  // let [inc, setInc] = useState(0);

  // const expensiveCounte = (num) => {
  //   for (let i = 0; i <= 100000000; i++) {
  //     num = num + 1;
  //   }
  //   return num;
  // };

  // const counter = (()=>{expensiveCounte(inc)},[inc])
  // const counter = expensiveCounte(inc);

let name="Rajendra kumar"
let age=22


  return (
    // <div>
    //   <button
    //     onClick={() => {
    //       setCount(count + 1);
    //     }}
    //   >
    //     Click to increase1 : {count}
    //   </button>
    //   <button
    //     onClick={() => {
    //       setInc(inc + 1);
    //     }}
    //   >
    //     Click to increase1 : {inc}
    //   </button>
    //   <h1>Expensive : {counter}</h1>
    // </div>


    <>
    <context.Provider value={{name,age}}>
      <Navbar/>
    </context.Provider>


    </>
  );
}

export default App;
