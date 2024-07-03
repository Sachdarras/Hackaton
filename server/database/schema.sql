
-- Table Candidate
CREATE TABLE candidate (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  profession VARCHAR (255) NOT NULL,
  portfolio TEXT NOT NULL,
  mentor BOOLEAN NOT NULL,
  description TEXT NOT NULL,
  skills text NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Table Entreprise
CREATE TABLE entreprise (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

-- Table MatchRelation
CREATE TABLE matchRelation (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  entreprise_id INT UNSIGNED NOT NULL,
  candidate_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (entreprise_id) REFERENCES Entreprise(id),
  FOREIGN KEY (candidate_id) REFERENCES Candidate(id)
);

-- Table Projet
CREATE TABLE projet (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  urlprojet VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  candidate_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES Candidate(id)
);
