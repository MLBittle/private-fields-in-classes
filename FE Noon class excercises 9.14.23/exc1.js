//Objective: Understand the Observer design pattern.

//Instructions:

//Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
//When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
//Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.


class Subject {
	constructor() {
		this.observers = ["observer1", "observer2", "observer3"];
    this.observer1 = observer1
    this.observer2 = observer2
    this.observer3 = observer3
	}
	// Add methods here
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
	notifyObservers(data) {
    
		console.log('Observer updated!');
	}
}

const observer1 = new Observer("observer1");
const observer2 = new Observer("observer2");
const observer3 = new Observer("observer3");

class subscribe {observer1};
class subscribeNew {observer2};
class anotherSubscribeNew {observer3};


