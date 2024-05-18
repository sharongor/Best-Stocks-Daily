
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000



app.use(cors())

app.get("/stocks", async (req, res) => {
    try {
        // Get current date and fetch the updated list of stocks
        let currentDate = new Date();
        // Extract year, month, and day
        let year = currentDate.getFullYear();
        let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months start from 0 
        let day = String(currentDate.getDate()).padStart(2, '0');
        let dateFormat = `${year}-${month}-${day}`;
        // add the date format to the
        //fetching the name,flag,nativeName from the api and we are waiting for that data to come
        const apiRes = await fetch('https://tradestie.com/api/v1/apps/reddit?date=' + dateFormat)
        if (!apiRes.ok) {
            throw new Error(`http error status: ${apiRes.status}`)
        }
        const data = await apiRes.json()

        //the server reacts to the request
        res.json(data)
    }
    catch (error) {
        console.error('fetch error')
        res.status(500).send('internal server error')
    }
})

app.listen(PORT, () => {
    console.log(`server is running at port htttp://localhost:${PORT}`)
})