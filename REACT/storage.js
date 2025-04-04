                               //-------LOCAL STORAGE ---------//



// alert("storage.js loaded!"); // Check if file is loaded

// const handleAddToStorage = () => {
//     const  name = "RAKIBUL ISLAM 10";
//     localStorage.setItem("rakib", name);

//     console.log("Key: rakib, Value:", name);

//     // alert("Data added to localStorage!");
// };




const handleAddToStorage = () => {
    const person = {
        name: "hero alom",
        age: 30,
        friends: ["rohim"]
    }

    // localStorage.setItem("alom", person);
    
    const convertedTOString = JSON.stringify(person);

    // console.log(convertedTOString);         // Console Output: {"name":"hero alom","age":30,"friends":["rohim"]}

    localStorage.setItem("alom", convertedTOString);        // Key: alom  Value: {"name":"hero alom","age":30,"friends":["rohim"]}.

    // const backtoObject = JSON.parse(convertedTOString)
    // console.log(backtoObject.name);             // Console Output: hero alom

};

const data = localStorage.getItem("alom");
const converted = JSON.parse(data);
// console.log(converted);








