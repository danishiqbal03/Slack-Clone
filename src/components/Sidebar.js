import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import Controls from "./Controls/Controls";
import SidebarOptions from "./SidebarOptions";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Sidebar(props) {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarHeaderInfo>
          <h2>Slack HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarHeaderInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOptions Icon={Controls.InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={Controls.InboxIcon} title="Mentions & reactions" />
      <SidebarOptions Icon={Controls.DraftsIcon} title="Saved items" />
      <SidebarOptions
        Icon={Controls.BookmarkBorderIcon}
        title="Channel browser"
      />
      <SidebarOptions
        Icon={Controls.PeopleAltIcon}
        title="People & user groups"
      />
      <SidebarOptions Icon={Controls.AppsIcon} title="Apps" />
      <SidebarOptions Icon={Controls.FileCopyIcon} title="File browser" />
      <SidebarOptions Icon={Controls.ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOptions Icon={Controls.ExpandMoreIcon} title="Channel" />
      <hr />
      <SidebarOptions
        Icon={Controls.AddIcon}
        addChannelOption
        title="Add Channel"
      />
      {channels?.docs?.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  max-width: 260px;
  border: 1px solid #49274b;
  margin-top: 60px;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .MuiSvgIcon-root {
    color: var(--slack-color);
    background-color: white;
    margin-right: 10px;
    border-radius: 50%;
    padding: 5px;
    max-height: 40px;
  }
  border-bottom: 1px solid #49274b;
  padding: 13px;
`;
const SidebarHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    > .MuiSvgIcon-root {
      color: green;
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
    }
  }
`;
