/* eslint-disable */
import { DUMMY_USER } from '../../../interfaces/IUsers';
import AvatarUser from './AvatarUser';

export default {
  title: "AvatarUser",
};

export const Default = () => <AvatarUser user={DUMMY_USER} />;

Default.story = {
  name: 'default',
};
