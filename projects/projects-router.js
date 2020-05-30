const express = require('express')

const projects = require('./projects-model.js')

const router = express.Router()

router.post('/resources', (req, res) => {
    const resourceData = req.body
    projects.addResources(resourceData).then(resource => {
        res.status(201).json(resource)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      })
})

router.get('/resources', (req, res) => {
    projects.getResources().then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get schemes' });
      })
})
router.post('/projects', (req, res) => {
    const projectData = req.body
    projects.addProjects(projectData).then(project => {
        res.status(201).json(project)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      })
})
router.get('/projects', (req, res) => {
    projects.getProjects().then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get projects' });
      })
})

router.post('/projects', (req, res) => {
    const projectData = req.body
    projects.addProjects(projectData).then(project => {
        res.status(201).json(project)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to create new project' });
      })
})

router.post('/projects/:id', (req, res) => {
    const {id} = req.params
    taskData = req.body
    taskData.project_id = id
    projects.addTasks(taskData, id).then(project => {
        res.status(201).json(project)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      })
})

router.post('/projects/:id/tasks', (req, res) => {
    const {id} = req.params 
    taskData = req.body
    taskData.project_id = id
    projects.addTasks(taskData, id).then(project => {
        res.status(201).json(project)
    }).catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      })
})

router.get('/projects/:id/tasks', (req, res) => {
    project_id = req.params.id
    projects.getTasks(project_id).then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get tasks' });
      })
})

  module.exports = router