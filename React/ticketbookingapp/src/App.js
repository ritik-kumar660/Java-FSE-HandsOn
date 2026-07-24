import React, { useState } from "react";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      <h3>Flight Details</h3>

      <ul>
        <li>Flight : AI-202</li>
        <li>From : Delhi</li>
        <li>To : Mumbai</li>
        <li>Time : 10:00 AM</li>
      </ul>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h1>Welcome back</h1>

      <h3>You can now book your tickets.</h3>
    </div>
  );
}

function Greeting(props) {

  if (props.isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ margin: "40px" }}>

      <Greeting isLoggedIn={isLoggedIn} />

      <br />

      {
        isLoggedIn
          ? <LogoutButton onClick={handleLogout} />
          : <LoginButton onClick={handleLogin} />
      }

    </div>
  );
}

export default App;