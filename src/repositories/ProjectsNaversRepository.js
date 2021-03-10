const Project = require('../models/ProjectsModel');
const Naver = require('../models/NaversModel');
const ProjectsNavers = require('../models/ProjectsNaversModel');

module.exports = {

    async register(data) {
        const {naverId, projectId } = data;
        const project_naver = await ProjectsNavers.query().insert({
            project_id: projectId,
            naver_id: naverId
        });

        return project_naver;
    },

    async registerFromNavers(arrayProjects, naverId){
        const errors = ['Naver cadastrado com sucesso.']
        if(arrayProjects && arrayProjects.length > 0) {
            for (const project of arrayProjects){
                const projectFind = await Project.query().findById(project);
                if(projectFind) {
                    await ProjectsNavers.query().insert({
                        project_id: projectFind.id,
                        naver_id: naverId
                    });
                }else {
                    errors.push(`Projeto ${project} não existe.`);
                }
            }
        }

        return errors;
    },

    async registerFromProjects(arrayNavers, projectId){
        const errors = ['Projeto criado com sucesso.']
        if(arrayNavers && arrayNavers.length > 0) {
            for (const naver of arrayNavers){
                const naverFind = await Naver.query().findById(naver);
                if(naverFind) {
                    await ProjectsNavers.query().insert({
                        project_id: projectId,
                        naver_id: naverFind.id
                    });
                }else {
                    errors.push(`Naver ${naver} não existe.`);
                }
            }
        }

        return errors;
    }
}