import express from 'express'; 

const app = express(); 
const PORT = process.env.PORT || 5000; 

app.get ('/', (req, res) => {
    res.send('Users Are Coming Soon');
})

const users = [
    {id: 1, name: 'Raisul', email: 'webzelo365@gmail.com'},
    {id: 2, name: 'Islam', email: 'islam@gmail.com'},
    {id: 3, name: 'Nihad', email: 'nihad@gmail.com'}
]

app.get ('/users', (req, res) => {
    res.send(users);
})

app.listen(PORT, () => [
    console.log(`Server Is Running On PORT ${PORT}`)
])