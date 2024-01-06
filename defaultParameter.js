const calculate = (salary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return salary + bonus.teamBonus + bonus.employeeBonus;
}

console.log(calculate(50, {teamBonus: 10, employeeBonus: 20}));