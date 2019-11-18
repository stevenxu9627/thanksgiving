const router = require("express").Router();
const { Person, Dish } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#routers

router.get("/", (req, res, next) => {
    Person.findAll()
        .then(people => {
            res.send(people)
        })
        .catch(next)
});
router.get("/", (req, res, next) => {
    Person.findAll({
        include: [Dish],
        where: {
            isAttending: true
        }
    })
        .then(people => {
            res.send(people)
        })
        .catch(next)
});
router.post("/", (req, res, next) => {
    Person.create(req.body)
        .then(() => Person.finAll({
            where: { name: req.body.name }
        })).then(people => {
            res.send(people)
        })
        .catch(next)
});
router.put("/:id", (req, res, next) => {
    Person.findOne({ where: { id: req.params.id } })
        .then(response => {
            if (response === '') {
                res.status(400).send('invalid id')
            } else {
                Person.update(
                    { ...req.body },
                    { where: { id: req.params.id } })
                    .then(people => {
                        res.send(people)
                    })
                    .catch(next)
            }
        })

})
router.delete("/:id", (req, res, next) => {
    Person.findOne({ where: { id: req.params.id } })
        .then(response => {
            if (response === '') {
                res.status(400).send('invalid id')
            } else {
                Person.destroy(
                    { where: { id: req.params.id } })
                    .then(people => {
                        res.send(people)
                    })
                    .catch(next)
            }
        })
})

module.exports = router;
