import {ClassGetFullName, funcGetFullName} from './self-documenting';

const firstName = 'Hoang Van';
const lastName = 'Hoa';

const staffNameFunc = funcGetFullName(firstName, lastName);
const staffNameClass = new ClassGetFullName(firstName, lastName);

console.log('funcGetFullName:', staffNameFunc);
console.log('ClassGetFullName:', staffNameClass.funcGetFullName());


