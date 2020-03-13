const fetchDocInfo = async id => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };

    const docInfo = await fetch(
      `http://64.227.25.114:8000/docs/${id}/info`,
      headers
    );

    console.log(docInfo);

    const json = await docInfo.json();

    return JSON.parse(json);
  } catch (e) {
    return {};
  }
};

export default fetchDocInfo;
