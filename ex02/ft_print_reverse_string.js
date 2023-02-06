function reverse(string) {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}

const original = "Hello World, my name is John Doe";
console.log(reverse(original));