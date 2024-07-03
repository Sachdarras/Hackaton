
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
  photo text not null,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);INSERT INTO candidate (
  name, 
  firstname, 
  profession,
  email,  
  mentor,
  photo,   
  portfolio, 
  password,
  skills, 
  description 
) VALUES
  ("Bridget", "Stark", "Developer", "Bridget.Stark@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=7ZG6dL&hair=long04,short01,long03,short05,long01", "http://jimenez.info/", "bCv6tz+'", "HTML, Pandas, Node.js", "Full-stack Developer with a passion for creating robust web applications. Experienced in front-end and back-end development using technologies such as JavaScript, Python, and Java."),
 ("Adelaide", "Coates", "Data Analyst", "Adelaide.Coates@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=l5c4QM&hair=long03,short04,long04,long05,short05", "http://www.rasmussen.com/", "AkX+L\\>d", "React, Ruby, Java", "Detail-oriented Data Analyst with strong skills in data collection, cleansing, and analysis. Proficient in Excel, SQL, and data visualization tools such as Tableau and Power BI."),
  ("Alma", "Hopkins", "Data Analyst", "Alma.Hopkins@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=CkhkVd&hair=short02,short03,long03,long01,short05", "https://www.gutierrez-fields.biz/", "o(@_C\"Cl", "Django, PostgreSQL, JavaScript", "Data Analyst with a background in business intelligence and reporting. Experienced in extracting insights from data to support business strategy and decision-making."),
  ("Michelle", "Oakley", "Manager Data", "Michelle.Oakley@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=yvGHnw&hair=long05,short04,short01,short03,short05", "http://ortega-bryant.net/", "=C%gN2?.", "Flask, Python, SQL, Keras, Docker", "Data Manager with extensive experience in data governance, quality management, and data strategy development. Skilled in leading data teams and driving data-centric initiatives."),
  ("Carina", "Johnson", "Developer", "Carina.Johnson@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=tTa3fs&hair=short04,short02,long02,short03,long01", "https://www.johnson-stewart.com/", "~&4s?'-`", "Bash, Kubernetes, TensorFlow, Azure, PostgreSQL", "Full-stack Developer with a passion for creating robust web applications. Experienced in front-end and back-end development using technologies such as JavaScript, Python, and Java."),
  ("Alessia", "Bell", "Data Engineer", "Alessia.Bell@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=EHS1Ik&hair=long01,long04,short01,short04,long05", "https://davis-whitaker.info/", "XcR@@CPQ", "Scikit-Learn, Express, Kubernetes, Flask, React, Keras", "Data Engineer with a strong background in database management, data integration, and cloud computing. Experienced in designing data models and optimizing data workflows for efficient data processing."),
  ("Charlotte", "Niles", "Cyber security", "Charlotte.Niles@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=kKAuld&hair=long03,short01,short05,long05,long02", "https://mitchell-carter.biz/", "~qU(i)O~", "React, Vue.js, Keras, TypeScript", "Proficient in cybersecurity tools and technologies, with a focus on safeguarding data integrity and confidentiality. Adept at identifying potential security risks and developing strategies to mitigate them."),
  ("Stella", "Bingham", "Data Scientist", "Stella.Bingham@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=0wMSEy&hair=short05,short03,long04,long05,long01", "https://www.thomas.net/", ":~E6BqL*", "JavaScript, HTML, Django, React", "Data Scientist with expertise in statistical analysis, machine learning, and data visualization. Proficient in Python, R, and SQL, with a track record of delivering data-driven insights."),
  ("Adeline", "Flack", "Developer", "Adeline.Flack@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=NoDQ7T&hair=short01,long01,short04,long02,long05", "http://www.pena.info/", "?B>jR>I`", "CSS, HTML, Pandas", "Innovative Developer with a knack for solving complex problems and delivering high-quality software solutions. Skilled in agile methodologies, version control, and continuous integration."),
  ("Keira", "Ellery", "Data Scientist", "Keira.Ellery@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=zj7yOE&hair=long03,short04,long05,short01,long01", "https://www.bryant.com/", "DI={h*nv", "CSS, Shell, TypeScript, TensorFlow, Node.js, C++", "Innovative Data Scientist with a focus on big data technologies and advanced analytics. Adept at leveraging data to drive strategic decision-making and improve operational efficiency."),
  ("Natalie", "Ward", "Manager Data", "Natalie.Ward@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=TQbVZ0&hair=short05,short04,long04,long02,short02", "http://fitzgerald.biz/", ";ZVOe6ho", "Ruby, TensorFlow, Python", "Data Manager with extensive experience in data governance, quality management, and data strategy development. Skilled in leading data teams and driving data-centric initiatives."),
  ("Lauren", "Gilmour", "Developer", "Lauren.Gilmour@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=MIhdUV&hair=short03,short02,short04,long02,short05", "https://www.park-hernandez.info/", "W2f,I4TT", "Linux, MongoDB, PowerShell, Kubernetes, TensorFlow, Django", "Full-stack Developer with a passion for creating robust web applications. Experienced in front-end and back-end development using technologies such as JavaScript, Python, and Java."),
  ("Alessandra", "Callan", "Manager Data", "Alessandra.Callan@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=cNIbHH&hair=short02,long04,long05,long01,short05", "http://www.chase.net/", "|p9U'yB)", "MySQL, Azure, TypeScript, Express", "Data Manager with extensive experience in data governance, quality management, and data strategy development. Skilled in leading data teams and driving data-centric initiatives."),
  ("Cadence", "Watt", "Developer", "Cadence.Watt@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=R5f9vF&hair=long02,long03,short05,long05,short04", "http://hamilton-hamilton.com/", "\\%<rb?|^", "Kubernetes, Flask, Numpy, Azure, React", "Full-stack Developer with a passion for creating robust web applications. Experienced in front-end and back-end development using technologies such as JavaScript, Python, and Java."),
  ("Alexia", "Brennan", "Data Scientist", "Alexia.Brennan@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=H6NqXk&hair=long01,long05,long02,long04,short05", "https://king.com/", ".E7#pFqv", "TensorFlow, Ruby, Swift, SQL, Scikit-Learn", "Experienced Data Scientist skilled in developing predictive models and conducting exploratory data analysis. Strong background in data mining, algorithm development, and business analytics."),
  ("Rosalyn", "Stevenson", "Data Analyst", "Rosalyn.Stevenson@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=Xja4gL&hair=short02,long02,short05,long04,long05", "http://www.wood-johnson.com/", "9wC!=OWW", "Pandas, Linux, Flask", "Detail-oriented Data Analyst with strong skills in data collection, cleansing, and analysis. Proficient in Excel, SQL, and data visualization tools such as Tableau and Power BI."),
  ("Cadence", "Long", "Data Engineer", "Cadence.Long@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=HDanLT&hair=short05,short04,short01,long02,long03", "http://www.ross.biz/", "bG5sD%8d", "C++, Linux, PowerShell, Keras", "Data Engineer with a strong background in database management, data integration, and cloud computing. Experienced in designing data models and optimizing data workflows for efficient data processing."),
  ("Juliana", "Gonzalez", "Developer", "Juliana.Gonzalez@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=kCIUqX&hair=long01,short04,short01,short05,long04", "http://brown.com/", "[PKSYlTM", "Flask, TypeScript, Docker", "Innovative Developer with a knack for solving complex problems and delivering high-quality software solutions. Skilled in agile methodologies, version control, and continuous integration."),
  ("Mikayla", "Nash", "Cyber security", "Mikayla.Nash@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=LfKoeG&hair=long01,long04,short04,long03,long05", "http://brown.com/", "7qW$~S.E", "Keras, SQL, Numpy, HTML, CSS, C++", "Proficient in cybersecurity tools and technologies, with a focus on safeguarding data integrity and confidentiality. Adept at identifying potential security risks and developing strategies to mitigate them."),
  ("Tiffany", "Clifford", "Data Analyst", "Tiffany.Clifford@gmail.com", true, "https://api.dicebear.com/9.x/pixel-art/svg?seed=KDysgi&hair=long04,short05,short01,short04,long05", "https://dickson-simpson.com/", "[REJ`?xu", "Bash, Django, TypeScript, Kubernetes", "Data Analyst with a background in business intelligence and reporting. Experienced in extracting insights from data to support business strategy and decision-making."),
  ("Tessa", "Manning", "Data Analyst", "Tessa.Manning@gmail.com", false, "https://api.dicebear.com/9.x/pixel-art/svg?seed=NZCvgp&hair=short02,long03,short01,long01,long05", "https://chavez.com/", ":g*|I/`4", "TensorFlow, CSS, HTML, C++, PowerShell", "Detail-oriented Data Analyst with strong skills in data collection, cleansing, and analysis. Proficient in Excel, SQL, and data visualization tools such as Tableau and Power BI.");
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
