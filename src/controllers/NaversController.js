const Naver = require('../models/NaversModel');
const ProjectNaversRepository = require('../repository/ProjectsNaversRepository');
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

            const errors = await ProjectNaversRepository.registerFromNavers(projects, naver.id);
            return errors.length > 0 ? res.status(201).json({naver, alerta: errors}) : res.status(201).json({naver});
        } catch (error) {
            return res.status(401).json({error: error.message});
        }
    }
}