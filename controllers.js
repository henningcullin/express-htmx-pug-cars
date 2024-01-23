module.exports = {car: {get, get_all, create, destroy, update}};

function get() {

}


function get_all() {

}


function create(req, res) {
    const id = 'id_'+Date.now();
    const {brand, model} = req.body;

    const car = {id, brand, model};
    cars.push(car);

};


function destroy(req, res) {
    const id = req.params.id;

    cars = cars.filter(car => car.id != id);

    res.status(200).end();
}

function update() {
    
}
