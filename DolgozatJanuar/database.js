import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database.sqlite");
function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

const initializeDB = () => {
    return new Promise((resolve, reject) => {
        db.serialize(async () => {
            try {

                await dbRun("DROP TABLE IF EXISTS books");

                await dbRun("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, author TEXT, description TEXT, year INTEGER)");

                const books = [
                    {
                        title: "Harry Potter és a bölcsek köve",
                        author: "J. K. Rowling",
                        description: "A Roxfort Boszorkány- és Varázslóképző Szakiskolában töltött első tanév kemény erőpróba a diákok számára. Harry Potternek nem csupán a vizsgákon kell megfelelnie, de egy életre-halálra szóló küzdelemnek is részese lesz. A tizenegy éves varázslójelölt története meghódította az egész világot.",
                        year: 2024
                    }
                ];

                for (const book of books) {
                    await dbRun("INSERT INTO books (title, author, description, year) VALUES (?, ?, ?, ?)", [book.title, book.author, book.description, book.year]);
                }

                resolve();  
            } catch (err) {
                reject(err); 
            }
        });
    });
};

export { db, dbQuery, dbRun, initializeDB };