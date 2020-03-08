const fetchUserByUsername = async username => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(
    `http://64.227.25.114:8000/users/username/${username}`,
    headers
  );

  return await user.json();
};

export default fetchUserByUsername;
