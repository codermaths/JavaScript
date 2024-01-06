
const getUser = () => { 
    return {
        firstName: 'Andy',
        lastName: 'Jones',

        address: {
            city: 'LA',
            country: 'USA',
            postCode: 'LA44',

            fullAddress: {
                dorNumber: 22
            }
        },
        age: 29
    } 
};

const user = getUser();

const { lastName, firstName, address: { city : theCity } } = user;
const { age : theAge, address : { fullAddress : { dorNumber : number } } } = user;

console.log(`${lastName}, ${firstName}, ${theAge}, ${theCity}, ${number}`);





