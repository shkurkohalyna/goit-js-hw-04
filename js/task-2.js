const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory
console.log(inventory.items);
// ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction("Gas mask", inventory.remove.bind(inventory)); // Invoking action on Gas mask
// Removing Gas mask from inventory
console.log(inventory.items); // ['Knife', 'Medkit']

// const invokeInventoryAction = function (itemName, action) {
//     const act = action(itemName);
//     const msg = `Invoking action on ${itemName}`;
//     return { act, msg };
// };

// const invokeAdd = invokeInventoryAction(
//     'Medkit',
//     inventory.add.bind(inventory)
// );
// const arrayAdd = [...inventory.items];

// console.log(invokeAdd);
// console.log(arrayAdd);

// const invokeRemove = invokeInventoryAction(
//     'Gas mask',
//     inventory.remove.bind(inventory)
// );

// const arrayRemove = [...inventory.items];

// console.log(invokeRemove);
// console.log(arrayRemove);
