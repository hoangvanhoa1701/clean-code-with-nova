export function funcGetFullName(firstName: string, lastName: string): string {
    // const fullName = firstName + ' ' + lastName;
    // return fullName;

    return firstName + ' ' + lastName;
}

export class ClassGetFullName {
    private readonly firstName: string = '';
    private readonly lastName: string = '';

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public funcGetFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
};
