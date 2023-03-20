


let newArray = ['hi', 'new', 'me', 'they', 'thier', 'mine', 'yes', 'no'];

for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] == 'new') {
        console.log("Yes");
    }
    else if (newArray[i] == 'they') {
        console.log("No");
    }
    else if (newArray[i] == 'mine') {
        continue;
    }
    else if (newArray[i] == 'no') {
        console.log("end");
    }
}


