const download = async id => {
  const headers = {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  };

  const doc = await fetch(
    `http://64.227.25.114:8000/docs/${id}/download`,
    headers
  );

  return await doc;
};

export default download;
