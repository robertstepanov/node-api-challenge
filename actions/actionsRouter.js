const express = require("express");

const Actions = require("../data/helpers/actionModel");

const router = express.Router();

router.get("/", (req, res) => {
  Actions.get(req.query.data)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting projects" });
    });
});

router.get("/:id", (req, res) => {
  Actions.get(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "No action with that ID" });
    });
});

router.post("/", (req, res) => {
  const action = { ...req.body };

  Actions.insert(action)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error, there is no project with that ID" });
    });
});

router.delete("/:id", (req, res) => {
  Actions.remove(req.params.id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error removing action" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Actions.update(id, changes)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating the action" });
    });
});

module.exports = router;
