const square = function (x) {
     return x * x;
};

const squareArrowFn1 = (x) => {
     return x * x;
}

const squareArrowFn2 = (x) => x * x;

console.log(square(2));
console.log(squareArrowFn1(3));
console.log(squareArrowFn2(4));

const eventObj = {
     name: 'Arrow Function with Object',
     guestList: ['Gaurav', 'Naveen', 'Nikhil'],
     printTitle: function() {
          console.log('Name of Title: ', this.name);
     },
     printGuestList() {
          this.guestList.forEach((guest) => {
               console.log(`${guest} is attending party!`);
          });
     }

};
eventObj.printTitle();
eventObj.printGuestList();

const tasks = {
     tasks: [{
         text: 'Grocery shopping',
         completed: true
     },{
         text: 'Clean yard',
         completed: false
     }, {
         text: 'Film course',
         completed: false
     }],
     getTasksToDo() {
          return this.tasks.filter(task => !task.completed);
     }
 };

 console.log(tasks.getTasksToDo());

