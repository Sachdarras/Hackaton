const AbstractRepository = require("./AbstractRepository");

class EntrepriseRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Entreprise" as configuration
    super({ table: "Entreprise" });
  }

  // The C of CRUD - Create operation

  async create(Entreprise) {
    // Execute the SQL INSERT query to add a new Entreprise to the "Entreprise" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, poste, description, location, salaire, contrat, email, password) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Entreprise.name,
        Entreprise.poste,
        Entreprise.description,
        Entreprise.location,
        Entreprise.salaire,
        Entreprise.contrat,
        Entreprise.email,
        Entreprise.password,
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

  async update(Entreprise) {
    const [edit] = await this.database.query(
      `update ${this.table} set name =?, poste =?, description =?, location =?, salaire =?, contrat =?, email =?, password =? where id =?`,
      [
        Entreprise.name,
        Entreprise.poste,
        Entreprise.description,
        Entreprise.location,
        Entreprise.salaire,
        Entreprise.contrat,
        Entreprise.email,
        Entreprise.password,
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
