import { API_URL } from "../../version";

const fetchAllUsers = async () => {
  const headers = {
    "Content-Type": "application/json"
  };

  const users = await fetch(`${API_URL}/users/`, headers);

  return await users.json();
};

export default fetchAllUsers;
