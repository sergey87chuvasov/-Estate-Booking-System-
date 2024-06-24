import prisma from '../lib/prisma.js';

export const getPosts = async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Fail to get posts' });
  }
};
