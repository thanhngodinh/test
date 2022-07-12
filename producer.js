const stompit = require('stompit')
 
stompit.connect({ host: 'localhost', port: 61613 }, (err, client) => {
  frame = client.send({ destination: 'SampleQueue' })
 
  frame.write('Simples Assim')
 
  frame.end()
 
  client.disconnect()
})