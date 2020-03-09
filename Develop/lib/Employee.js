// TODO: Write code to define and export the Employee class
odule.exports =  class Employee {

    constructor(name, id, email) {
      this.name = name;
      this.email = email;
      this.id = id;    
    }
  
    getName(){
      return this.name;
    }
  
    getEmail(){
      return this.email;
    }
  
    getId(){
      return this.id;
    }
  
    getRole(){
      return "Employee";
    }
  }