
const student = {
    fistName : 'Tushar',
    lastName : 'Ahmed',
    id : 12345,
    Marks :100,
    GetMarks : function(SMarks){
     this.Marks = this.Marks - SMarks ;
     return this.Marks;
    },
    GetFullName : function(){
        console.log(this.fistName,this.lastName);
    },
    tutionFee : 10000,
    tutionFeeDue : function(amount){
        this.tutionFee = this.tutionFee - amount ;
        return this.tutionFee ;
    }
}
const student2 = {
    name : 'jodhu',
    tutionFee : 20000

}

const student3 = {
    name : 'kalam',
    tutionFee : 25000,
}
// student.GetFullName();
// student.GetMarks(20);
// console.log(student.Marks);
// student.tutionFeeDue(2000);
// console.log(student.tutionFee);

const newStudent = student.tutionFeeDue.bind(student2);
newStudent(1000);
console.log(student2.tutionFee);

const student3due = student.tutionFeeDue.bind(student3);
student3due(10000);
console.log(student3.tutionFee)



// const normalPerson = {
//     fastName : 'Nazim',
//     lastName : 'Uddin',
//     salary : 15000,
//     fullName : function(){
//        console.log(this.fastName,this.lastName);
//     },
//     getSalary : function(amount){
//         this.salary = this.salary - amount
//         return this.salary
//     }
// }

// normalPerson.getSalary(100);
// console.log(normalPerson.salary)
// console.log(normalPerson.fullName())