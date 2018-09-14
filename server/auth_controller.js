// import bcrypt from 'bcrypt';

// //bcrypt

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds).then(hashedPassword => {
  app.get('db').create_user([username, hashedPassword]).then(() => {
    req.session.user = { username };
    res.json({ username });
  }).catch(error => {
    if (error.message.match(/duplicate key/)) {
      res.status(409).json({ message: "That user already exists." });
    } else {
      res.status(500).json({ message: "An error occurred; for security reasons it can't be disclosed." });
    }
  });
}).catch(error => {
    res.status(500).json({ message: "An error occurred; for security reasons it can't be disclosed." });
});
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    app.get('db').find_user([username]).then(data => {
      if (data.length) {
        bcrypt.compare(password, data[0].password).then(passwordsMatch => {
        if (passwordsMatch) {
          req.session.user = { username };
          res.json({ username });
        } else {
          res.status(403).json({ message: 'Invalid password.' });
        }
      }).catch(error => {
        res.status(500).json({ message: 'An error has occurred; for security reasons it cannot be disclosed.'})
      })
      } else {
        res.status(403).json({ message: 'Unknown user' });
      }
    }).catch(error => {
      console.log('error', error);
      res.status(500).json({ message: "An error occurred; for security reasons it can't be disclosed." });
    });
  });

  app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send();
  })
  
//AUTH0

// app.get(`/auth/callback`, (req, res) => {
//     const payload = {
//         client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
//         client_secret: process.env.AUTH0_CLIENT_SECRET,
//         code: req.query.code,
//         grant_type: 'authorization code',
//         //If redirect is not working check to see if there is a certificate, if there is the
//         //redirect needs to be https
//         redirect_uri: `http://${req.headers.host}/auth/callback`
//     }
//     function tradeCodeForAccessToken(){
//         return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload)
//     }

//     function tradeAccessTokenForUserInfo(accessTokenResponse){
//         const accessToken = accessTokenResponse.data.access_token;
//         return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo/?access_token=${accessToken}`);
//     }

//     function storeuserInfoInDatabase(response){
//         const auth0Id = response.data.sub;
//         const db = req.app.get('db');
//         return db.get_user(auth0Id).then(users => {
//             if(users.length){
//                 const user = users[0];
//                 req.session.user = user;
//                 res.redirect('/home');
//             } else {
//                 const userArray = [
//                     auth0Id,
//                     response.data.name,
//                     response.data.email,
//                     response.data.picture
//                 ];
//                 return db.create_user(userArray).then(newUser => {
//                     req.session.newUser;
//                     res.redirect('/home')
//                 }).catch(error => {
//                     consol.log('Error in the db.create_user', error)
//                     res.status(500).send('Unexpected error')
//                 })
//             }
//         }).catch(error => {
//             console.log ('Error in the db.create_user', error)
//             res.status(500).send('Unexpected error')
//         })
//     }

//     tradeCodeForAccessToken()
//     .then(tradeAccessTokenForUserInfo)
//     .then(storeuserInfoInDatabase)
//     .catch(error => {
//         console.log('Error in auth/callback', error)
//         res.status(500).send('Unexpected error')
//     })
// })