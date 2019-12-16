const questions = require('express').Router()
const { QuestionController } = require('../controllers')
const { authenticate, authorizeQuestion } = require('../middlewares/auth')

questions.get('/', QuestionController.getAllQuestions)
questions.get('/:id', QuestionController.getOneQuestion)

questions.use(authenticate)
questions.post('/', QuestionController.postQuestion)

questions.use('/:id', authorizeQuestion)
questions.patch('/:id', QuestionController.editQuestion)

module.exports = questions
