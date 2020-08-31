import { API_URL } from "../../version";

const fetchOrganization = async organizationId => {
  const headers = {
    "Content-Type": "application/json"
  };

  const organization = await fetch(
    `${API_URL}/organization/${organizationId}`,
    headers
  );

  return await organization.json();
};

export default fetchOrganization;
