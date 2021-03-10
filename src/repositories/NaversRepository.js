const Naver = require('../models/NaversModel');

module.exports = {
    async getAll() {
        const navers = await Naver.query();
        return navers;
    },

    async getOne(id) {
        const naver = await Naver.getNaver(id);
        return naver;
    },

    async register(data) {
        const { name, birthdate, admission_date, job_role, projects} = data;
        const naver = await Naver.query().insert({
            name,
            birthdate,
            admission_date,
            job_role
        });

        return naver;
    }
}