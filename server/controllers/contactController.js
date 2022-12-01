const sendMessage = require('../utils/sendMessage')

module.exports = {
  async contactMe(req, res) {
    try {
      const sent = await sendMessage(req.body)
      return res.status(200).json(sent);
    }
    catch (err) {console.error(err)}
  },
};
