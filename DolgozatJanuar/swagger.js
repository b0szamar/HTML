import swaggerAutogen from 'swagger-autogen';
const doc = {
  info: {
    title: 'BookDoga',
    version: "1.0.0",
    description: 'Book dolgozat'
  },
  host: 'localhost:3000',
  basePath: "/"
};
const outputFile = './swagger-output.json';
const routes = ['./routes/books.js'];
swaggerAutogen()(outputFile, routes, doc);