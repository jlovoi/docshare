const fetchDocInfo = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const docInfo = await fetch(`http://localhost:8000/docs/${id}/info`, headers);

  const json = await docInfo.json();

  return JSON.parse(json);
};

export default fetchDocInfo;
