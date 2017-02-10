let express = require('express');

let app = express();

const PORT = process.env.PORT || 3000;

// Redirection from https for Heroku
app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('dist'));

app.listen(PORT, () => console.log('Server running on port ' + PORT));