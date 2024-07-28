const express = require("express")
const router = express.Router()
const Person = require("../Models/personSchema")


const arrayPeople = [
        { name: 'Rayen', age: 1, favoriteFoods: ['salade','Pasta'] },
        { name: 'Nidhal', age: 2, favoriteFoods: ['Coscous','Ojja'] },
        { name: 'Folla', age: 3, favoriteFoods: ['Pasta','mlokhia'] },
        { name: 'Sabrine', age: 4, favoriteFoods: ['Salade','Coscous'] }
]


const createPerson = async (arrayPeople) => {
    try {
      await Person.create(arrayPeople);
      console.log("Person Created Successfully");
    } catch (err) {
      console.log(err);
    }
  };
createPerson(arrayPeople);


// Use model.find() to Search Your Database
const findPerson = async (name) => {
    try {
      const person = await Person.find({ name: name });
      console.log('People found:', person);
    } catch (err) {
      console.error(err);
    }
  };
findPerson(Nidhal);


// Use model.findById() to Search Your Database By _id
const findOnePerson = async (id) => {
    try {
        const person = await Person.findById({_id}) ;
        console.log("Id person founded:", person)
    } catch (err) {
        console.log(err);
    }
};
findOnePerson(Anyid);


// Use model.findOne() 
const findOneByFood = async (food) => {
    try {
      const person = await Person.findOne({ favoriteFoods: food }) ;
      console.log('Person found by Food :', person);
    } catch (err) {
      console.error(err);
    }
  };
findOneByFood(pasta);


// Updates on a Document Using model.findOneAndUpdate()
const FindOneUpdate = async (nameperson) => {
    try {
      const person = await Person.findOneAndUpdate (
     { name: nameperson },
     { age: 20 },
     { new: true } );
     console.log ("person founded and updated",person) ;
    } catch (err){
        console.log (err);
    } ;
}
FindOneUpdate() ;


// Delete One Document Using model.findByIdAndRemove
const FindOneRemove = async () => {
    try {
        const person = await Person.findByIdAndRemove (
            console.log("Person Found and Removed :" , person) 
        )
    } catch (err) {
        console.log(err)
    }
};
FindOneRemove() ;


const deleteMany = async (name) => {
  try {
    const result = await Person.deleteMany({ name: name });
    console.log('People removed:', result);
  } catch (err) {
    console.error(err);
  }
};
deleteMany();


const FindBurritos = async () => {
  try {
    const people = await Person.find({favoriteFoods: 'Burritos'})
      .sort({ name: name})
      .limit(2)
      .select('-age')
      .exec();
    console.log('People found:', people);
  } catch (err) {
    console.error(err);
  }
};

FindBurritos();



module.exports = router