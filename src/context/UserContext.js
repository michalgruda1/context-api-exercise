import axios from 'axios';
import {createContext, useCallback, useEffect, useState} from 'react';

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const empty = {
    data: [
      {
        creator: {
          name: ''
      }
    }]
  };
  const [userState, setUserState] = useState(empty);

  const fetchUserData = useCallback(() => {
    axios.get('user/2529/playlists')
      .then(response => {
        setUserState(response.data);
        console.log(response.data);
      })
      .catch(error => console.log('error: ', error));
  },[]);

  useEffect(() => {
    fetchUserData();
  },[fetchUserData]);

  return (
    <UserContext.Provider value={userState}>
      {children}
    </UserContext.Provider>
  )
};

export default UserContextProvider;