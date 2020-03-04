# onboardinghub
Onboarding-Hub is an onboarding automation app for organizing team members and their properties into visual web pages

# Employee Onboarding Automation

* One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. 

* The method in which code is organized and defined is just as important as the code itself. 


* In this project I will build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.

 
 * testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass.


## Project Specifications

* 1.0. UI CLI.

  I will build a software engineering team generator command line application. 

* 1.1 UI Input Prompts.

  The application will prompt the user for information about the team manager and then information about the team members. 
  
* 1.2. UI Flexibility.
  
  The user can input any number of team members, and they may be a mix of engineers and interns. 
  
* 1.3. This assignment    
  must also pass all unit tests. 
  
* 1.4 HTML File Creation

  When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 
  
* 1.5 User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

## SETTING UP YOUR ENVIORNMENT

* 2.0 Use the [Inquirer npm package](https://github.com/SBoudrias/Inquirer.js/) 

  * to prompt the user for each of the following properties from each user; 
    * email, 
    * id, 
    * and specific information based on their role with the company. 
    * For instance, an intern may provide their school, whereas an engineer may provide their GitHub username.

* This app will run as a Node CLI to gather information about each employee.

* Below is an example of what the application may look like. Remember, the styling may change from time to time and is arbitrary, socompletely it will certainly be unique.

![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)

* In the `Develop` folder, there is a `package.json`, so make sure to `npm install`.

* The dependencies are, [jest](https://jestjs.io/) for running the provided tests, and [inquirer](https://www.npmjs.com/package/inquirer) for collecting input from the user.

* There are also unit tests to help you build the classes necessary.

* This workflow is used in the build process:

1. Run tests
2. Create or update classes to pass a single test case
3. Repeat

*Note to sel: 🎗 Remember, you can run the tests at any time with `npm run test`

* This project will *start with a directory structure as per the following spec:

```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```

### Additional Infomration

* This project uses multiple HTML templates for each user type. For example, the following templates will be used to start:

  * `main.html`

  * `engineer.html`
  
  * `intern.html`
  
  * `manager.html`

* Methods will be programmed with logicical classes. Logical classes will amke testing easier.

* All employees will share a base class of `Employee`, and the properties for this class will be apply to all classes.

* In your HTML template files, I will add a placeholder character/number that helps your program identify where the dynamic markup begins and ends.

## Minimum Requirements Will be Achieved Prior to project comletion

* Functional application.

* GitHub repository with a unique name and a README describing the project.

* User can use the CLI to generate an HTML page that displays information about their team.

* All tests must pass.

### Classes
The project must have the these classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory must all pass.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Roster output

The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member displays the following properties (in no particular order):

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)

## Project Future Release Goals

* Use validation to ensure that the information provided is in the proper expected format.

* Add the application to your portfolio.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!