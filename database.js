import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initializeDB = async () => {
    await dbRun("DROP TABLE products");
    await dbRun("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT, picture TEXT, price REAL)");

    const products = [
        {name: "Alma", description: "alma", picture: "https://vegabox.hu/wp-content/uploads/2020/01/apples-poland-red-jonaprince-1-e1643214217535.jpg", price:65},
        {name: "Banán", description: "sárga gyümölcs", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfaYsSsRL2rI5Gl3-euSFG7J9SDrhg1cFfw&s", price:12},
        {name: "Barack", description: "gyümölcs", picture: "https://famacosmetics.com/pub/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/b/a/barack_1.jpg", price:5},
    ];

    for (const product of products) {
        await dbRun("INSERT INTO products (name, description, picture, price) VALUES (?, ?, ?,?)", [product.name,product.description, product.picture, product.price]);
    }
};

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

export { db, dbQuery, dbRun, initializeDB };