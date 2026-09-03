const { body } = require('express-validator');

const createArticle = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').isLength({ min: 10 }).withMessage('Content must be at least 10 characters long'),
];

const updateArticle = [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('content').optional().isLength({ min: 10 }).withMessage('Content must be at least 10 characters long'),
];

module.exports = { createArticle, updateArticle };
