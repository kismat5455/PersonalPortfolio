require('dotenv').config({path:'/home/ubuntu/CSWDP_SUMMER_2024/PersonalPortfolio/.env'});


const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;



const GITHUB_TOKEN = process.env.GITHUB_TOKEN;




app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/repos', async (req, res) => {
try {
const response = await axios.get('https://api.github.com/users/kismat5455/repos', {
headers: {
Authorization: `token ${GITHUB_TOKEN}`
}
});
res.json(response.data);
} catch (error) {
res.status(500).json({ error: 'Error fetching repositories' });
}
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});