import { useState, useEffect } from 'react';
import axios from 'axios';

const UserName = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get('/playlist/7620623')
      .then(response => {
        setUserName(response.data.creator.name);
      })
      .catch(error => console.log('error: ', error));
  }, []);

  return userName;
}

export default UserName;