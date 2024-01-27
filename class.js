class MyClass {
    // Static property
    static myStaticProperty = 'Hello, I am a static property!';
  
    // Static method
    static myStaticMethod() {
      console.log('Hello, I am a static method!');
    }
  
    // Instance property
    instanceProperty = '';
  
    // Constructor
    constructor(instanceProperty) {
      this.instanceProperty = instanceProperty;
    }
  
    // Instance method
    instanceMethod() {
      console.log(`Hello, I am an instance method! Instance property: ${this.instanceProperty}`);
    }
  }
  
  // Accessing static property
  console.log(MyClass.myStaticProperty);
  
  // Calling static method
  MyClass.myStaticMethod();
  
  // Creating an instance of the class
  const myInstance = new MyClass('Instance property value');
  
  // Accessing instance property
  console.log(myInstance.instanceProperty);
  
  // Calling instance method
  myInstance.instanceMethod();
  