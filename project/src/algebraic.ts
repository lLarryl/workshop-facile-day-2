export interface FirstName {
    firstName: string;
}

export interface LastName {
    lastName: string;
}

export type Person = FirstName & LastName;

export const person: Person = {
    firstName: "Vittorio",
    lastName: "Larovere"
}