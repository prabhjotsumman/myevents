const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const User = require('./Models/User');
const Event = require('./Models/Event');
const config = require("../config.json");
const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute = `mongodb://${config.mlabUser}:${config.mlabPass}@ds243897.mlab.com:43897/myevents`;
// var dbRoute = 'mongodb://127.0.0.1/myevents';
// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

router.post('/getUser', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    User.find({ email }, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        if (data[0].password === password) {
            return res.json({ success: true, status: "authenticated", loggedin: true });
        }
    });
});

router.post('/updateUser', (req, res) => {
    const { id, update } = req.body;
    User.findByIdAndUpdate(id, update, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/deleteUser', (req, res) => {
    const { id } = req.body;
    User.findByIdAndRemove(id, (err) => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});

router.post('/putUser', (req, res) => {
    let data = new User();

    // const { name, email, organisationName, mobile, password } = req.body;
    // console.log(name, email, organisationName, mobile, password);
    // if ((!name) || !email) {
    //     return res.json({
    //         success: false,
    //         error: 'INVALID INPUTS',
    //     });
    // }
    data = Object.assign(data, req.body);
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.post('/addNewEvent', (req, res) => {
    let data = new Event();
    console.log(req.body);
    data = Object.assign(data,req.body);
    // data = {data, ...req.body};
    console.log("Daa ",data);
    data.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.get('/getAllEvents', (req, res) => {
    Event.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data });
    });
});

// append /api for our http requests
app.use('/', router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));