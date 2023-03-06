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

function Projects_List() {

    console.log("\n" + "List of all projects:");
    
    for (let id = 0; id < global_project_list.length; id++) {
        let proj = global_project_list[id];
        console.log(`Name: ${proj.name}\ndescription: ${proj.description}\ncustomer: ${proj.customer}\ndevelopers: ${proj.developers}\n`);
    }
    console.log();
    return global_project_list;
}



exports.AddProject = AddProject;
exports.Projects_List =Projects_List;