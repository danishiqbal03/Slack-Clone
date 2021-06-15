import React from "react";

import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function ChatInput({ channelName, channelId, chatRef }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    console.log(channelId);
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    });

    setInput("");
  };
  chatRef?.current?.scrollIntoView({
    behavior: "smooth",
  });

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            channelName ? `Message #${channelName}` : `Message #ROOM`
          }
        />
        <button hidden type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  > form {
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    padding: 20px;
    border-radius: 3px;
    border: 1px solid gray;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
