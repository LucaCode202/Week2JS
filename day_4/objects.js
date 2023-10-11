// const person = {
//     name: "Luca",
//     age: 21
// };

// console.log(person)

// //coffe shop example

// let offer =("none");
// let time = 1000;

// const coffeeShop = {
//     name: "Camillos",
//     capacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["latte", "mocha", "hot chocolate", "cappachino"],
//     breakfastOffer:"free cake with coffee",
//     lunchOffer:"free drink with overpriced sandwich",
//     noOffer:"there are currently no offers!",
//     openShop (){

//     },
//     closeShop (){

//     },
//     findOffer(){
//         if (time < 1100){
//             offer = this.breakfastOffer;
//         } else if (time < 1500){
//             offer = this.lunchOffer;
//         } else{
//             offer = this.noOffer;
//         }
//     }
// };

// coffeeShop.findOffer();
// console.log(offer);

// Alarm activity

// let day = "Whigh five";
// let alarm = "invalid day";
// day = day.toLowerCase();
// let days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// let alarmClock = {
//   weekdayAlarm: "Beep beep beep get up its 7am",
//   weekendAlarm: "have a nice lie in",
// };
// for (let i = 0; i < days.length; i++) {
//   if (day == days[i]) {
//     if (day == "saturday" || day == "sunday") {
//       alarm = alarmClock.weekendAlarm;
//     } else {
//       alarm = alarmClock.weekdayAlarm;
//     }
//   }
// }
// console.log(alarm);

const person = {
personName: "luca",
age: 21,
favouriteGames: [
  "halo",
  "CoD",
  "For Honour",
  "Battlefield",
  "war thunder",
  "star wars battlefront",
  "total war",
  "steel division 2",
  "chivalry 2",
  "ufc 3",
  "Doom",
  "mortal kombat"
]
}
const sayHi = () => {
console.log(`Hi, my name is ${person.personName}.`);
}

for(let i = 0; i < person.length; i++){
    console.log(person[i]);
}
sayHi();