const approve = async ({ userId, docId }) => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    `${process.env.REACT_APP_API}/docs/${docId}/approve/${userId}`,
    request
  );

  const approvedDoc = await response.json();
  return approvedDoc;
};

export default approve;
