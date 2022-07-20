import user from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signIn = async (req, res, next) => {
  try {
    const currUser = await user.findOne({ userName: req.body.userName });

    if (!currUser) {
      return next("No User Found");
    }

    const isMatch = await bcrypt.compare(req.body.password, currUser.password);

    if (!isMatch) {
      return next("Password Incorrect!");
    }

    const token = jwt.sign(
      {
        id: currUser._id,
        userName: currUser.userName,
      },
      process.env.JWT_SECRET
    );

    const { password, isAdmin, ...otherDetails } = currUser._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherDetails);
  } catch (e) {
    next(e);
  }
};

const signOut = (req, res) => {
  res.cookie("access_token", "", { maxAge: 0 }).json("Signed Out");
};

const signUp = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new user({
      userName: req.body.userName,
      email: req.body.email,
      dob: req.body.dob,
      phone: req.body.phone,
      password: hash,
      bio: req.body.bio,
    });
    await newUser.save();
    const { password, ...otherDetails } = newUser._doc;
    res.status(200).json(otherDetails);
  } catch (e) {
    next(e);
  }
};

export { signIn, signUp, signOut };
