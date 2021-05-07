import React from "react";
import { getUser } from "../services/auth";

import styled from "styled-components";

const ProfileDetailStyles = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Profile = () => (
  <>
    <h5>Your profile</h5>
    <ProfileDetailStyles>
      <ul>
        <li>Name: {getUser().name}</li>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </ProfileDetailStyles>
  </>
);

export default Profile;
