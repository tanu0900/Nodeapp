const express = require('express')
const indexRouter=require('./router/index')
const app = express();
app.use(cors())
app.use(express.json())
app.use('/',indexRouter)
app.listen(3001, () => {
    console.log("server started on port 3001")
})