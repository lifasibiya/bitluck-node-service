var express = require('express');
var app = express();
var axios = require('axios')
var cors = require('cors')
var PORT = 3000

app.use(express.json())
app.use(cors())

const encodeParams = new URLSearchParams()
encodeParams.append("email","sibiyalifa@gmail.com")
const options = {
    method: 'POST',
    url: 'https://south-africa-lotto-live.p.rapidapi.com/subscribe_notification',
    headers: {
        "content-Type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "80475a48a8msh7673b7f76f5b413p1539b6jsn2e75e5dd3e0d",
        "X-RapidAPI-Host": "south-africa-lotto-live.p.rapidapi.com"
    },
    data: encodeParams
}

// axios.request(options).then(res=> {
//     console.log('res', res)
// })
// .catch(err=> {
//     console.error(err)
// })

app.get('/get', (req, res) => {
    res.status(200).send({
        results: [37,50,12,32,41,24],
        date: Date()
    })

})



app.listen(PORT, () => {
    console.log(`it's alive on http://localhost:${PORT}`)
})


