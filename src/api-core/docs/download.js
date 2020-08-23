import { API_URL } from "../../version";

const download = async id => {
  const headers = {
    "Content-Type":
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  };

  const doc = await fetch(`${API_URL}/docs/${id}/download`, headers);

  return await doc;
};

export default download;
