import { API_URL } from "../../version";

const fetchDocInfo = async id => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };

    const docInfo = await fetch(`${API_URL}/docs/${id}/info`, headers);

    const json = await docInfo.json();

    return JSON.parse(json);
  } catch (e) {
    return {};
  }
};

export default fetchDocInfo;
