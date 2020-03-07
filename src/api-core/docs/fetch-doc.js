const fetchDoc = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(`http://localhost:8000/docs/${id}`, headers);

  const json = await doc.json();

  return json;
};

export default fetchDoc;
