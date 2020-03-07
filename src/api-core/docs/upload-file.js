const upload = async ({ buffer, id }) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };

  const response = await fetch(
    `http://localhost:8000/docs/${id}/upload`,
    request
  );

  const doc = await response.json();
  return doc;
};

export default upload;
