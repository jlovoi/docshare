import { API_URL } from "../../version";

const fetchUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(`${API_URL}/users/${id}`, headers);

  return await user.json();
};

export default fetchUser;
