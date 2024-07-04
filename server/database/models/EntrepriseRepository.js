const AbstractRepository = require("./AbstractRepository");

class EntrepriseRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "entreprise" as configuration
    super({ table: "entreprise" });
  }

  async create(entreprise) {
    // Execute the SQL INSERT query to add a new entreprise to the "entreprise" table
    const [result] = await this.database.query(
      `insert into ${this.table} (
      image,
      raisonSociale,
      location,
      secteur,
      siret,
      lastname,
      firstname,
      fonction,
      telephone,
      email,
      password,
      technologie,
      profession,
      contrat,
      poste
      ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        entreprise.image,
        entreprise.raisonSociale,
        entreprise.location,
        entreprise.secteur,
        entreprise.siret,
        entreprise.lastname,
        entreprise.firstname,
        entreprise.fonction,
        entreprise.telephone,
        entreprise.email,
        entreprise.password,
        entreprise.technologie,
        entreprise.profession,
        entreprise.contrat,
        entreprise.poste,
      ]
    );

    // Return the ID of the newly inserted entreprise
    return result.insertId;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific entreprise by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the entreprise
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all entreprises from the "entreprise" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of entreprises
    return rows;
  }

  async update(entreprise) {
    const [edit] = await this.database.query(
      `update ${this.table} set
      image =?,
      raisonSociale =?,
      location =?,
      secteur =?,
      siret =?,
      lastname =?,
      firstname =?,
      fonction =?,
      telephone =?,
      email =?,
      password =?,
      technologie =?,
      profession =?,
      contrat =?,
      poste =? where id =?`,
      [
        entreprise.image,
        entreprise.raisonSociale,
        entreprise.location,
        entreprise.secteur,
        entreprise.siret,
        entreprise.lastname,
        entreprise.firstname,
        entreprise.fonction,
        entreprise.telephone,
        entreprise.email,
        entreprise.password,
        entreprise.technologie,
        entreprise.profession,
        entreprise.contrat,
        entreprise.poste,
        entreprise.id,
      ]
    );

    return result;
  }

  async delete(id) {
    // Execute the SQL DELETE query to remove an entreprise from the "entreprise" table
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    return result;
  }

  async authenticate(email, password) {
    // Execute the SQL SELECT query to authenticate an entreprise
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ? AND password = ?`,
      [email, password]
    );

    return rows[0]; // Return the entreprise found or undefined
  }
}

module.exports = EntrepriseRepository;
