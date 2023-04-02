const User = require('./services/routes/model/models');


exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            msg: "Body can not be empty"
        })
    }

    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        role: req.body.role
    })

    newUser
        .save()
        .then(data => {
            // res.send(data);
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                msg: err.message || "some error occur while creating"
            })
        })
}

exports.find = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;
        console.log(id)
        User.findById(id)
            .then(data => {
                console.log(data)
                res.send(data);
            })
            .catch(err => {
                res.send({ msg: "some error" });
            })
    } else {
        User.find().then(user => {
            res.send(user);
        }).catch(err => {
            res.status(500).send({ msg: err.message || "some error is occuring while retrieving the data" })
        })
    }
}

exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({ msg: "User can not empty" });
    }

    const id = req.params.id;
    console.log(id);
    console.log(req.body)
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    msg: "Sorry data is not available"
                })
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.send({ msg: err.message || "some error occuring while updating" })
        })

}


exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.send({ msg: "data can not be deleted" });
            } else {
                res.send({ msg: "User was deleted" })
            }
        })
        .catch(err => {
            res.send({ msg: err.message || "some error occur while deleting" });
        })
}
