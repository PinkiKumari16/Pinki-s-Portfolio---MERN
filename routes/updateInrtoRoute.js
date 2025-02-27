const router = require("express").Router();
const IntroModel = require("../models/IntroModel");

router.post("/api/update-intro", async (req, res) => {
  try {
    console.log(req.body);
    const introData = await IntroModel.findOneAndUpdate(
        { _id: req.body._id },
        req.body,
        { new: true }
    );
    res.status(200).send({
        data: introData,
        success: true,
        message: "Intro updated successfully.",
    })
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
