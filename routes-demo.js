const getAuthenticated = require('@octokit/routes/routes/api.github.com/users/get-authenticated')
const addLabelsDotCom = require('@octokit/routes/routes/api.github.com/issues/add-labels')
const addLabelsGHES2_16 = require('@octokit/routes/routes/ghe-2.16/issues/add-labels')
const addLabelsGHES2_15 = require('@octokit/routes/routes/ghe-2.15/issues/add-labels')

console.log(addLabelsDotCom)
console.log(addLabelsGHES2_16)
console.log(addLabelsGHES2_15)
