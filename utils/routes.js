const Pets = require("../controllers/pets");

module.exports = function(app) {
    app.get("/api/pets", Pets.GetAll);
    app.post("/api/new", Pets.Create);
    app.get("/api/pets/:_id", Pets.GetOne);
    app.put("/api/pets/:_id", Pets.Update);
    app.delete("/api/pets/:_id", Pets.Delete);
}