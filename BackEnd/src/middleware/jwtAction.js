const { verifyToken } = require("../Service/authentication");

const nextPath = ["/getacount"];

const extrackToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
};

const checkToken = (req, res, next) => {
  //   if (nextPath.includes(req.path)) {
  //     return next();
  //   }

  let check = req.cookies;

  let tokenFromHeader = extrackToken(req);
  if ((check && check.jwt) || tokenFromHeader) {
    let token = check && check.jwt ? check.jwt : tokenFromHeader;
    let decode = verifyToken(token);
    if (decode) {
      req.user = decode;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        status: "error",
        message: "You are not logged in",
      });
    }
  } else {
    return res.status(401).json({
      status: "error",
      message: "You are not logged in",
    });
  }
};

const checkPermistion = (req, res, next) => {
  if (nextPath.includes(req.path)) {
    return next();
  }
  if (req.user) {
    let role = req.user.role;
    let currentUrl = req.path;

    if (!role && role.length === 0) {
      return res.status(403).json({
        status: "error",
        message: "You don't have permistion",
      });
    }

    let result = role.some((item) => item.url === currentUrl);

    if (result) {
      next();
    } else {
      return res.status(403).json({
        status: "error",
        message: "You don't have permistion",
      });
    }
  } else {
    return res.status(401).json({
      status: "error",
      message: "You are not logged in",
    });
  }
};

module.exports = { checkToken, checkPermistion };
