import jwt from 'jsonwebtoken';

export const shouldBeLoggedIn = async (req, res) => {
  console.log(req.userId);
  res.status(200).json({ message: 'You are Auth' });
};

export const shouldBeAdmin = async (req, res) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).json({ message: 'Not Auth' });

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
    if (err) return res.status(403).json({ message: 'Token is not Valid' });

    if (!payload.isAdmin) {
      return res.status(403).json({ message: 'Not Auth' });
    }
  });
  res.status(200).json({ message: 'You are Auth' });
};
