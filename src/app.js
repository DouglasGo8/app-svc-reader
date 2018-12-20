
const express = require('express');

const fs = require('fs');

const app = express();

const PATH_TO_READ = process.env.PATH_TO_READ

app.get('/go/read', (req, resp) => {

  fs.readFile(PATH_TO_READ + '/data.json', (err, data) => {

    if (err)
      throw err;

    resp.setHeader('Content-Type', 'application/json')
    resp.end(data);

  })

});


app.listen(10251, () => {
  console.log('Ready to Read...')
});
