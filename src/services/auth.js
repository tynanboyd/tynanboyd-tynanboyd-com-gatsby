export const isBrowser = () => typeof window !== "undefined";
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {};
const setUser = (user) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user));
export const handleLogin = ({ username, password }) => {
  if (username === `paula` && password === `123`) {
    return setUser({
      username: `paula`,
      name: `Paula Humby`,
      email: `paula@example.com`,
    });
  }
  return false;
};
export const isLoggedIn = () => {
  const user = getUser();
  return !!user.username;
};
export const logout = (callback) => {
  setUser({});
  callback();
};
