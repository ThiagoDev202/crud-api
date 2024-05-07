import express from 'express'
import { v4 as uuidv4 } from 'uuid';

// Creates a fresh router instance, stored in the variable router.
const router = express.Router();

// Mock database
const users = [];

// Adding users to out mock database

// const users = [
//     {
//         first_name: 'John',
//         last_name: 'Doe',
//         email: 'johndoe@example.com'
//     },
//     {
//         first_name: 'Alice',
//         last_name: 'Smith',
//         email: 'alicesmith@example.com'
//     },
// ];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
    // users = array of users
})

// (req, res) => { ... } is a callback function. It gets executed when a request is made to the GET route.

router.post('/', (req, res) => {
    // req.body - This property contains the data (first name, last name, and email)
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send(`${user.first_name} has been added to the Database`);
})

// ':id' it's a parameter of the route request
router.get('/:id', (req, res) => {
    const { id } = req.params;  // req.params -> holds the values of route parameters

    const foundUser = users.find((use) => user.id === id)

    res.send(foundUser)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`${id} deleted successfully from database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;

    const { first_name, last_name, email } = req.body;

    const user = users.find((user) => user.id === id)

    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;

    // if(first_name) {
    //     this.user.first_name = first_name;
    // }
    // if(last_name) {
    //     this.user.last_name = last_name;
    // }
    // if(email) {
    //     this.user.email = email;
    // }
})
    
export default router
