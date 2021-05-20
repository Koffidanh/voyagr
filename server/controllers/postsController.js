const db = require("../models");

// Defining methods for the postssController
module.exports = {
  findAll: function (req, res) {
    db.Posts
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Posts
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const comments = req.body.comments;
    const image = req.body.image;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const visitDate = req.body.visitDate;
    const newPost = new db.Posts({
      title,
      description,
      comments,
      image,
      latitude,
      longitude,
      visitDate
    });

    newPost.save();

  },
  update: function (req, res) {
    db.Posts
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Posts
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};