var dummyLibrary = {};
dummyLibrary.newClient = function() {
  var client = {};

  client.pouet = function() {
    return 'this is a pouet from client';
  };

  return client;
};
