const AbstractRepository = require("./AbstractRepository");

class EntrepriseRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Entreprise" as configuration
    super({ table: "entreprise" });
  }

  // The C of CRUD - Create operation

  async create(entreprise) {
    // Execute the SQL INSERT query to add a new Entreprise to the "Entreprise" table
    const [result] = await this.database.query(
      `insert into ${this.table} (
      image,
      raison_sociale,
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
        entreprise.raison_sociale,
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

    // Return the ID of the newly inserted Entreprise
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Entreprise by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Entreprise
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Entreprises from the "Entreprise" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Entreprise
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Entreprise

  async update(entreprise) {
    const [edit] = await this.database.query(
      `update ${this.table} set
      image =?,
      raison_sociale =?,
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
        entreprise.raison_sociale,
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
    return edit;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Entreprise by its ID

  async delete(id) {
    // Execute the SQL DELETE query to remove an user from the "Entreprise" table
    const [destroy] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return destroy;
  }
}

module.exports = EntrepriseRepository;
