// JavaScript source code
let user = {
    firstName: "BLESSING",
    lastName: "BAYODE",
    email: "blessing.bayode@ekitidigitalskillacademy.com",
    dob: {
        date: 28,
        month: 'February'
    },
    course_info: {
        Java: true,
        html: true,
        css: true,
        python: false,
        javascript: false,
        numberOfLanguages: 5
    }
}
let statements = "Good day!\n";
let statement =statements.concat('I\'m ', user.lastName, ' ', user.firstName, '!\n\n')
statement += 'I can write ' + user.course_info.numberOfLanguages + ' languages.\n\nSend me an email on '
    + user.email + ' and celebrate with me on ' + user.dob.date + ' ' + user.dob.month + '.'

console.log(statement)