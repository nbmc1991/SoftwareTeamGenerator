// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require ('./Employee');

class Enginner extends Employee {
    constructor (username){
        super(norma, 911, 'nbmc1991');
        this.username = username ;
    }

    getGithub(){
        return this.username;
    }

    getRole(){
        return 'Engineer';
    }


}
getGithub();

