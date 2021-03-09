const { Model } = require('objection');
const knex = require('../database');
const Naver = require('./NaversModel');
const Project = require('./ProjectsModel');
Model.knex(knex);

class ProjectNaver extends Model {
    static tableName() {
        return 'projects_navers'
    }

    static relationMappings = {
        navers: {
            relation: Model.HasOneRelation,
            modelClass: Naver,
            join:{
                from: 'projects_navers.naver_id',
                to: 'navers.id'
            }
        },
        projects: {
            relation: Model.HasOneRelation,
            modelClass: Project,
            join: {
                from: 'projects_navers.project_id',
                to: 'projects.id'
            }
        }
    }
};

module.exports = ProjectNaver;