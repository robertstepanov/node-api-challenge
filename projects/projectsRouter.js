const express = require('express');

const Projects = require('../data/helpers/projectModel');

const router = express.Router();


router.get('/', (req, res) => {
  Projects.get(req.query.data)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Error getting projects' })
  })
})



router.get('/:id', (req, res) => {
 
  Projects.get(req.params.id)
  .then(project => {
    res.status(200).json(project);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'No projects with that ID' })
  })
});


router.post("/", (req, res) => {
 
  
  const project = { ...req.body };

  Projects.insert(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error adding project" });
    });
});

router.delete('/:id', (req, res) => {
 
  Projects.remove(req.params.id)
  .then(removed => {
    res.status(200).json(removed);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Error removing project' })
  })
});

router.put('/:id', (req, res) => {
 
  const { id } = req.params;
  const changes = req.body;
  Projects.update(id, changes)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Error updating the project' })
  })
});

router.get('/:id', (req, res) => {

  Projects.getProjectActions(req.params.project_id)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Error retrieving actions for that project' })
  })
})

module.exports = router;