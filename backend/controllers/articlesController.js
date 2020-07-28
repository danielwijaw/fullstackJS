const db = require("../config/db")
const knex = require('knex')(db.connection)

module.exports = {
    index: async function(req, res) {
        try {
            let articles = await knex('articles')
            res.send(articles)
        } catch (error) {
            console.log(error)
            res.send({success: false, message: error})
        }
    },
    row: async function(req, res){
        try {
            let article = await knex('articles').where('id', req.params.id).then(function(rows){ return rows[0] })
            res.send(article)
        } catch (error) {
            console.log(error)
            res.send({success: false, message: error})
        }
    },
    store: async function(req, res){
        try {
            let article = await knex('articles').insert(req.body)
            res.send({success: true, message: 'Article created successfully!'})
        } catch (error) {
            console.log(error)
            res.send({success: false, message: error})
        }
    },
    update: async function(req, res){
        try {
            let article = await knex('articles').where('id', req.params.id).update(req.body)
            res.send({success: true, message: 'Article updated successfully!'})
        } catch (error) {
            console.log(error)
            res.send({success: false, message: error})
        }
    },
    destroy: async function(req, res){
        try {
            let article = await knex('articles').where('id', req.params.id).del()
            res.send({success: true, message: 'Article deleted successfully!'})
        } catch (error) {
            console.log(error)
            res.send({success: false, message: error})
        }
    }
}