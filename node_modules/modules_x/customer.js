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


