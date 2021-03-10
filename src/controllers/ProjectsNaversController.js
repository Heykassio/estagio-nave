const ProjectNaversRepository = require('../repositories/ProjectsNaversRepository');

module.exports = {
    async store(req, res) {
        const { naverId, projectId } = req.body;
        try {
            const projectNaver = await ProjectNaversRepository.register(req.body);
            return res.status(201).json({ projectNaver });
        } catch (error) {
            
            let errorString = error.nativeError.code === '23505' ? `Naver com id: ${naverId} já está no Projeto com id: ${projectId}`: 
            error.nativeError.code === '23503' ? error.nativeError.detail.includes('project_id') ? 
            `Projeto com o id: ${projectId} não existe.` : `Naver com o id: ${naverId} não existe.`:
            errror.message;

            return res.status(404).json({ error: errorString });
        }
    }
}