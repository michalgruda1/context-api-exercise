import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserName = () => {
  const context = useContext(UserContext);
  console.log('UserName context: ', context);
  return context.data[0].creator.name;
}

export default UserName;