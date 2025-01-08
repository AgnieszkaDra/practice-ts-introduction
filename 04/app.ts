enum Gender {
    Mężczyzna,
    Kobieta, 
    Inne
}

let user: [name: string, surname: string, age: number, gender: Gender] = [
    "Agnieszka",
    "Dragańczyk",
    36,
    Gender.Kobieta
  ];
  
function printUserInfo(user: [string, string, number, Gender]): string {
    const [name, surname, age, gender] = user;
    return `${name} ${surname} - ${Gender[gender]}, lat ${age}`;
  }
  
console.log(printUserInfo(user));
 