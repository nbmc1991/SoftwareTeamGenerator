const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [];

function start() {


    function createUser() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'typeofuser',
                message: 'What type of user would you like to create?',
                choices: ['Manager','Engineer', 'Intern', 'None']
            }
        ]).then(choice => {
            switch (choice.typeofuser) {
                case 'Manager':
                    createManager();
                    break;

                case 'Engineer':
                    createEngineer();

                    break;
                case 'Intern':
                    createIntern();
                    break;
                default: teamBuilder()


            }
        })
    }

    function createManager() {

        inquirer.prompt([
            {
                type: 'input',
                name: 'managername',
                message: 'What is the managers name?',
        
            },
            {
                type: 'input',
                name: 'managerid',
                message: 'What is the managers ID?',
            },
            {
                type: 'input',
                name: 'manageremail',
                message: 'What is the managers email address?',
                validate: function (manageremail){
                    var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(manageremail)
                    if(valid){
                        return true;

                    }else {
                        return "Please enter valid email input";
                    }
                }

            },
            {
                type: 'input',
                name: 'managerofficenum',
                message: 'What is the managers office number?',
            }

        ]).then(userResponse => {
            const manager = new Manager(userResponse.managername, userResponse.managerid, userResponse.manageremail, userResponse.managerofficenum);
            teamMembers.push(manager);
            // console.log(teamMembers);
            createUser();
        })

        
    }
   

    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engname',
                message: 'What is the engineers name?'

            },
            {
                type: 'input',
                name: 'engid',
                message: 'What is the engineer ID?',

            },
            {
                type: 'input',
                name: 'engemail',
                message: 'What is the engineer email address?',
                validate: (engemail)=>{ 
                    var valid =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(engemail);
                    if(valid){
                        return true;
                    }else{
                        return 'Please enter an email address';
                    }

                }

            },
            {
                type: 'input',
                name: 'enggithub',
                message: 'What is the engineer GitHub username ?',

            }

        ]).then(userResponse => {
            const engineer = new Engineer(userResponse.engname, userResponse.engid, userResponse.engemail, userResponse.enggithub);
            teamMembers.push(engineer);
            // console.log(teamMembers);
            createUser();
        })
       

    }

    

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internname',
                message: 'What is the interns name?'

            },
            {
                type: 'input',
                name: 'internid',
                message: 'What is the interns ID?',

            },
            {
                type: 'input',
                name: 'internemail',
                message: 'What is the interns email address?',

            },
            {
                type: 'input',
                name: 'internschool',
                message: 'What is the interns school?',

            }

        ]).then(userResponse => {
            const intern = new Intern(userResponse.internname, userResponse.internid, userResponse.internemail, userResponse.internschool);
            teamMembers.push(intern);
            // console.log(teamMembers);
            createUser();
        })

        
        
    }

function teamBuilder (){
    if(!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync( OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,render(teamMembers),'utf-8');
}





    createUser();
}
start();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
