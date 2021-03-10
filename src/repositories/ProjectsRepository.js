const Projects = require('../models/ProjectsModel');

module.exports = {
    async getAll() {
        const projects = await Projects.query();
        return projects;
    },

    async getOne(id) {
        const project = await Projects.getProject(id);
        return project;
    },

    async register(name) {
        const project = await Projects.query().insert({
            name
        });

        return project;
    }
}