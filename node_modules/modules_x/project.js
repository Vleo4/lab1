class Project {
    constructor(name, description, customer) {
        this.name = name;
        this.description = description;
        this.customer = customer;
        this.developers = [];
      }
}

let global_project_list = new Array();

function AddProject(name, description, customer, developers){
    let proj = new Project(name, description, customer);
    proj.developers = developers;
    global_project_list.push(proj);

    return proj;
}

function ProjectsList() {

    console.log("\n" + "List of all projects:");
    
    for (let id = 0; id < global_project_list.length; id++) {
        let proj = global_project_list[id];
        console.log(`Name: ${proj.name}\ndescription: ${proj.description}\ncustomer: ${proj.customer}\ndevelopers: ${proj.developers}\n`);
    }
    console.log();
    return global_project_list;
}

function EditProject (name, new_name, new_description) {

    for (let id = 0; id < global_project_list.length; id++) {

        let proj = global_project_list[id];

        if (proj.name === name){ 
                global_project_list[id].name = new_name;
                global_project_list[id].description = new_description
                return 1;
            }
    }

    return -1;
}


function RemoveProject (name) {

    for (let id = 0; id < global_project_list.length; id++) {

        let proj = global_project_list[id];

        if (proj.name === name){
                global_project_list.splice(id, 1);
                return 1;
             }
    }
    return -1;
}

function SearchProjectsByCustomer(customer) {
    const matchingProjects = global_project_list.filter(project => project.customer === customer);
    return matchingProjects;
}

function SearchProjectsByDeveloper(developer) {
    const matchingProjects = global_project_list.filter(project => project.developers.includes(developer));
    return matchingProjects;
  }


exports.RemoveProject = RemoveProject
exports.EditProject = EditProject;
exports.AddProject = AddProject;
exports.ProjectsList = ProjectsList;
exports.SearchProjectsByCustomer = SearchProjectsByCustomer;
exports.SearchProjectsByDeveloper = SearchProjectsByDeveloper;