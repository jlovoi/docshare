import { API_URL } from "../../version";

const fetchUserByUsername = async username => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(`${API_URL}/users/username/${username}`, headers);

  return await user.json();
};

export default fetchUserByUsername;
