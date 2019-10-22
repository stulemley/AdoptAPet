const mongoose = require("mongoose");
const Pet = mongoose.model("Pet");

class PetController {
    GetAll(req, res) {
        Pet.find().sort('type').exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    }
    Create(req, res) {
        // console.log(req.body)
        let pet = new Pet(req.body);
        pet.save()
            .then(() => res.json({ status: "ok" }))
            .catch(err => res.json(err));
    }
    GetOne(req, res) {
        Pet.findOne({ _id: req.params._id })
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    }
    Update(req, res) {
        Pet.findOneAndUpdate({ _id: req.params._id }, req.body, { runValidators: true })
            .then(() => res.json({ status: "ok" }))
            .catch(err => res.json(err));
    }
    Delete(req, res) {
        Pet.remove({ _id: req.params._id })
            .then(() => res.json({ status: "ok" }))
            .catch(err => res.json(err));
    }
}

module.exports = new PetController();