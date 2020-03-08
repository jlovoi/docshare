const fetchAllUsers = async () => {
  const headers = {
    "Content-Type": "application/json"
  };

  const users = await fetch("http://64.227.25.114:8000/users/", headers);

  return await users.json();
};

export default fetchAllUsers;
