const fetchUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(`http://localhost:3000/users/${id}`, headers);

  return await user.json();
};

export default fetchUser;
