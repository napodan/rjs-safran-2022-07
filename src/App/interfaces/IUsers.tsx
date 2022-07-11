export default interface IUser {
  id: number;
  nick: string;
  fullName: string;
  img: string | null;
  timeLastAction: string;
}
export const DUMMY_USER: IUser = {
  id: 0,
  fullName: "Alexandre des",
  nick: "champix",
  img: "/brokenLink.jpg",
  timeLastAction: new Date().toString(),
};
