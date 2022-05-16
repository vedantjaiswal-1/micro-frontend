export interface IUser {
    id: number;
    name: string;
    email: string;
  }
  
  const users: IUser[] = [
    {
      id: 1,
      name: 'Tony Stark',
      email: 'tony@gmail.com',
    },
    {
      id: 2,
      name: 'Shane Watson',
      email: 'shane@gmail.com',
    },
    {
      id: 3,
      name: 'Steve Rodgers',
      email: 'steve@gmail.com',
    },
  ];
  
  export default users;