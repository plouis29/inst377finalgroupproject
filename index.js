const supabaseClient = require('@supabase/supabase-js')
const express = require('express')
const path = require('path')

const app = express()
const port = 3000
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://mkglwaoohztcetlvucik.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1rZ2x3YW9vaHp0Y2V0bHZ1Y2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU4MjEyMjgsImV4cCI6MjAzMTM5NzIyOH0.nNVK_uKZjBX4YwkTNWS2Js_H9cT3A-uxdQMJwBrJdBs'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey)

// VERCEL: Allows front end
app.get('/', (req, res) => {
    res.sendFile('public/Home.html', { root: __dirname })
})

// Creating the API
// Source for the data is from: https://www.health.harvard.edu/blog/10-superfoods-to-boost-a-healthy-diet-2018082914463
app.get('/superfood', async (req, res) => {
    console.log('Attempting to get all data')

    const { data, error } = await supabase
        .from('Superfood')
        .select()

        if(error) {
            console.log('Error')
            res.send(error)
        } else {
            res.send(data)
        }
})

/*
// Creating the Daily Values API
// Source for the data is from: https://www.fda.gov/media/99059/download OR https://ods.od.nih.gov/HealthInformation/dailyvalues.aspx

app.get('/dailyvalues', async (req, res) => {
    console.log('Attempting to get all data')

    const { data, error } = await supabase
        .from('DailyValues')
        .select()

        if(error) {
            console.log('Error')
            res.send(error)
        } else {
            res.send(data)
        }
})
*/

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});
