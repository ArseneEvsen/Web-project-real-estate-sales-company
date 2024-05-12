const database = require('./src/config/mysql.config');
const fs = require ('fs');
const http = require("http");
const app = require('./app');

const port = process.env.PORT || 3005;


// Fonction pour initialiser la base de données au démarrage de l'application
async function initializeDatabase() {
    try {
        // Lecture du fichier SQL
        const sqlFilePath = './dbinit/init.sql';
        const sqlQuery = fs.readFileSync(sqlFilePath, 'utf8');

        // Exécution des requêtes SQL pour initialiser la base de données
        await database.query(sqlQuery);
        console.log('La base de données a été créée avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de la base de données :', error);
        process.exit(1); // Arrêt du processus en cas d'erreur critique
    }
}

// Appel de la fonction d'initialisation de la base de données au démarrage de l'application
initializeDatabase();

const server = http.createServer(app);

server.listen(port);


