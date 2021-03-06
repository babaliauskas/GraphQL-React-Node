const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

app.use(cors())

mongoose.connect('mongodb://lukas:atsipalaidaves10@ds255107.mlab.com:55107/gql-ninja', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('Connected to DB')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => console.log('listening on port 4000..'))