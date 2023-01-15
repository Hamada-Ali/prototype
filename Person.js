// prototype pattern

// copy/clone all the class/instance priavte or public properties and use it with another instance

export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #birth() {
        return 2023 - this.age ;
    }

    clone() {
        // create clone of this class\
        const cloned = Object.getPrototypeOf(this);

        // create our cloned instance
        const newClone = Object.create(cloned);
        // extract the private method //
        newClone.birth = this.#birth();
        
        newClone.name = this.name;
        newClone.age = this.age;

        return newClone;
    }
}

