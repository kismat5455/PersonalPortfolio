require('dotenv').config({ path: '/home/ubuntu/CSWDP_SUMMER_2024/PersonalPortfolio/.env' });

const express = require('express');
const cors=require('cors')
const app = express();
const PORT = 3000;

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

app.use(cors());

app.use(express.static('../docs'));

app.get('/repos', (req, res) => {
  fetch('https://api.github.com/users/kismat5455/repos', {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    
    }
    return response.json();
  })
  .then(data => {
    res.json(data);
  })
  .catch(error => {
    throw new Error('Error fetching repositories');
  });
});


app.get('/')


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
