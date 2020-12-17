import { API_URL } from "../../version";

const fetchUsersByOrganization = async organizationId => {
  const headers = {
    "Content-Type": "application/json"
  };

  const users = await fetch(
    `${API_URL}/users/organization/${organizationId}`,
    headers
  );

  return await users.json();
};

export default fetchUsersByOrganization;
