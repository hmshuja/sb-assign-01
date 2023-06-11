const search = prompt("Write the Blood Group Name or 'available donors'");

const result = donors.filter(
  (data) =>
    data.blood_group === search ||
    data.status === search ||
    data.cell === search
);

const finalResult = [];

result.forEach((items, index) => {
  finalResult.push(items);
});

console.table(finalResult);
