import React from "react";
import styled from "styled-components";

function message({ message, timestamp, user, userImage }) {
  return (
    <MessageContainer>
      <img src={userImage} alt={user} />
      <MessageInfo>
        <h4>
          {user}
          {""}
          <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 8px;
    margin-right: 5px;
  }
`;
const MessageInfo = styled.div`
  > p {
    margin-top: 5px;
  }
  > h4 > span {
    font-size: 12px;
    color: gray;
    font-weight: 300;
    margin-left: 10px;
  }
`;
