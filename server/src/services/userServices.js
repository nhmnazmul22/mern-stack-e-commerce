import ProfilesModel from "../model/profilesModel.js";
import UserModel from "../model/usersModel.js";
import { TokenEncoded } from "../utility/tokenUtility.js";

// User Login Service Function
export const LoginService = async (req) => {
  try {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 999999);
    const EmailTo = email;
    const EmailSubject = "Email Verification";
    const EmailText = `Your verification code is ${code}`;

    //   sendEmail(EmailTo, EmailSubject, EmailText);

    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );
    return {
      status: "Successful",
      message: "Verification Code Send Successful",
    };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

// User Login Verify Service Function
export const LoginVerifyService = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const data = await UserModel.find({ email: email, otp: otp });

    if (data.length === 1) {
      const userData = await UserModel.findOne({
        email: email,
        otp: otp,
      });
      const token = TokenEncoded(userData["_id"], email);

      // Adding token in the cookie
      res.cookie("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
        httpOnly: true, // Secure and can't be accessed via JavaScript
        // secure: true, // Uncomment this line in a production environment with HTTPS
        sameSite: "Strict", // Prevents CSRF attacks
      });

      return {
        status: "Successful",
        message: "Verification Complete",
        token: token,
      };
    } else {
      return { status: "Failed", message: "Invalid OTP" };
    }
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

// User Create Profile Service Function
export const CreateUserProfileService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const reqBody = req.body;
    reqBody.user_id = user_id;
    await ProfilesModel.updateOne(
      { user_id: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "Successful", message: "Profile Saved Successful" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

// User Update Profile Service Function
export const UpdateUserProfileService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const reqBody = req.body;
    reqBody.user_id = user_id;
    await ProfilesModel.updateOne(
      { user_id: user_id },
      { $set: reqBody },
      { upsert: true }
    );
    return { status: "Successful", message: "Profile Update Successful" };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};

// User Profile Read Service
export const ReadUserProfileService = async (req) => {
  try {
    const user_id = req.headers.user_id;
    const data = await ProfilesModel.findOne({ user_id: user_id });
    return { status: "Successful", data: data };
  } catch (err) {
    return { status: "Failed", message: err.toString() };
  }
};
