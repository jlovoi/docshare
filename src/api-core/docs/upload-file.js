import { API_URL } from "../../version";

const upload = async ({ buffer, id }) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };

  const response = await fetch(`${API_URL}/docs/${id}/upload`, request);

  return response;
};

export default upload;
