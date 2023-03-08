const mod = require('modules_x')

console.log("LAB7")

let c1 = mod.AddCustomer("goblin", "ffdsfdsfds@gmail.com")
let c2 = mod.AddCustomer("SoftServe", "ggggggggggwp@gmai.com")
let c3 = mod.AddCustomer("LPNU", "admin@lpnu.ua")
let c4 = mod.AddExecutor("vleo", "vpeleshchyshyn@gmail.com")

mod.CustomerList()
mod.SearchCustomer("goblin", "ffdsfdsfds@gmail.com")
mod.RemoveCustomer("LPNU")
mod.CustomerList()

let e1 = mod.AddExecutor("vleo", "vpeleshchyshyn@gmail.com")
let e2 = mod.AddExecutor("jfdl", "phantomassasin2004@gmai.com")
let e3 = mod.AddExecutor("v3tal1k", "v3tal1k@lpnu.ua")
let e4 = mod.AddExecutor("TheReX", "iamtybik@gmail.com")
let e5 = mod.AddExecutor("Team A", "teatat@gmail.com")

mod.ExecutorList()
mod.SearchExecutor("jfdl", "phantomassasin2004@gmai.com")
mod.RemoveExecutor("TheReX")
mod.ExecutorList()


let p1 = mod.AddProject("Brainstorming", "Update your brain!", c4.name, [e1.name,e2.name,e3.name])
let p2 = mod.AddProject("Proza", "Only app that you need as writer", c2.name, [e5.name])
let p3 = mod.AddProject("LEPENEU", "best university", "LPNU", ["LPNU"])
let p4 = mod.AddProject("GoblinWars", "battle", c1.name, [e1.name])

mod.ProjectList()

mod.EditProject("LEPENEU", "LPNU", "The best university!")

mod.ProjectList()
mod.RemoveProject("LPNU")
mod.ProjectList()

const CustomerProjects = mod.SearchProjectsByCustomer(c1.name);
console.log(`Projects for ${c1.name}:`);
CustomerProjects.forEach(project => console.log(project.name));

console.log()

const ExecutorProjects = mod.SearchProjectsByExecutor(e1.name);
console.log(`Projects for ${e1.name}:`);
ExecutorProjects.forEach(project => console.log(project.name));