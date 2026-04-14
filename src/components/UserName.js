import { useContext } from 'react';

import { PlaylistsContext } from '../context/PlaylistsContext';

const UserName = () => {
  const context = useContext(PlaylistsContext);
  console.log('UserName context: ', context);
  return context?.userName ?? 'Loading...';
};

export default UserName;
