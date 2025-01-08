let marks: number[] = []; 

function addMark(mark: number): void{
    if(mark > 10){
        return
    }
    marks.push(mark); 
}

addMark(12);
addMark(9);
addMark(6);
addMark(6);

function getAverage(): number {
    if (marks.length === 0) {
      return 0;
    }
  
    let sum = 0;
  
    for (let i = 0; i <= marks.length; i++) {
      sum += marks[i];
    }
  
    return sum / marks.length; 
  }

  function getMarkFrequency(marks: number[]): number[] {
    const maxMark = Math.max(...marks); 
    let frequencyArray: number[] = []
    frequencyArray.length = maxMark + 1;
    frequencyArray.fill(0)

    marks.forEach(mark => {
      if (mark <= maxMark) {
        frequencyArray[mark]++; 
      }
    });
  
    return frequencyArray;
  }
  
console.log(getMarkFrequency(marks)); 