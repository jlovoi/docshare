const submitDoc = async document => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(document)
  };

  const response = await fetch("http://64.227.25.114:8000/docs/", request);

  const doc = await response.json();
  return doc;
};

export default submitDoc;
