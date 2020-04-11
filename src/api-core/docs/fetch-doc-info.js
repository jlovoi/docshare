const fetchDocInfo = async id => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };

    const docInfo = await fetch(
      `${process.env.REACT_APP_API}/docs/${id}/info`,
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
