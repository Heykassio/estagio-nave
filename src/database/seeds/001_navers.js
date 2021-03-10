
exports.seed = function (knex) {
  return knex('navers').insert([
    { name: 'Cassius Costa', birthdate: '1991-03-02', admission_date: '2021-03-20', job_role: 'Back-end Developer' },
    { name: 'Jon Doe', birthdate: '1998-12-22', admission_date: '2020-10-14', job_role: 'Front-end Developer' },
    { name: 'Jane Doe', birthdate: '2000-07-15', admission_date: '2018-02-01', job_role: 'Mobile Developer' },
    { name: 'Rhea McLaughlin', birthdate: '2001-08-14', admission_date: '2019-01-02', job_role: 'Full-stack Developer' }
  ]);
};
