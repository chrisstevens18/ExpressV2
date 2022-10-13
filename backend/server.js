const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 5001;
const {Client} = require('pg');
app.use(express.json())
app.use(cors());

const client = new Client ({
    connectionString: "postgres://memo_zqhk_user:VSN8JYivzLUf2izDvX8W9zajgcpkegn7@dpg-cd089oda4994l0df7b6g-a.oregon-postgres.render.com/memo_zqhk",
    ssl: {rejectUnauthorized: false}
    
});
client.connect();
app.use(express.static('public'));
app.get('/api/mvp', (req, res) => {
    client.query('SELECT * FROM mvp_table;')
    .then((result) =>{
        res.setHeader('Content-Type', 'application/json');
        res.send(result.rows);
    })
});

app.post('/api/mvp', (req, res) => {
    let {hobbies, description} = req.body
    
    client.query("INSERT INTO mvp_table(hobbies, description) VALUES ($1, $2);",[hobbies, description])
    .then((data)=>{
        res.send(data);

    });
});

app.delete('/api/mvp',(req, res)=>{
    let id = req.body.id; 
    client.query('DELETE FROM mvp_table WHERE id = $1',[id]).then((data) =>{

        res.send()
    })
});

app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
});