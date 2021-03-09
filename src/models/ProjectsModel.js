const { Model } = require('objection');
const knex = require('../database');
Model.knex(knex);

class Project extends Model {
    static get tableName() {
        return 'projects';
    }

    static relationMappings = {
        navers: {
            relation: Model.ManyToManyRelation,
            modelClass: __dirname + '/NaversModel',
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

    static async getProject(id) {
        return await this.query().withGraphFetched("navers").findById(id);
    }
}

module.exports = Project;