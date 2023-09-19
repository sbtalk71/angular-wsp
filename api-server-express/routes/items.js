// import required essentials
const express = require('express');
// create new router
const router = express.Router();
// create a JSON data array
let data = [
    {empId:100,name:'Shantanu',city:'Hyderabad',salary:78000},
    {empId:101,name:'Ranga',city:'Bangalore',salary:78000},
    {empId:102,name:'Joseph',city:'Bangalore',salary:78000},
    {empId:103,name:'Pretham',city:'Hyderabad',salary:78000},
    {empId:104,name:'Raja',city:'Chennai',salary:78000},
    {empId:105,name:'Kirthi',city:'Chennai',salary:78000},
    {empId:106,name:'Subhash',city:'Hyderabad',salary:78000},
    {empId:107,name:'Murthy',city:'Bangalore',salary:78000},
    {empId:108,name:'Kiran',city:'Chennai',salary:78000},
    {empId:109,name:'Puran',city:'Hyderabad',salary:78000}
];

// HTTP methods ↓↓ starts here.

// READ
// this api end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// READ
// this api end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.empId === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// CREATE
// this api end-point add new object to item list
// that is add new object to `data` array
router.post('/', function (req, res) {
    
    // create an object of new Item
    let newItem = {
        empId: req.body.empId, // generated in above step
        name: req.body.name, // value of `title` get from POST req
        city: req.body.city, // generated in above step
        salary: req.body.salary // default value is set to false
    };

    // push new item object to data array of items
    data.push(newItem);

    // return with status 201
    // 201 means Created. The request has been fulfilled and 
    // has resulted in one or more new resources being created. 
    res.status(201).json(newItem);
});

// UPDATE
// this api end-point update an existing item object
// for that we get `id` and `title` from api end-point of item to update
router.put('/:id', function (req, res) {
    // get item object match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {
        let updated = {
            empId: req.body.empId, // generated in above step
        name: req.body.name, // value of `title` get from POST req
        city: req.body.city, // generated in above step
        salary: req.body.salary
        };

        // find index of found object from array of data
        let targetIndex = data.indexOf(found);

        // replace object from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

// DELETE
// this api end-point delete an existing item object from
// array of data, match by `id` find item and then delete
router.delete('/:id', function (req, res) {
    // find item from array of data
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        // if item found then find index at which the item is
        // stored in the `data` array
        let targetIndex = data.indexOf(found);

        // splice means delete item from `data` array using index
        data.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

// module.exports is an object included in every JS file of Node.js
// application, whatever we assign to module.exports will be exposed as a module. 
module.exports = router;