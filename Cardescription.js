class Car{
    constructor(company,model,year){
        this.company = company
        this.model = model
        this.year = year

    }
    getDescription(){
        return 
        
        ` this is a ${this.year} ,${this.company} ,${this.model}`
    }
}
const result = new Car("Maruti Suzuki","Baleno Delta", 2022)
console.log(result)