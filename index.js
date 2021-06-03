const express = require('express')
const app = express()
const MemoryConsumer = require('memory-consumer');

const consumer = new MemoryConsumer();;

app.get('/', function (req, res) {
  res.json({memoryUser: consumer.getUsedMemory()})
})

app.get('/memory', function (req, res) {
    const mb = req.query.mb;
    console.log(`/memory - adding ${mb}mb.`);
    consumer.fillMemoryMb(mb);
    res.json({memoryUser: consumer.getUsedMemory()})
})

app.get('/clean', function (req, res) {
    console.log(`/clean - cleaning memory.`);
    consumer.cleanMemory();
    res.json({memoryUser: consumer.getUsedMemory()})
})
 
app.listen(3000);

console.log('app listen on port 3000');