let User = require("../model/user");

const hanleUser = async (req, res) => {
  try {
    let result = await User.findOne({ name: req.params.username });
    if (!result) {
      return res.status(400).send("User not found");
    }
    res.send(result);
  } catch (e) {
    return res.status(400).send("server error: " + e.message);
  }
};
module.exports = {
  hanleUser,
};
