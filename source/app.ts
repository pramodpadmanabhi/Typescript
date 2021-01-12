//Intersection Types

type Admin={
    name:string;
    priviligies:string[];
}

type Employee={
    name:string;
    startDate:Date;
}

type ElevatedEmployee=Admin & Employee;

const e1:ElevatedEmployee={
    name:"Pramod",
    priviligies:["Admin"],
    startDate:new Date()
};

type CombineType=string|number;
type Numeric=number|boolean;

type universal=CombineType & Numeric;

//Type Guards

type UnknowEmployee=Employee|Admin;

function printEmployeeInformation(emp:UnknowEmployee){
    console.log('Name : '+ emp.name);
    if('priviligies' in emp){
        console.log('Priviligies' + emp.priviligies);
    }
    if('startDate' in emp){
        console.log('Start Date' + emp.startDate);
    }
}

printEmployeeInformation({name:'Pramod',startDate:new Date()});

//Type Guards on Classes

class Car{
    drive(){
        console.log("Drving a car....")
    }
}

class Truck{
    drive(){
        console.log("driving a truck....")
    }

    loadCargo(amount:number){
        console.log("loading cargo....");
    }
}

type Vehicle=Car|Truck;

const v1=new Car();
const v2=new Truck();


function useVehicle(vehicle:Vehicle){

    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }

}

useVehicle(v1);
useVehicle(v2);

//Discriminated Union
//One Common Property Under Each Class
interface Bird{
    type:'bird';
    flyingSpeed:number;
}
interface Horse{
    type:'horse';
    runningSpeed:number;

}

type Animal=Bird|Horse;

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed=animal.flyingSpeed;
            break;
        case 'horse':
            speed=animal.runningSpeed;
            break;
    }
    console.log('Moving Spped' + speed);
}

moveAnimal({type:'bird',flyingSpeed:20})

//Type Casting

// const userInputElement=<HTMLInputElement>document.getElementById('user-input')!;

const userInputElement=document.getElementById('user-Input')! as HTMLInputElement;
userInputElement.value='Hi There!'

const userInputEle=document.getElementById('user-Input');
if(userInputEle){
    (userInputEle as HTMLInputElement).value='Hi there!'
}

//Index Properties

interface ErrorContainer{
    [prop:string]:string;
}

const errorBag:ErrorContainer={
    email:'not a vaild email',
    username:'must start with a captial character'
}


//optional Chaining

const fetchedUserData={
    id:'url',
    name:'Max',
    job:{title:'CEO',description:'My Own Company'}
};

console.log(fetchedUserData?.job?.title);

//Nullish Coalescing
const userInputNullish='';

const storedData=userInputNullish??'DEFAULT';

console.log(storedData);
