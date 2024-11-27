import { url } from "./Url";

export const userData = async (userid) => {
  try {
    const response = await fetch(`${url}/users/${userid}`);
    if (!response.ok) throw new Error("there was a problem with response");
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};