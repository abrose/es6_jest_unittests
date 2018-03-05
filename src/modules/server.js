class Server {
  constructor(uri) {
    this.uri = uri;
  }

  connect() {
    console.log(`Connect to ${this.uri}`);
  }
}

export default Server;
