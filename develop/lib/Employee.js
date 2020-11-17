// TODO: Write code to define and export the Employee class
class Employee{
constructor (name, id, email,) {
    this.name = name;
    this.id = id;
    this.email = email;
    
    // this.getName = () => console.log(`Name: ${this.name}`);
    // //method which get the ID
    // this.getId = () => console.log(`ID: ${this.id}`);
    // //method which get the EMAIL
    // this.getEmail = () => console.log(`Email: ${this.email}`);
    // //method displays ROLE in this case is EMPLOYEE ROLE
    // this.getRole = () => console.log(`Role: Employee`);
}

getName () {
    return this.name;
}

getId(){
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return 'Employee';
}






}

const newEmp = new Employee('norma', 911,);
newEmp.getName();
newEmp.getId();
newEmp.getEmail();
newEmp.getRole();


module.exports = Employee;


// const employee = new Employee("norma", e911pv, nbmc1991);
// console.log(employee)

// employee.getName();
// employee.getId();
// employee.getEmail();

