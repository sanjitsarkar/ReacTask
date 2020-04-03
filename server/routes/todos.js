const router = require('express').Router();
let Todos = require('../model/todo.model');

router.route('/').get((req, res) => {
    Todos.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Erros: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const desc = req.body.desc;
    const priority = req.body.priority;
    const date = req.body.date;
    const newTodo = new Todos({
        title,
        desc,
        priority,
        date

    });
    newTodo.save()
        .then(users => res.json('Todo Added!'))
        .catch(err => res.status(400).json('Erros: ' + err));
});
router.route('/:id').get((req, res) => {
    Todos.findById(req.params.id)
        .then((todo) => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));



});
router.route('/:id').delete((req, res) => {
    Todos.findByIdAndDelete(req.params.id)
        .then(() => res.json("Taks Deleted Successfully!"))
        .catch(err => res.status(400).json('Error: ' + err));



});
router.route('/update/:id').post((req, res) => {
    Todos.findById(req.params.id)

        .then((todos) => {
            todos.title = req.body.title;
            todos.desc = req.body.desc;
            todos.priority = req.body.priority;
            todos.date = Date(req.body.date);
            todos.save()
                .then(() => res.json("Updated!"))
                .catch(err => res.status(400).json('Err: ' + err));

        })
        .catch(err => res.status(400).json('Error: ' + err));



});

module.exports = router;