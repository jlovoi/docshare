const upload = async ({ buffer, id }) => {
  const buf = Buffer.from(buffer);
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream"
    },
    body: buf
  };

  console.log(buf);

  const response = await fetch(
    `http://localhost:3000/docs/${id}/upload`,
    request
  );

  const doc = await response.json();
  console.log(doc);
  return doc;
};

export default upload;
