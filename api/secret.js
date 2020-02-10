const secrets = {
    dbUri: "mongodb+srv://tipaw:HSwjDQCZWXVMwqpC@cluster0-y6xpn.mongodb.net/test?retryWrites=true&w=majority"
  };
  
  const getSecret = key => secrets[key];
  
  module.exports = getSecret;