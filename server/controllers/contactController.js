module.exports = {
  async contactMe(req, res) {
    try {
      console.log(req.body)
      return res.status(200).json({ message: "hi" });
    }
    catch (err) {console.error(err)}
  },
};
