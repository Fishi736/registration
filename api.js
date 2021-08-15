const express = require('express');
const router = express.Router();
const RegisterCollection = require('./model/user');
const PostCollection = require('./model/post');
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




router.post('/registerUser', (req, res, next) => {
    RegisterCollection.find({ email: req.body.Email }).exec().then(user => {
        if (user.length >= 1) {
            return res.status(409).json({ message: 'User Exists' });
        } else {
            bcrypt.hash(req.body.Password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({ error: err });
                } else {
                    const user = new RegisterCollection({
                        _id: new mongoose.Types.ObjectId(),
                        Firstname: req.body.Firstname,
                        Lastname: req.body.Lastname,
                        Email: req.body.Email,
                        Password: hash
                    });
                    user.save().then(result => {
                        console.log(result);
                        res.status(201).json({ message: 'user registered' })
                    }).catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err
                        })
                    });
                }
            })
        }
    })
});


router.post('/login', (req, res) => {
    RegisterCollection.find({ "Email": req.body.Email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({ msg: 'User Not Found' });
            }
            bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
                if(err) {
                    console.log(err)
                    return res.status(401).json({
                        message: "User Not Found"
                    });
                }
                if(result) {
                    const token = jwt.sign(
                        {
                            Email: user[0].Email,
                            userId: user[0]._id
                        },
                        "secure",
                        {
                            expiresIn: "5m"
                        }
                    );
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    });
                }

            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/getPost', (req, res) => {
    PostCollection.find({}, (err, data) => {
        res.json(data);
        res.status(200);
    });
});


module.exports = router;