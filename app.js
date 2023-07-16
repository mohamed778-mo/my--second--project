const yargs = require("yargs")
const data2=require("./data2")
yargs.command({
    command:"add",
    builder:{
        id:{
            describe:"first name",
            demandOption:true,
            type:'string'
    }
        ,
        
        fname:{
            describe:"first name",
            demandOption:true,
            type:'string'
         }
       ,     
        lname:{
             describe:"last name",
             demandOption:true,
            type:'string'
        },
        
        age:{
            describe:"age",
            demandOption:true,
            type:'string'
    },
        city:{
            describe:"place that live in",
            demandOption:true,
            type:'string' },
},

    handler:(x)=>{

        data2.persons(x.id,x.fname,x.lname,x.age,x.city)
    }


})


yargs.command({
    command:"delete",
    
    handler:(d)=>{

        data2.deleteData(d.id)
    }


})

yargs.command({
    command:"read",
    builder:{
        id:{
            describe:"id",
            demandOption:true,
            type:'string'
        }
    },
    handler:(r)=>{

        data2.readData(r.id)
    }


})
    
yargs.command({
    command:"list",
   
    handler:(l)=>{

        data2.list(l.id)
    }


})