const submitDoc = async document => {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(document)
  };

  const response = await fetch(`${process.env.REACT_APP_API}/docs/`, request);

  const doc = await response.json();
  return doc;
};

export default submitDoc;
