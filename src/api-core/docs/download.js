const download = async id => {
  const headers = {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  };

  const doc = await fetch(
    `${process.env.REACT_APP_API}/docs/${id}/download`,
    headers
  );

  return await doc;
};

export default download;
