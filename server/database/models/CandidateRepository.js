const AbstractRepository = require("./AbstractRepository");

class CandidateRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Candidate" as configuration
    super({ table: "candidate" });
  }

  // The C of CRUD - Create operation

  async create(candidate) {
    // Execute the SQL INSERT query to add a new Candidate to the "Candidate" table
    const [result] = await this.database.query(
      `insert into ${this.table} (
      name,
      firstname,
      telephone,
      ville,
      email,
      password,
      github,
      portfolio,
      photo,
      profession,
      hardskills,
      softskills,
      description,
      contrat,
      poste,
      mentor
      ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidate.name,
        candidate.firstname,
        candidate.telephone,
        candidate.ville,
        candidate.email,
        candidate.password,
        candidate.github,
        candidate.portfolio,
        candidate.photo,
        candidate.profession,
        candidate.hardskills,
        candidate.softskills,
        candidate.description,
        candidate.contrat,
        candidate.poste,
        candidate.mentor,
      ]
    );

    // Return the ID of the newly inserted Candidate
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Candidate by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Candidate
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Candidates from the "Candidate" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Candidate
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Candidate

  async update(candidate) {
    const [edit] = await this.database.query(
      `update ${this.table} set 
      name =?,
      firstname =?,
      telephone =?,
      ville =?,
      email =?,
      password =?,
      github =?,
      portfolio =?,
      photo =?,
      profession =?,
      hardskills =?,
      softskills =?,
      description =?,
      contrat =?,
      poste =?,
      mentor =? where id =?`,
      [
        candidate.name,
        candidate.firstname,
        candidate.telephone,
        candidate.ville,
        candidate.email,
        candidate.password,
        candidate.github,
        candidate.portfolio,
        candidate.photo,
        candidate.profession,
        candidate.hardskills,
        candidate.softskills,
        candidate.description,
        candidate.contrat,
        candidate.poste,
        candidate.mentor,
      ]
    );
    return edit;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Candidate by its ID

  async delete(id) {
    // Execute the SQL DELETE query to remove an user from the "Candidate" table
    const [destroy] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return destroy;
  }
}

module.exports = CandidateRepository;
