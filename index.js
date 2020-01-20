const express = require('express');
const path = require('path')
const connectDB = require('./config/db');
const {ApolloServer } = require('apollo-server-express');
const fileUpload = require('express-fileupload');
const typeDefs = require('./graphql/typeDefs');
const resolvers= require('./graphql/resolvers');
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(fileUpload());
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();

});


connectDB();



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:({req}) =>({req})
});
app.use('/upload',require('./routes/images/index'));
server.applyMiddleware({ app });


app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)