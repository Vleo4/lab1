const zxy = require("./project")
const zxz = require("./customer")
const zxx = require("./executor")

exports.AddProject = zxy.AddProject
exports.ProjectList = zxy.ProjectsList
exports.RemoveProject = zxy.RemoveProject
exports.EditProject = zxy.EditProject
exports.SearchProjectsByCustomer = zxy.SearchProjectsByCustomer
exports.SearchProjectsByExecutor = zxy.SearchProjectsByDeveloper

exports.RemoveCustomer = zxz.RemoveCustomer
exports.EditCustomer = zxz.EditCustomer
exports.AddCustomer = zxz.AddCustomer
exports.SearchCustomer = zxz.SearchCustomer
exports.CustomerList = zxz.CustomerList

exports.RemoveExecutor = zxx.RemoveExecutor
exports.EditExecutor = zxx.EditExecutor
exports.AddExecutor = zxx.AddExecutor
exports.SearchExecutor = zxx.SearchExecutor
exports.ExecutorList = zxx.ExecutorList

