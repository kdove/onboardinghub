// The Engineer class inherits properties from Employee.
const Employee = require("./Employee");
module.exports = class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github
  }

  getGithub() {
    return this.github;
  }

  getRole(){
    return this.role;
  }
};