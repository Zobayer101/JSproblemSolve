function calculateFinalScore(obj) {
  if (
    typeof obj.name == "string" &&
    obj.testScore <= 50 &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily == "boolean"
  ) {
    if (obj.isFFamily) {
      return( obj.testScore + obj.schoolGrade + 20)>=80?true:false;
    } else {
      return (obj.testScore + obj.schoolGrade)>=80?true:false;
    }
  } else {
    return "Invalid Input";
  }
}

let obj = { name: "Rajib", testScore: 50, schoolGrade: 30, isFFamily: false };

let data=calculateFinalScore(obj);
console.log(data)