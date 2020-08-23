import { API_URL } from "../../version";

const patch = async ({ buffer, id }) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };

  const response = await fetch(`${API_URL}/docs/${id}/patch-file`, request);

  return response;
};

export default patch;
