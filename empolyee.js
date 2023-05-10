class empolyee{
    constructor( name, position,salary){
        this.name = name
        this.position = position
        this.salary = salary

    }
    getSalary(){
        return this.salary
    }
}
const empolyeeSalary = new empolyee("shubham Rashtogi" ,"Team Leader" ,90000)
console.log(empolyeeSalary);
const p = empolyeeSalary.getSalary()
console.log ( " Salary: ",p)  
// Expected Output  90000 salary