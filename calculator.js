function JsObjects() {

    let person = {
        name: 'Usman',
        age: 22,
        school: 'Federal University Gusau'
    }

    console.log(person.name);

    let arrays = [1, 2, 10, 20];
    arrays.forEach(function(n, index) {
        console.log(index + "-" + n);
    });
}

JsObjects();