//complete this code
class Person {
	constructor(name, age){
		this.name=name;
		this.age="";
	}
	get.name()
	{
		return this.name;
	}
	set age(age){
		 this.age=age;
		return this.age;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		consolelog(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		consolelog(`${this.name} is Teaching`);
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
