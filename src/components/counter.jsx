function Counter() {
    // Membuat variable result
    let result = 0;
  
    /**
     * Membuat fungsi handleClick.
     * Dijalankan ketika button diklik.
     */
    function handleClick() {
      result = result + 1;
    }
  
    // Menambahkan event click pada button
    return (a
      <div>
        <p>Result: {result} </p>
        <button onClick={handleClick}>Add</button>
      </div>
    );
  }
  
  export default Counter;
  