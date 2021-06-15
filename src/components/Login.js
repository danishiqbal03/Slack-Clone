import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
function Login(props) {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u/v/3033396?expiry=1624310322&fit=bounds&height=800&sig=NzZhZDAwMmRjZjIzMWE3ZjRmODg3NzZmYTc3ZTM1YThlYzIxMjMyMA%3D%3D&width=1100"
          alt="slack"
          width={"200px"}
        />
        <h2>Sign in to Live Clash</h2>
        <p>liveclash.slack.com</p>
        <button onClick={signIn}>Sign in with Google</button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;
const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 60px;
  border-radius: 10px;
  height: 50%;

  background-color: white;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  > img {
    object-fit: contain;
  }
  > button {
    padding: 10px;
    margin-top: 50px;
    background-color: #0a8d48;
    border-radius: 3px;
    color: white;
    border: none;
    font-weight: 500;
    text-transform: inherit;
    :active {
      transform: scale(0.985);
    }
  }
`;
