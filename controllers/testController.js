const testController = (req, res) => {
  res.status(200).send({
    message: "Welcome harsh",
    success: true,
  });
};

module.exports = { testController };