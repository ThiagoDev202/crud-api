// index.js or most used 'server.js'
// Step #1 – Server Application Code

// Import users.js file to index.js
import userRoutes from './routes/users.js'
import express from 'express'
// POST request body
import bodyParser from 'body-parser'
// Create an app using the express obj
const app = express();

const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', userRoutes);

// Creating routing
app.get('/', (req, res) => {
    res.send('HELLO FROM HOMEPAGE')
})

// app.get('/', (req, res));


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// Start the Server
// npm start - npm run dev


