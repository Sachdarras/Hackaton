-- Table Candidate
CREATE TABLE candidate (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  surname VARCHAR(30) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  location VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(40) NOT NULL,
  github TEXT,
  portfolio TEXT,
  photo TEXT,
  profession VARCHAR(50) NOT NULL,
  hardskills TEXT NOT NULL,
  softskills TEXT NOT NULL,
  description TEXT,
  contrat VARCHAR(50) NOT NULL,
  mentor BOOLEAN NOT NULL
);

-- Table Entreprise
CREATE TABLE entreprise (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  image VARCHAR(255),
  raison_sociale VARCHAR(50) NOT NULL,
  location VARCHAR(255) NOT NULL,
  secteur VARCHAR(50) NOT NULL,
  siret INT UNSIGNED NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  fonction VARCHAR(50) NOT NULL,
  telephone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  technologie TEXT NOT NULL,
  profession VARCHAR(70) NOT NULL,
  contrat VARCHAR(50) NOT NULL,
  poste VARCHAR(70) NOT NULL
);

-- Table MatchRelation
CREATE TABLE matchRelation (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  entreprise_id INT UNSIGNED NOT NULL,
  candidate_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (entreprise_id) REFERENCES entreprise(id),
  FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);

-- Table Projet
CREATE TABLE projet (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  urlprojet VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  candidate_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidate(id)
);

