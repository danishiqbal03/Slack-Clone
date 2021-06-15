import { Avatar, InputBase } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
function Header(props) {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <SearchBase
        startAdornment={<SearchRoundedIcon />}
        placeholder="Search on Slack"
      />

      <HeaderRight>
        <HelpOutlineOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: var(--slack-color);
  justify-content: space-between;
  padding: 10px 0;
  color: white;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  margin-right: auto;
  margin-left: 20px;
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const SearchBase = styled(InputBase)`
  flex: 0.4;
  background-color: #421f44;
  width: 100%;
  padding: 0 50px;
  margin-left: 40px;
  margin-right: 50px;
  border: 1px solid gray;
  border-radius: 6px;
  > input {
    color: white;
    opacity: 0.8;
    margin-left: 10px;
    text-align: center;
  }
  > .MuiSvgIcon-root {
    color: white;
    opacity: 0.8;
  }
`;
