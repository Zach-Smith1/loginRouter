import React, { useState, useEffect } from "react";
function App() {

  const handleLogin = () => {
    window.location.href = 'https://user-login-router-370bfb10a1f1.herokuapp.com/'
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