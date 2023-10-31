const jwt = require("jsonwebtoken");
const path = [ "/"];

function checkUserjwt(req, res, next) {
  if (path.includes(req.path)) return next();

  let cookies = req.cookies;
  console.log(req.cookies);
  if (cookies && cookies.JWT) {
    let decoded = jwt.verify(cookies.JWT, "mk");
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({
        messenger: "Bạn chưa đăng nhập !!!",
      });
    }
  } else {
    res.status(401).json({
      messenger: "Bạn chưa đăng nhập !!!",
    });
  }
}

module.exports = { checkUserjwt };
