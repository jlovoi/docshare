const allByUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(
    `${process.env.REACT_APP_API}/docs/user/${id}`,
    headers
  );

  return await doc.json();
};

export default allByUser;
