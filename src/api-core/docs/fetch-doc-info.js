const fetchDocInfo = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const docInfo = await fetch(
    `http://64.227.25.114:8000/docs/${id}/info`,
    headers
  );

  const json = await docInfo.json();

  return JSON.parse(json);
};

export default fetchDocInfo;
