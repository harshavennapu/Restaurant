// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();

// Set up body-parser to handle form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Our Restaurant' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
