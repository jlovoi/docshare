const fetchAllUsers = async () => {
  const headers = {
    "Content-Type": "application/json"
  };

  const users = await fetch(`${process.env.REACT_APP_API}/users/`, headers);

  return await users.json();
};

export default fetchAllUsers;
