import React from "react";
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../services/auth";

export default function BookClubNavBar() {
  let greetingMessage = "";
  if (isLoggedIn()) {
    greetingMessage = `Hello ${getUser().name}`;
  } else {
    greetingMessage = "Not part of the secret club.";
  }
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        justifyContent: "space-between",
        fontSize: "50%",
      }}
    >
      <span>{greetingMessage}</span>
      <nav>
        {` `}
        <Link to="/bookclub/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              logout(() => navigate(`/bookclub/login`));
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  );
}
