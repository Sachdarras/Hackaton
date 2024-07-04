const AbstractRepository = require("./AbstractRepository");

class CandidateRepository extends AbstractRepository {
  constructor() {
    super({ table: "candidate" });
  }

  async create(candidate) {
    const { name, firstname, email, password } = candidate;
    if (!name || !firstname || !email || !password) {
      throw new Error("Tous les champs obligatoires doivent être renseignés.");
    }
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (
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
        mentor
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        candidate.mentor,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async update(candidate) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET 
        name = ?,
        firstname = ?,
        telephone = ?,
        ville = ?,
        email = ?,
        password = ?,
        github = ?,
        portfolio = ?,
        photo = ?,
        profession = ?,
        hardskills = ?,
        softskills = ?,
        description = ?,
        contrat = ?,
        mentor = ? 
      WHERE id = ?`,
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
        candidate.mentor,
        candidate.id,
      ]
    );
    return result;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return result;
  }

  async authenticate(email, password) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ? AND password = ?`,
      [email, password]
    );
    return rows[0]; // Retourne le candidat trouvé ou undefined
  }
}

module.exports = CandidateRepository;
