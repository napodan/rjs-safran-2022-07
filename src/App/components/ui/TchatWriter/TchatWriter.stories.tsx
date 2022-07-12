/* eslint-disable */
import { DUMMY_USER } from '../../../interfaces/IUsers';
import TchatWriter from './TchatWriter';

export default {
  title: "TchatWriter",
};

export const Default = () => <TchatWriter users={[DUMMY_USER]}  onMesageSent={(e:any)=>{}}/>;

Default.story = {
  name: 'default',
};
