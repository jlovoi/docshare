const fetchDoc = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(`${process.env.REACT_APP_API}/docs/${id}`, headers);

  const json = await doc.json();

  return json;
};

export default fetchDoc;
