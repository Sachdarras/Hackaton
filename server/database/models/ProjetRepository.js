const AbstractRepository = require("./AbstractRepository");

class ProjetRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "Projet" as configuration
    super({ table: "Projet" });
  }

  // The C of CRUD - Create operation

  async create(Projet) {
    // Execute the SQL INSERT query to add a new Projet to the "Projet" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, urlprojet, image, candidate_id) values (?, ?, ?, ?, ?)`,
      [
        Projet.name,
        Projet.description,
        Projet.urlprojet,
        Projet.image,
        Projet.candidate_id,
      ]
    );

    // Return the ID of the newly inserted Projet
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific Projet by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the Projet
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Projets from the "Projet" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of Projet
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Projet

  async update(Projet) {
    const [edit] = await this.database.query(
      `update ${this.table} set name =?, description =?, urlprojet =?, image =?, candidate_id =? where id =?`,
      [
        Projet.name,
        Projet.description,
        Projet.urlprojet,
        Projet.image,
        Projet.candidate_id,
      ]
    );
    return edit;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Projet by its ID

  async delete(id) {
    // Execute the SQL DELETE query to remove an user from the "Projet" table
    const [destroy] = await this.database.query(
      `delete from ${this.table} where id = ?`,
      [id]
    );
    return destroy;
  }
}

module.exports = ProjetRepository;
