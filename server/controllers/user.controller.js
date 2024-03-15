import bcrypt from "bcrypt";
import Joi from "joi";
import User from "../models/user.model";
import AppError from "../utils/error.util";
import jwtUtil from "../utils/jwtUtil";

const userController = {
  async register(req, res, next) {
    const { fullName, email, mobileNumber, password, confirmPassword } =
      req.body;
    const registerSchema = Joi.object({
      fullName: Joi.string().trim().min(5).max(50).required(),
      email: Joi.string().email().lowercase().trim().required(),
      mobileNumber: Joi.string().min(10).max(14).required(),
      password: Joi.string()
        .pattern(
          new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        )
        .required(),
      confirmPassword: Joi.ref("password"),
    });
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    try {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return next(new AppError("Email already exists", 400));
      }
      const numberExists = await User.findOne({ mobileNumber });
      if (numberExists) {
        return next(new AppError("Number already exists", 400));
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        fullName,
        email,
        mobileNumber,
        password: hashedPassword,
      });
      user.password = undefined;
      res.status(200).json({
        success: true,
        message: "User registered succesfully",
        user,
      });
    } catch (error) {
      return next(error);
    }
  },
  async login(req, res, next) {
    const { email, password } = req.body;
    const userSchema = Joi.object({
      email: Joi.string().email().trim().required(),
      password: Joi.string()
        .pattern(
          new RegExp(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )
        )
        .required(),
    });
    const { error } = userSchema.validate(req.body);
    if (error) {
      return next(error);
    }
    try {
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return next(new AppError("User with given email does not exist", 400));
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return next(
          new AppError(
            "Password does not match with email. Please try again",
            400
          )
        );
      }
      const { accessToken, refreshToken } = jwtUtil.generateTokens({
        _id: user._id,
        activated: false,
      });
      await jwtUtil.storeRefreshToken(user.id, refreshToken);
      res.status(200).json({
        success: true,
        message: "Logged in successfully",
        user
      });
    } catch (error) {
      return next(error);
    }
  },
};
export default userController;
