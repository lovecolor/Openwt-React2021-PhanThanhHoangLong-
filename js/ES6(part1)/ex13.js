const byte_Size = str => new Blob([str]).size;
console.log(byte_Size('123456'));  
console.log(byte_Size('Hello World'));  
console.log(byte_Size('Ã¢')); 