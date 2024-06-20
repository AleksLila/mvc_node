const userModel = require('./model');

module.exports = {
    getAll: (req, res) => {
        return res.render('users.hbs', {
            users: userModel.getAll
        })
    },
    create: (req, res) => {
        try{
                
        const { age, username} = req.body;
        if(!age || !username){
            throw new Error('Не вказано username або age');
        }
        userModel.create({ age, username})
        return res.redirect('/users')
    } catch (e) {
        return res.render('users-error.hbs',{
            message: e.message
        });
    }
    },
    removeById: (req, res) => {
        try {
            const id = req.query.id;
            if(!id){
                throw new Error('id не вказано');
            }
            userModel.removeById({ id })

            res.render('users-view.hbs', {
                users: userModel.getAll()
            })
        } catch (e) {
            return res.render('users-error.hbs', {
                message: e.message
            });
        }
    }
}