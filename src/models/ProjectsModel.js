const { Model } = require('objection');
const knex = require('../database');
const Naver = require('./NaversModel');
Model.knex(knex);

class Project extends Model {
    static get tableName() {
        return 'projects';
    }

    static relationMappings = {
        navers: {
            relation: Model.ManyToManyRelation,
            modelClass: Naver,
            join: {
                from: 'projects.id',
                through: {
                    from: 'projects_navers.project_id',
                    to: 'projects_navers.naver_id'
                },
                to: 'navers.id'
            }
        }
    }
}

module.exports = Project;