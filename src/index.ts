
import express from 'express';
import favicon from 'serve-favicon';
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
const port: number = 3000;

app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
const target = path.join(__dirname, '../public', 'index.html')


app.set('view engine', 'html');

app.get('/', (_req, res) => {
  res.send(target)
})

 
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

