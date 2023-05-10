function getPerson(person){
    try{
        if(typeof person == Object){

        }
        return `Name $ {person:name} , Age & {person:age}`
    } catch{
        console.log("wrong")
    }
}
console.log(getPerson({name:"mithun" ,age:20}))



