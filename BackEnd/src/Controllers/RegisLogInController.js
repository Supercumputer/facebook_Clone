const userRegis = require('../Service/regisLoginService')

class RegisLogInController {
  async register(req, res) {
    try {
      let data = await userRegis.createUser(req.body);
      return res.status(200).json({
        messenger: data.messenger,
        status: data.status
      });
    } catch (error) {
      return res.status(500).json({
        messenger: "Đoạn mã đã bị lỗi !!!",
      });
    }
  }

  async login(req, res) {
      try {
          let data = await userRegis.loginUser(req.body)
          res.cookie('JWT', data.acount.token, { expires: new Date(Date.now() + 900000), httpOnly: true })
          return res.status(200).json({
            messenger: data.messenger,
            status: data.status,
            acount: data.acount
          })
      } catch (error) {
          return res.status(500).json({
            messenger: "Đoạn mã đã bị lỗi !!!",
          });
      }
  }
}

module.exports = new RegisLogInController();
