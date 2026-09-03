const express = require('express');
const { createArticle, updateArticle } = require('../validators/article.validator');
const validateRequest = require('../utils/validateRequest');
const asyncHandler = require('../utils/asyncHandler');
// ...existing code...

router.post(
    '/articles',
    createArticle,
    (req, res, next) => validateRequest(req, next),
    asyncHandler(async (req, res) => {
        // ...existing handler logic...
    })
);

router.put(
    '/articles/:id',
    updateArticle,
    (req, res, next) => validateRequest(req, next),
    asyncHandler(async (req, res) => {
        // ...existing handler logic...
    })
);

// ...existing code...
