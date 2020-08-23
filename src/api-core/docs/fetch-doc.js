import { API_URL } from "../../version";

const fetchDoc = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(`${API_URL}/docs/${id}`, headers);

  const json = await doc.json();

  return json;
};

export default fetchDoc;
