const ProjectRepository = require('../repositories/ProjectsRepository');
const ProjectsNaversRepository = require('../repositories/ProjectsNaversRepository');
const { formatDate } = require('../../utils');
module.exports = {
    async index(req, res) {
        try {
            const projects = await ProjectRepository.getAll();
            return res.status(200).json({projects});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async show(req, res) {
        const { id } = req.params;
        try {
            const project = await ProjectRepository.getOne(id);
            project.navers.map(naver =>{
                naver.birthdate = formatDate(naver.birthdate);
                naver.admission_date = formatDate(naver.admission_date);
            });
            if(!project) return res.status(200).json({error: 'Nenhum projeto encontrado'});
            return res.status(200).json({project});
        } catch (error) {
            console.log(error);
        }
    },

    async store(req, res) {
        const { name, navers} = req.body;
        try {
            const project = await ProjectRepository.register(name);

            const errors = await ProjectsNaversRepository.registerFromProjects(navers, project.id);
            return errors.length > 0 ? res.status(201).json({project, alerta: errors}) : res.status(201).json({project});
        } catch (error) {
            return res.status(401).json({error: error.message});
        }
    }
}