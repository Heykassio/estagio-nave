const NaversRepository = require('../repositories/NaversRepository');
const ProjectNaversRepository = require('../repositories/ProjectsNaversRepository');
const { formatDate } = require('../../utils');
module.exports = {
    async index(req, res) {
        try {
            const navers = await NaversRepository.getAll();
            navers.map(naver => {
                naver.birthdate = formatDate(naver.birthdate);
                naver.admission_date = formatDate(naver.admission_date);
            });
            return res.status(200).json({ navers });
        } catch (error) {
            return res.status(401).json({ error: error.message });
        }
    },

    async show(req, res) {
        const { id } = req.params;
        try {
            const naver = await NaversRepository.getOne(id);
            naver.birthdate = formatDate(naver.birthdate);
            naver.admission_date = formatDate(naver.admission_date);
            if (!naver) return res.status(200).json({ error: 'Nenhum naver encontrado' });
            return res.status(200).json({ naver });
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    },

    async store(req, res) {
        const { projects } = req.body;
        try {
            const naver = await NaversRepository.register(req.body);
            const errors = await ProjectNaversRepository.registerFromNavers(projects, naver.id);
            return errors.length > 0 ? res.status(201).json({ naver, alerta: errors }) : res.status(201).json({ naver });
        } catch (error) {
            console.log(error);
            return res.status(401).json({ error: error.message });
        }
    }
}