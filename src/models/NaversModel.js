const { Model } = require('objection');
const knex = require('../database');
const Project = require('./ProjectsModel');

Model.knex(knex);

class Naver extends Model {
    static get tableName() {
        return 'navers';
    }

    static relationMappings = {
        projects: {
            relation: Model.ManyToManyRelation,
            modelClass: Project,
            join: {
                from: 'navers.id',
                through: {
                    from: 'projects_navers.naver_id',
                    to: 'projects_navers.project_id'
                },
                to: 'projects.id'
            }
        }
    }

    static async getNaver(id) {
        return await this.query().withGraphFetched("projects").findById(id);
    }
}

module.exports = Naver;