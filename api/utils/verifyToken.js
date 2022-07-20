import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log(req.cookies);
  if (!token) {
    return next("No token found!");
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(err);
    console.log(user);
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id == req.params.id) {
      next();
    } else {
      if (err) return next(err);
    }
  });
};