INSERT INTO candidate (name, surname, profession, email, mobile, mentor, photo, portfolio, password, hardskills, description, location, github, softskills, contrat)
VALUES
('Bridget', 'Stark', 'Developer', 'Bridget.Stark@gmail.com', '471 582 3007', true, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/tzqrdwa3vucb13zgaqxs.webp', 'https://www.bell.net/', 'm-vrKU[k', 'Vue.js, Go, Linux, Pandas, Kotlin', "Développeur Full-stack passionné par la création d'applications web robustes. Expérimenté en développement front-end et back-end utilisant des technologies telles que JavaScript, Python et Java.", 'Saint Deniseboeuf', 'https://github.com/bridget.stark', 'Prise de parole en public, Communication, Pensée stratégique', 'CDD, Freelance, CDI'),
('Adelaide', 'Coates', 'Data Analyst', 'Adelaide.Coates@gmail.com', '313 194 9320', true, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/v7dj0l3hrbgjsps408jl.webp', 'https://www.peterson.info/', 'LzoeQ=`^', 'MongoDB, Azure, Node.js', "Data Analyst avec une expérience en business intelligence et reporting. Expérimenté dans l'extraction d'insights à partir de données pour soutenir la stratégie commerciale et la prise de décision.", 'Sainte Honoré-sur-Mer', 'https://github.com/adelaide.coates', 'Service client, Écoute active, Pensée stratégique', 'CDD, Freelance'),
('Alma', 'Hopkins', 'Data Analyst', 'Alma.Hopkins@gmail.com', '148 460 6190', false, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/v7dj0l3hrbgjsps408jl.webp', 'http://www.flores.com/', 'uw!n8`?y', 'TensorFlow, React, Ruby, PyTorch', "Data Analyst analytique, compétent dans l'identification des tendances et des modèles dans des ensembles de données complexes. Habile à traduire les données en recommandations exploitables pour l'amélioration des affaires.", 'Henry-sur-Mer', 'https://github.com/alma.hopkins', 'Négociation, Résolution de conflits, Influence', 'Alternance'),
('Michelle', 'Oakley', 'Manager Data', 'Michelle.Oakley@gmail.com', '282 266 3863', true, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033897/Hackathon3/candidates_comics/kvkmwcwlagvkz0662esx.webp', 'http://fowler.net/', 'ST>^PYU2', 'TensorFlow, Angular, Vue.js, SQLite, Bash, Linux', "Data Manager avec une vaste expérience en gouvernance des données, gestion de la qualité et développement de stratégies de données. Compétent dans la direction d'équipes de données et la conduite d'initiatives centrées sur les données.", 'AndreVille', 'https://github.com/michelle.oakley', 'Fiabilité, Responsabilité, Communication', 'Stage, CDI'),
('Carina', 'Johnson', 'Developer', 'Carina.Johnson@gmail.com', '244 914 5880', false, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/czseeuwxs7f4irsiorw1.webp', 'https://bell.org/', '4F2H\+*E', 'Shell, MySQL, Django, Linux, C++', "Développeur logiciel avec une solide compréhension du cycle de vie du développement logiciel (SDLC). Compétent en plusieurs langages de programmation et frameworks, avec un accent sur la création d'applications évolutives.", 'Julien', 'https://github.com/carina.johnson', 'Intelligence émotionnelle, Négociation, Fiabilité', 'Freelance'),
('Alessia', 'Bell', 'Data Engineer', 'Alessia.Bell@gmail.com', '954 649 4637', true, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/gphj4llbvmxn5nimwsqh.webp', 'http://mullins.info/', 'g9W.S{w^', 'Keras, HTML, TypeScript, PostgreSQL', "Ingénieur Data avec une solide expérience en gestion de bases de données, intégration de données et informatique en nuage. Expérimenté dans la conception de modèles de données et l'optimisation des flux de travail de données pour un traitement efficace des données.", 'Chrétien-sur-Mer', 'https://github.com/alessia.bell', 'Résolution de conflits, Collaboration, Service client', 'CDI, Freelance'),
('Charlotte', 'Niles', 'Cyber security', 'Charlotte.Niles@gmail.com', '303 658 4676', true, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/czseeuwxs7f4irsiorw1.webp', 'https://williams.com/', 'e]2YFwrL', 'C++, Flask, Angular, Linux', "Professionnel expérimenté en cybersécurité avec une solide expérience en sécurité réseau, analyse des menaces et réponse aux incidents. Compétent dans la mise en œuvre de protocoles de sécurité et la réalisation d'évaluations de vulnérabilité pour protéger les organisations contre les cybermenaces.", 'Marques-les-Bains', 'https://github.com/charlotte.niles', 'Compétences interpersonnelles, Gestion du stress, Mentorat', 'Alternance, CDD, CDI'),
('Stella', 'Bingham', 'Data Scientist', 'Stella.Bingham@gmail.com', '898 216 6276', false, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/xx8gibwdpidsg6hnf1pl.webp', 'https://stephens.com/', 'Df!m!%cq', 'Java, AWS, SQLite, Go, JavaScript', "Data Scientist innovant avec un accent sur les technologies de big data et les analyses avancées. Habile à exploiter les données pour orienter les décisions stratégiques et améliorer l'efficacité opérationnelle.", 'Sainte Franck', 'https://github.com/stella.bingham', 'Prise de parole en public, Influence, Attitude positive', 'CDD, Alternance, CDI'),
('Adeline', 'Flack', 'Developer', 'Adeline.Flack@gmail.com', '526 441 8789', false, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033897/Hackathon3/candidates_comics/xbwbolzcfkjencjeushs.webp', 'https://thompson.info/', 'bQgtn7^[', 'Java, SQL, MySQL, Azure, SQLite, Kubernetes', "Développeur Full-stack passionné par la création d'applications web robustes. Expérimenté en développement front-end et back-end utilisant des technologies telles que JavaScript, Python et Java.", 'Besnard', 'https://github.com/adeline.flack', "Travail en équipe, Fiabilité, Ouverture d'esprit", 'CDD, Stage'),
('Keira', 'Ellery', 'Data Scientist', 'Keira.Ellery@gmail.com', '391 857 6454', false, 'https://res.cloudinary.com/dxzcuuil8/image/upload/v1720033898/Hackathon3/candidates_comics/rbv1mauydrhlldxfkfhm.webp', 'https://morales.com/', 'UmlDJeRh', 'AWS, JavaScript, Git, Go', "Data Scientist avec une expertise en apprentissage automatique et en analyse de données. Expérimenté dans la conception et la mise en œuvre de modèles prédictifs pour résoudre des problèmes commerciaux complexes.", 'Saint Clarice', 'https://github.com/keira.ellery', 'Communication, Résolution de conflits, Leadership', 'Freelance, CDI');
