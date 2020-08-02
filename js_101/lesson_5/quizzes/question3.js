let todoLists = [
    {
      id: 1,
      listName: 'Groceries',
      todos: [
        { id: 1, name: 'Bread', completed: false },
        { id: 2, name: 'Milk', completed: false },
        { id: 3, name: 'Apple Juice', completed: false }
      ]
    }
];

console.log(todoLists[0]['todos'][2]['name']);

console.log(todoLists[0].todos[2]); // No
// console.log(todoLists.todos[2]["name"]); // No
console.log(todoLists[0]['todos'][2]['name']) // Yes
console.log(todoLists[0]["todos"][2].name); // Yes