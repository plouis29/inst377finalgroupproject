const express = require('express');
const cors = require('cors');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Supabase setup
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// API route to get all customers
app.get('/customers', async (req, res) => {
    console.log('Attempting to GET all customers');
    res.send('GET customers endpoint');
});

// API route to submit data
app.post('/submit', async (req, res) => {
    const { email, issue } = req.body;
    const { data, error } = await supabase
        .from('about_page')
        .insert([{ email, issue }]);

    if (error) {
        console.error('Error:', error);
        return res.status(500).json({ message: 'Failed to insert data' });
    }

    res.json({ message: 'Data submitted successfully', data });
});

// Routes to serve HTML files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'About.html'));
});

app.get('/project', (req, res) => {
    res.sendFile(path.join(__dirname, 'Project_Specific.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});