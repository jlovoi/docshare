const allByUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const doc = await fetch(`http://localhost:3000/docs/user/${id}`, headers);

  return await doc.json();
};

export default allByUser;
