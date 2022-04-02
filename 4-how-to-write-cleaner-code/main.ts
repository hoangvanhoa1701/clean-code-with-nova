//////// Avoid Disinformation – hp, aix, sco, gm, vn
//////// Avoid small variations in names – s1, s2
//////// Meaningful Distinctions
//////// Meaningful names
// ❌
let d;
// ✅
let daysSinceModification;


//////// Pronounceable Names
// ❌
let modymdhms;
// ✅
let modificationTimestamp;


//////// Searchable Names – MAX_DAYS instead of 999
// ✅
const MAX_DAYS = 999;

// NOTE: use "const" instead of "let" or "var"
// const userInfo = {
//     name: 'Hoa',
//     age: 24
// }
// userInfo.name = 'Hoa f*ck boy';
// userInfo = {
//     name: 'Hoa f*ck boy',
//     age: 24
// }
// console.log(userInfo);

// const numbers = [1,2,3,4,5];
// numbers.push(6);
// addNumber ()
// numbers = [7, 8, 9];
// console.log(numbers);

//////// Class names should have noun names
// ✅
class Account {} // Customer, Manager, Info,...

//////// Functions should have verb names
// ✅
function getPage() {} // deletePage, postPayment, save, set, is,..

//////// Data fields are nouns
// ❌
let run;
// ✅
let fullName;


//////// Too much argument (input) in a function
// ❌ The arguments > 3
// ❌ Should not change the argument (input)
// ✅ The arguments < 3


//////// The argument (input)
// ✅ Should check the argument (input) and return error code


//////// The argument (output)
// ❌ Should avoid return the argument (output) => ref


//////// Avoid duplication 👬👬👬👬👬👬👬👬👬👬👬
// ✅ IDE webstorm support


/////// A function => a task
// ❌
// public class UserValidator {
//     private Cryptographer cryptographer;
//     public boolean checkPassword(String userName, String password) {
//         User user = UserGateway.findByName(userName);
//         if (user != User.NULL) {
//             String codedPhrase = user.getPhraseEncodedByPassword();
//             String phrase = cryptographer.decrypt(codedPhrase, password);
//             if ("Valid Password".equals(phrase)) {
//                 Session.initialize();
//                 return true;
//             }
//         }
//         return false;
//     }
// }


//////// class, service, component
// ✅ Consider limiting files to 400 lines of code.


//////// function
// ✅ Do define small functions
// ✅ Consider limiting to no more than 75 lines.


//////// Should not too much comment, comment use to make color 😒
// ❌
// Check to see if the employee is eligible for full benefits
// if ((employee.flags & HOURLY_FLAG) && (employee.age > 65))
// ✅ Explain the meaning = code
// if (employee.isEligibleForFullBenefits())

// ✅ Explain purpose
// ✅ Copyright (C), license, author, legal
// ✅ Provide more information
// ✅ Warning amplification or underline
// Don't run unless you have some time to kill
// public void _testWithReallyBigFile() {
//     writeLinesToFile(10000000);
//     response.setBody(testFile);
//     response.readyToSend(this);
//     String responseString = output.toString();
//     assertSubString("Content-Length: 1000000000", responseString);
//     assertTrue(bytesSent > 1000000000);
// }

// ✅ TODO comments
// ✅ Public APIs

// ❌ Comment histories
// ❌ HTML comment

//////// coding formats, coding conventions
// ✅ prettier, editorconfig, tslint, eslint,...
// ✅ https://github.com/airbnb/javascript
// ✅ BEM, OOCSS
// ✅ https://github.com/airbnb/css


//////// git conventions
// ✅ https://github.com/angular/angular/blob/master/CONTRIBUTING.md



