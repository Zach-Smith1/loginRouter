const { arMiddleware, cookieParser, fullLogout, requireLogin } = require('@authrocket/authrocket-middleware');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// Other middleware and routes...
app.use(cors());
app.use(cookieParser())
app.use(arMiddleware({
  authrocket: {
    loginrocketUrl: 'https://withered-crater-7ae4.e2.loginrocket.com/',
    // optional[2][3]
    // jwtKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2ci9UjEiRO27GRcFsJgFn2qN6F6+WDQ7rutmuk7TR9XA0a8Bpaq+On7v57mZPIMeKxpjYos7t6Cd6+f2WKfUM58LQU6SE6zmaB0tDw72adLF1Q8NQ/c+thyA8Ic3AQ105Xk6gUD9nsMAg6a9qJftmR4bJT0nOP3ks4EemdEIY1PAvUY1HjzBDywVLXwQK/11FUYMuKxPoSxUHNdtUOGXJOWz1122ec5P+BrNt94e1520/SpfX5tm7WzhrKQ257xswLwlOF4DqiZitYXvSoKyAlsZHKphB6sMNDv5pXNYqP39caLMw428zQQGjx3z/AzB/MR8iGRLXK5/Xfc80mdloQIDAQAB'
  }
}))
app.use(requireLogin)
app.use('/logout', fullLogout)

// Route for the homepage
app.get('/', (req, res) => {
  res.redirect('https://mybudgeter-e8d85af39cf4.herokuapp.com/')
  // res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
