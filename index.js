const express = require('express');
const app = express();



app.use(express.json());


app.post('/your_endpoint', (req, res) => {

    const { userID, collegeEmail, collegeRollNumber, numbers, alphabets } = req.body;

    
    const highestAlphabet = Math.max(...alphabets.map(char => char.charCodeAt(0)));


    const response = {
        status: 'Success',
        userID,
        collegeEmail,
        collegeRollNumber,
        numbers,
        alphabets,
        highestAlphabet: String.fromCharCode(highestAlphabet)
    };

    res.json(response);
});


app.listen(3000, () => {
    console.log(`Server is listening on http://localhost:3000`);
});
