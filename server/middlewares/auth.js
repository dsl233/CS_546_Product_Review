exports.authMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(403).render("error", {
      errors: ["Page restricted: Please login to proceed"],
      loginError: true,
      title: "Error",
    });
  }
};
