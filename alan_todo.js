// Use this sample to create your own voice commands
intent('Add $(item* (.*))', (p) => {
    p.play({command: 'addTask', data: p.item.value});
    p.play('OK!');
})

intent('complete $(item* (.*))', (p) => {
    p.play({command: 'completeTask', data: p.item.value});
    p.play('OK! Task Completed');
})

intent('delete $(item* (.*))', (p) => {
    p.play({command: 'deleteTask', data: p.item.value});
    p.play('OK! Task Removed');
})

intent('remove $(item* (.*))', (p) => {
    p.play({command: 'deleteTask', data: p.item.value});
    p.play('OK! Task Removed');
})