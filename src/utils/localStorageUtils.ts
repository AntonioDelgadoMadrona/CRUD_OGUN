// TYPES
import { ILoginUser } from "../interfaces/ILoginUser";

// SAVE THE USER ON LOCAL STORAGE WITH THE TOKEN
export function saveUserLocalStorage(user: ILoginUser, token: string) {
  const userToken = { token: token, email: user.email };
  localStorage.setItem("user", JSON.stringify(userToken));
  return user.email;
}

// GET THE USER FROM LOCAL STORAGE
export function getUserLocalStorage() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  else return null;
}

// REMOVE THE USER FROM LOCAL STORAGE
export function removeUserLocalStorage() {
  const user = localStorage.getItem("user");
  if (user) localStorage.removeItem("user");
  return "";
};
