const fs=require("fs")

const persons=(id,fname,lname,age,city)=>{

    const allData=loadData()

    const Ddata=allData.filter((obj)=>{
        return obj.id === id
        
    })
    console.log(Ddata)
    
    if (Ddata.length == 0) {
        
    
    
    allData.push({
        id,
        fname,
        lname,
        age,
        city
    
 })


saveAllData(allData)
}
else{
    console.log("already id exist")
}

}

 const loadData=()=>{
try {
     const datajson = fs.readFileSync("data2.json")
     return JSON.parse(datajson)
} 
  catch  {
    return[]
}


}


const saveAllData=(allData)=>{

    const saveAllData=JSON.stringify(allData)
    fs.readFileSync("data2.json",saveAllData)
    
}



const  deleteData=(id)=>{
    const allData=loadData()
    
    const keepData= allData.filter((obj) =>{
        return obj.id !==id
    
    
    
    })
console.log(keepData)
saveAllData(keepData )

}



const readData=(id)=>{
    const allData=loadData()
    const item=allData.find((obj)  =>{
        return obj.id==id


    })

console.log(item)
saveAllData(item )
}



const list = ()=>{
    const allData=loadData()
    const typelist=allData.forEach((obj) => {
     return obj.id==id   
        
    });
    console.log(typelist)
    saveAllData(typelist)
}


const persons = [
    { id: 1, fname: 'Ahmed', lname: 'Hossam', age: 20, city: 'Alex' },
    { id: 2, fname: 'mohamed', lname: 'hamdey', age: 19, city: 'damnhour' },
    { id: 3, fname: 'Sarah', lname: 'salama', age: 45, city: 'cairo' },
    { id: 4, fname: 'mona', lname: 'eldeep', age:25, city: 'desouk' },
    { id: 5, fname: 'noor', lname: 'kamel', age: 40, city: 'kafr elshekh' },
    { id: 6, fname: 'mostafa', lname: 'elmala', age: 22, city: 'mansoura' },
    { id: 7, fname: 'rana', lname: 'salem', age: 23, city: 'aswan' },
  ];
  
  
  const updatedPersons = persons.filter(person => person.id !== 4 && person.id !== 6);
  
  updatedPersons.forEach(person => {
    console.log(`Name: ${person.fname} ${person.lname}, City: ${person.city}`);
  });
  
  const fifthPerson = updatedPersons.find(person => person.id === 5);
  console.log('Data for the 5th person:', fifthPerson);



module.exports={
    persons,
    deleteData,
    readData,
    list
}
