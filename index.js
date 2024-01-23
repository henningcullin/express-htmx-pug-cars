const express = require('express');
const app = express();


require('pug');
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

const {car} = require('./controllers');

let cars = [
    {id:'RHS623', brand:'Saab', model:'9-7X'},
    {id:'GJE205', brand:'Volvo', model:'740'},
    {id:'WIO528', brand:'Polestar', model:'2'},
    {id:'ACJ258', brand:'Volkswagen', model:'Passat'}
]


app.listen(80, () => {
    console.log('http://localhost');
})



app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cars', (req, res) => {
    res.render('cars', {cars});
});



app.post('/cars', car.create);

app.delete('/cars/:id', car.destroy);


/* app.put('/cars', update_car); */