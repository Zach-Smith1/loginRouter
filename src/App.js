import React, { useState, useEffect } from "react";
function App() {

  const handleLogin = () => {
    window.location.href = 'https:// TBD'
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={handleLogin}>Login
      </button>
    </div>
  );
}


export default App;