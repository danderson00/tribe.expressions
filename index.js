﻿var keyPath = require('./keyPath'),
    evaluate = require('./evaluate'),
    apply = require('./apply'),
    create = require('./create');

module.exports = {
    evaluateKeyPath: keyPath,
    setKeyPath: keyPath.set,
    evaluate: evaluate,
    apply: apply,
    create: create
};