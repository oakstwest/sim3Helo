require('dotenv').config();
const express = require('express'),
  session = require('express-session'),
  massive = require('massive'),
  axios = require('axios')

const app = express();

const {
  SERVER_PORT,
  CONNECTION_STRING,
  SECRET

} = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
})

app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: true
}))

app.get('/auth/callback', async (req, res) => {
  let {
    user_name,
    password,
    picture,
    sub
  } = resWithUserData.data;
  let db = req.app.get('db');
  let foundUser = await req.app.get('db').find_user_by_id([sub])
  if (foundUser[0]) {
    req.session.user = foundUser[0];
    res.redirect('/#/Dashboard')
  } else {
    let createdUser = await db.create_user([user_name, password, picture])
    req.session.user = createdUser[0];
    res.redirect('/#/Dashboard');
  }
})

app.get('/auth.logout', (req, res) => {
  req.session.destroy();
  res.redirect('http://localhost:3000/');
})

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`)
})

