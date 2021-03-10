
exports.seed = function(knex) {
      return knex('projects').insert([
        {name: 'Mobile app'},
        {name: 'Front-end React'},
        {name: 'Back-end Node'}
      ]);
};
