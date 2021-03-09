const Naver = require('../models/NaversModel');
const Project = require('../models/ProjectsModel');
const ProjectsNavers = require('../models/ProjectsNaversModel');

module.exports = {
    async index(req, res) {
        try {
            const navers = await Naver.query();
            return res.status(200).json({navers});
        } catch (error) {
            return res.status(401).json({error: error.message});
        }
    },

    async show(req, res) {
        const { id } = req.params;
        try {
            const naver = await Naver.getNaver(id);
            if(!naver) return res.status(200).json({error: 'Nenhum naver encontrado'});
            return res.status(200).json({naver});
        } catch (error) {
            console.log(error);
            return res.status(400).json({error: error.message})
        }
    },

    async store(req, res) {
        const { name, birthdate, admission_date, job_role, projects} = req.body;
        try {
            const naver = await Naver.query().insert({
                name,
                birthdate,
                admission_date,
                job_role
            });

            if(projects && projects.length > 0) {
                projects.forEach(async project =>{
                    const projectFind = await Project.query().findById(Number(project));
                    console.log(projectFind);
                    if(projectFind) {
                        await ProjectsNavers.query().insert({
                            project_id: projectFind.id,
                            naver_id: naver.id
                        });
                    }
                });
            }

            return res.status(201).json({naver});
        } catch (error) {
            return res.status(401).json({error: error.message});
        }
    }
}