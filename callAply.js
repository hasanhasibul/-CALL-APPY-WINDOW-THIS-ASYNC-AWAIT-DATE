
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


// we can use apply function 

console.log(student3);
student.tutionFeeDue.call(student3,[2000]);
console.log(student3.tutionFee);

console.log(student2);
student.tutionFeeDue.call(student2,[2000]);
console.log(student2.tutionFee);

// we can use call function 

// console.log(student2);
// student.tutionFeeDue.call(student2,2000); // here perameter separat with coma
// console.log(student2.tutionFee);

// console.log(student3);
// student.tutionFeeDue.call(student3,2000);
// console.log(student3.tutionFee);

// normally we can use 

// student.GetFullName();
// student.GetMarks(20);
// console.log(student.Marks);
// student.tutionFeeDue(2000);
// console.log(student.tutionFee);


//we can use bind

// const newStudent = student.tutionFeeDue.bind(student2);
// newStudent(1000);
// console.log(student2.tutionFee);

// const student3due = student.tutionFeeDue.bind(student3);
// student3due(10000);
// console.log(student3.tutionFee)
// console.log(student3)



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