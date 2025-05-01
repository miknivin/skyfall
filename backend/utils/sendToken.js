// Create token and save in the cookie
export default (user, statusCode, res) => {
  // Create JWT Token
  const token = user.getJwtToken();
  console.log(process.env.COOKIE_EXPIRES_TIME);

  // Options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "none", // Required for cross-site cookies
    secure: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    token,
  });
};
