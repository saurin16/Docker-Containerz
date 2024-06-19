const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    return res.json({
        message: 'Hello World, I am nodejs in Container'
    });
});

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
