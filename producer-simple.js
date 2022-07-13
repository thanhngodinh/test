const stompit = require("stompit");


stompit.connect({ host: "localhost", port: 61613 }, (err, client) => {
  const frame = client.send({ destination: "SampleQueue" });

  data = {
    "id": "1",
    "username": "user07",
    "active": true,
    "locked": false,
    "dateOfBirth": "2009-12-31T23:59:59.999+07:00",
    "email": "test@gmail.com",
    "url": "http://test.com",
    "phone": "0987654321"
  }
  console.log(data);
  frame.write(JSON.stringify(data));

  frame.end();

  client.disconnect();
});
