it('12.4 WeakMap WeakSet', function () {

    let activeUsers = [
        {name: "Вася"},
        {name: "Петя"},
        {name: "Маша"}
    ];

    let weakMap = new WeakMap();

    weakMap.set(activeUsers[0], 1);
    weakMap.set(activeUsers[1], 2);
    weakMap.set(activeUsers[2], 3);

    activeUsers.splice(0, 1); // Вася более не активный пользователь

    cy.log(activeUsers)

})