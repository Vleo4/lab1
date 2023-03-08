class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
      }
}

let global_customer_list = new Array();

function AddCustomer(name, email){
    let cust = new Customer(name, email);
    global_customer_list.push(cust);

    return cust;
}

function EditCustomer(name, new_name, new_email)
{
    for (let id = 0; id < global_customer_list.length; id++) {

        let cust = global_customer_list[id];

        if (cust.name === name){ 
                global_customer_list[id].name = new_name;
                global_customer_list[id].email = new_email
                return 1;
            }
    }

    return -1;
}

function RemoveCustomer(name)
{
    for (let id = 0; id < global_customer_list.length; id++) {

        let cust = global_customer_list[id];

        if (cust.name === name){
                global_customer_list.splice(id, 1);
                return 1;
             }
    }
    return -1;
}

function SearchCustomer (name, email) {

    for (let id = 0; id < global_customer_list.length; id++) {

        let cust = global_customer_list[id];

        if (cust.name === name &&
            cust.email === email) { 
                console.log(`Customer found: name: ${cust.name}\nemail: ${cust.email}\n`)
                return cust; 
            }
    }
    return -1;
}

function CustomerList() {
    console.log("\n" + "List of all customers:");
    
    for (let id = 0; id < global_customer_list.length; id++) {
        let cust = global_customer_list[id];
        console.log(`Name: ${cust.name}\nemail: ${cust.email}\n`);
    }
    console.log();
    return global_customer_list;
}

exports.RemoveCustomer = RemoveCustomer;
exports.EditCustomer = EditCustomer;
exports.AddCustomer = AddCustomer;
exports.SearchCustomer = SearchCustomer;
exports.CustomerList = CustomerList;