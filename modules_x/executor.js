class Executor {
    constructor(name, email) {
        this.name = name;
        this.email = email;
      }
}

let global_executor_list = new Array();

function AddExecutor(name, email){
    let exec = new Executor(name, email);
    global_executor_list.push(exec);

    return exec;
}

function EditExecutor(name, new_name, new_email)
{
    for (let id = 0; id < global_executor_list.length; id++) {

        let exec = global_executor_list[id];

        if (exec.name === name){ 
                global_executor_list[id].name = new_name;
                global_executor_list[id].email = new_email
                return 1;
            }
    }

    return -1;
}

function RemoveExecutor(name)
{
    for (let id = 0; id < global_executor_list.length; id++) {

        let exec = global_executor_list[id];

        if (exec.name === name){
                global_executor_list.splice(id, 1);
                return 1;
             }
    }
    return -1;
}

function SearchExecutor (name, email) {

    for (let id = 0; id < global_executor_list.length; id++) {

        let exec = global_executor_list[id];

        if (exec.name === name &&
            exec.email === email) { 
                console.log(`Executor found: name: ${exec.name}\nemail: ${exec.email}\n`)
                return exec; 
            }
    }
    return -1;
}

function ExecutorList() {
    console.log("\n" + "List of all customers:");
    
    for (let id = 0; id < global_executor_list.length; id++) {
        let exec = global_executor_list[id];
        console.log(`Name: ${exec.name}\nemail: ${exec.email}\n`);
    }
    console.log();
    return global_executor_list;
}

exports.AddExecutor = AddExecutor
exports.RemoveExecutor = RemoveExecutor;
exports.EditExecutor = EditExecutor;
exports.AddExecutor = AddExecutor;
exports.SearchExecutor = SearchExecutor;
exports.ExecutorList = ExecutorList;