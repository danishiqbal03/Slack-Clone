import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "react-spinkit";
function App() {
  const [user, loading] = useAuthState(auth);
  const [load, setLoad] = useState(false);
  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContent>
          <img
            src="https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u/v/3033396?expiry=1624310322&fit=bounds&height=800&sig=NzZhZDAwMmRjZjIzMWE3ZjRmODg3NzZmYTc3ZTM1YThlYzIxMjMyMA%3D%3D&width=1100"
            alt="slack"
            onLoad={() => setLoad(true)}
          />
          {load && (
            <Spinner
              name="ball-spin-fade-loader"
              color="purple"
              fadeIn="none"
            />
          )}
        </AppLoadingContent>
      </AppLoading>
    );
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  height: 100vh;
  display: flex;
`;

const AppLoading = styled.div``;
const AppLoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 300px;
  }
`;
