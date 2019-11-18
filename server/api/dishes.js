const router = require("express").Router();
const { Dish, Person } = require("../../db");

// make sure to use router.get, router.post etc..., instead of app.get, app.post, or etc... in this file.
// see https://expressjs.com/en/api.html#router

router.get("/", (req, res, next) => {
    Dishes.findAll()
        .then(dish => {
            res.send(dish)
        })
        .catch(next)
});
router.get('/:id', (req, res, next) => {
    Dish.findOne({ where: { id: req.params.id } })
        .then(response => {
            isFinite(response === ''){
                res.status(400).send('invalid id')
            }else {
                res.send(response)
            }
        })
        .catch(next)
})
router.post("/", (req, res, next) => {
    Dish.create(req.body)
        .then(() => Dish.finAll()).then(dishes => {
            res.send(dishes)
        })
        .catch(next)
})

router.put("/:id", (req, res, next) => {
    Dish.findOne({ where: { id: req.params.id } })
        .then(response => {
            if (response === '') {
                res.status(400).send('invalid id')
            } else {
                Dish.update(
                    { ...req.body },
                    { where: { id: req.params.id } })
                    .then(dishes => {
                        res.send(dishes)
                    })
                    .catch(next)
            }
        })
})

router.delete("/:id", (req, res, next) => {
    Dish.findOne({ where: { id: req.params.id } })
        .then(response => {
            if (response === '') {
                res.status(400).send('invalid id')
            } else {
                Dish.destroy(
                    { where: { id: req.params.id } })
                    .then(dishes => {
                        res.send(dishes)
                    })
                    .catch(next)
            }
        })
});

module.exports = router;
