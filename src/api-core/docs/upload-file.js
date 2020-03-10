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
    `http://64.227.25.114:8000/docs/${id}/upload`,
    request
  );

  return response;
};

export default upload;
