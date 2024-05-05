const Joi = require('joi');
const sanitizeHtml = require('sanitize-html')


//Schema for filter validation
const cocktailFilterSchema = Joi.object({
    name:Joi.string()
            .trim()
            .min(1)
            .max(100)
            .pattern(/^[\p{L}0-9 ]+$/u)
            .optional()
})

function validateFilterInput(name){
    if (!name) return name;

    const { error, value } = cocktailFilterSchema.validate({ name });
    if (error){
        throw new Error(error.details[0].message)
    }
    return value.name;
}

//Options on what gets sanitized
const sanitizeOptions = {
    allowedTags: [],
    allowedAttributes: {}
}

const sanitizeFilterInput = (input) => {
    if (!input) return input;
    return sanitizeHtml(input, sanitizeOptions)
} 

module.exports = {validateFilterInput, sanitizeFilterInput};