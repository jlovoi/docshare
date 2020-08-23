import { API_URL } from "../../version";

const approve = async ({ userId, docId }) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    `${API_URL}/docs/${docId}/approve/${userId}`,
    request
  );

  const approvedDoc = await response.json();
  return approvedDoc;
};

export default approve;
