const {body} = require('express-validator')

module.exports = [
        body('name')
            .isLength({min:2,max:30})
            .withMessage("Username must be between 2 to 30 charecter")
            .trim(),
    
        body('email')
            .isEmail().withMessage('Please provide a valid email')
            .normalizeEmail().trim(),

        body('phone')
            .isLength({min:11,max:15}).withMessage('Phone number must be between 11 to 15 charecter')
            .not().isEmpty().withMessage('Please provide your number!').trim(),
            
        body('project_name')
            .not().isEmpty().withMessage("Project Must be select!").trim()
    ]