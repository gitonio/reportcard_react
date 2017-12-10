module.exports = {
  migrations_directory: "./migrations",
  networks: {
    mynetwork: {
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    }
  }
};
