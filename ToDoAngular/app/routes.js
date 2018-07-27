// app/routes.js

// load the todo model

const Todo = require('./controller/todo');
// expose the routes to our app with module.exports
module.exports = (app) => {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', Todo.get);

    // create todo and send back all todos after creation
    app.post('/api/todos', Todo.post);

    // delete a todo
    /*app.delete('/api/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            Todo.find(function(err, todos) {
                if (err)
                    res.send(err)
                res.json(todos);
            });
        });
    });*/
};