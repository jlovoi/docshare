const fetchUserByUsername = async username => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(
    `${process.env.REACT_APP_API}/users/username/${username}`,
    headers
  );

  return await user.json();
};

export default fetchUserByUsername;
