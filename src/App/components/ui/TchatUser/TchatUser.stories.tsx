/* eslint-disable */
import TchatUser from './TchatUser';

export default {
  title: "TchatUser",
};

export const Default = () => <TchatUser user={{id:0,fullName:"", img:null,nick:'',timeLastAction:new Date().toString()}} />;

Default.story = {
  name: 'default',
};
