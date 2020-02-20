const fetchDoc = async ({ payload }) => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(
    "http://localhost:3000/docs/5e1d1f06b1c17012a2ad13e8",
    headers
  );

  return await doc.json();
};

export default fetchDoc;
