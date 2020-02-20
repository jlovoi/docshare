const fetchDoc = async ({ payload }) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(
    "http://localhost:3000/docs/5e4dd9c1630723e14ae80d61",
    headers
  );

  return await doc.json();
};

export default fetchDoc;
