export interface IUser {
    id: number;
    name: string;
    email: string;
    image: string
  }
  
  const users: IUser[] = [
    {
      id: 1,
      name: 'Tony Stark',
      email: 'tony@gmail.com',
      image: 'http://localhost:4000/user-1.jpg'
    },
    {
      id: 2,
      name: 'Shane Watson',
      email: 'shane@gmail.com',
      image: 'http://localhost:4000/user-2.jpg'
    },
    {
      id: 3,
      name: 'Steve Rodgers',
      email: 'steve@gmail.com',
      image: 'http://localhost:4000/user-3.jpg'
    },
    {
      id: 4,
      name: 'ABD Villiers',
      email: 'abd@gmail.com',
      image: 'http://localhost:4000/user-4.jpg'
    },
    {
      id: 5,
      name: 'Tom Cruise',
      email: 'tom@gmail.com',
      image: 'http://localhost:4000/user-5.jpg'
    },
    {
      id: 6,
      name: 'Pooja Hegde',
      email: 'pooja@gmail.com',
      image: 'http://localhost:4000/user-6.jpg'
    },
    {
      id: 7,
      name: 'Vijay Thalapathy',
      email: 'vijay@gmail.com',
      image: 'http://localhost:4000/user-7.jpg'
    },
    {
      id: 8,
      name: 'Gal Gadot',
      email: 'gal@gmail.com',
      image: 'http://localhost:4000/user-8.jpg'
    },
  ];
  
  export default users;