const configValues = require('./config');

module.exports = {

    getDbConnectionString: () => {
        return `mongodb://${configValues.username}:${configValues.pwd}@ds223685.mlab.com:23685/nodetodosample_`
    }

}