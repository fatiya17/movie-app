import { useState, useEffect } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  useEffect(()=>{
    function manipulateDOM() {
    console.log("Lifecycle : component dimount");
    document.title = `Result ${angka}`;
    }
    manipulateDOM(); // angka yang ada didalam variable usestate, dimanipulasi ke DOM atau dikirim ke DOM, maka UI secara real time juga beruba
  }, [angka]);

    console.log("Lifecycle : component dirender");
  //let angka = 0
  function addAngka() {
    setAngka(angka + 1);
  }

  return (
    <div>
      <p>Result: {angka} </p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;