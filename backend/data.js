import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Sam',
      email: 'sam@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Boss',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Inuyasha',
      slug: 'Inuyasha Figure',
      category: 'Anime',
      image: '/images/f1.jpg',
      price: 150,
      countInStock: 10,
      title: 'Inuyasha',
      //rating: 5,
      //numReview: 10,
      description: 'Inuyasha figure',
    },
    {
      //_id: '2',
      name: 'Snuyasha',
      slug: 'Snuyasha Figure',
      category: 'Anime',
      image: '/images/f1.JPG',
      price: 150,
      countInStock: 10,
      title: 'Inuyasha',
      //rating: 4.5,
      //numReview: 10,
      description: 'Inuyasha figure',
    },
    {
      //_id: '3',
      name: 'Ynuyasha',
      slug: 'Ynuyasha Figure',
      category: 'Anime',
      image: '/images/f1.JPG',
      price: 150,
      countInStock: 0,
      title: 'Inuyasha',
      //rating: 3,
      //numReview: 10,
      description: 'Inuyasha figure',
    },
  ],
};

export default data;
