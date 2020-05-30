const db = require('../data/db-config.js')

function addResources(resource){
    return db('resources').insert(resource, 'id').then(ids => ({ id: ids[0]}))
}

function getResources(){
    return db('resources')
}

function addProjects(project){
    return db('projects').insert(project, 'id').then(ids => ({ id: ids[0]}))
}

function getProjects(){
    return db('projects')
}

function addTasks(task){
    return db('tasks').insert(task).then(ids => ({ id: ids[0]}))
}

function getTasks(project_id){
    return db('tasks').where('project_id', project_id)
}

module.exports = {
    addResources,
    getResources,
    addProjects,
    getProjects,
    addTasks,
    getTasks
}