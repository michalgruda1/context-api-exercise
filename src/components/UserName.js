import React, { useState, useMemo } from 'react';
import { useState, useMemo } from 'react';
import axios from 'axios';

const UserName = (props) => {
  const {userName, setUserName} = useState("");
  const creator = useMemo(() => getUserName(),[]);
  if (!!userName) {
    setUserName(creator);
  }
  return userName;
}

function getUserName() {
  axios.get('https://api.deezer.com/playlist/7620623')
  .then(data => data.data[0].creator)
  .catch(error => console.log('error: ',error));
}

export default UserName;