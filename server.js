const express = require('express');

const port = process.env.PORT || 3000
var app = express();

/*MIDDLEWARES*/
app.set('view engine', 'pug');
app.use(express.static(__dirname+'/public'));
app.use((req, res, next) => {
    var now = new Date().toString()
    console.log('Now: ', now)
    // console.log(res)
    next()
})
// app.use((req, res, next) => {
//     res.render('maintenance.pug', {
//         message: 'Site under Maintenance'
//     })
// })

/*ROUTES*/
app.get('/', (req, res) => {
    res.render('home.pug', {
        title: 'Home Page',
        heading: 'Home',
        message: 'This is home',
    })
});

app.get('/about', (req, res) => {
    res.render('about.pug', {
        title: 'About Page',
        heading: 'About Page',
        message: 'Some text Here',
    })
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to fetch the request!!'
    })
})

/*PORT*/
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`)
});
