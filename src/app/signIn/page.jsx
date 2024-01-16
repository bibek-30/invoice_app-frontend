"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault(); 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: "Bibekshrestha828@gmail.com",
      password: "admin",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };

    fetch("http://127.0.0.1:8000/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          router.push('/dashboard');
        }
      })

      .catch((error) => console.log("error", error));
    }
  


  return (
    <div className="container">
      <div className="form">
        <div className="form__box">
          <div className="form__left">
            <div className="form__padding">
              <img
                className="form__image"
                src="https://i.pinimg.com/originals/8b/44/51/8b4451665d6b2139e29f29b51ffb1829.png"
                alt="Placeholder"
              />
            </div>
          </div>
          <div className="form__right">
            <div className="form__padding-right">
              <form onSubmit={handleLogin}>
                <h1 className="form__title">Member Login</h1>
                <input
                  className="form__email"
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <input
                  className="form__password"
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <input
                  className="form__submit-btn"
                  type="submit"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
