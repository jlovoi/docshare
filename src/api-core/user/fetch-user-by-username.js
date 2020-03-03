const fetchUserByUsername = async username => {
  const headers = {
    "Content-Type": "application/json"
  };

  const user = await fetch(
    `http://localhost:3000/users/username/${username}`,
    headers
  );

  return await user.json();
};

export default fetchUserByUsername;
