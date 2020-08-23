import { API_URL } from "../../version";

const allByUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(`${API_URL}/docs/user/${id}`, headers);

  return await doc.json();
};

export default allByUser;
