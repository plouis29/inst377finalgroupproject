const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://ifbflwiyjaalbkxtfaik.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmYmZsd2l5amFhbGJreHRmYWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4OTEwNzcsImV4cCI6MjAzMTQ2NzA3N30.jV7HPaSa3-9mThr9PvZ7fQflbYT2DUjCwcnWcVaA548'; // Replace with your actual API key
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/customers', async (req, res) => {
    console.log('Attempting to GET all customers');
    res.send('GET customers endpoint');
});

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});