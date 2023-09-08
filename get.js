const express = require('express');
const app = express();



app.use(express.json());


app.post('/your_endpoint', (req, res) => {

});


app.get('/get_operation_code', (req, res) => {
  
    const operationCode = generateOperationCode();

    const response = {
        operationCode
    };

    res.json(response);
});


function generateOperationCode() {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
}


app.listen(3000, () => {
    console.log(`Server is listening http://localhost:3000`);
});
