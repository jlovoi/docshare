const fetchUser = async id => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(`${process.env.REACT_APP_API}/users/${id}`, headers);

  return await user.json();
};

export default fetchUser;
