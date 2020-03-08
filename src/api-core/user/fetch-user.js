const fetchUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(`http://64.227.25.114:8000/users/${id}`, headers);

  return await user.json();
};

export default fetchUser;
