//instatiaion

class player {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  introduce() {
    console.log(
      ` hi my name is ${this.name} my age is ${this.age} and my position in the sport is ${this.position}`
    );
  }
}

const player1 = new player("rafael", 19, "striker");
console.log(player1.name); // rafael
console.log(player1.age); // 19
console.log(player1.position); // striker
player1.introduce();

/* This is called instatiation, this will recreate as a new object with running the
when it is first initiate. Hence the player1 will have name->rafael age->9 position->striker */
