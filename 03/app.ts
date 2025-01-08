let firstName: string = "Agnieszka";
let age: number = 36;
let isStudent: boolean = true;
let empty: 0 | null = 0;
let notDefined: string | undefined = ''


function getBasicTypes(): object {
  return {
    firstName,
    age,
    isStudent,
    empty,
    notDefined,
  };
}

console.log(getBasicTypes());