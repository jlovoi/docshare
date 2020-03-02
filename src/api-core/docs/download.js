const download = async id => {
  const headers = {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  };

  const doc = await fetch(`http://localhost:3000/docs/${id}/download`, headers);

  return await doc;
};

export default download;
