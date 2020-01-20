
const userAdminResolvers = require('./useradmin');


module.exports = {
    Query:{
        ...userAdminResolvers.Query
    },
    Mutation:{
        ...userAdminResolvers.Mutation
    }
}