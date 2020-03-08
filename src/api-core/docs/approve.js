const approve = async ({ userId, docId }) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    `http://64.227.25.114:8000/docs/${docId}/approve/${userId}`,
    request
  );

  const approvedDoc = await response.json();
  return approvedDoc;
};

export default approve;
