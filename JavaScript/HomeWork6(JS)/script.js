let arrName = [{
    name: 'Artur',
    sName: 'onop',
    salary: 800,
    age: 31,
}, {
    name: 'Vita',
    sName: 'pono',
    salary: 550,
    age: 30,
}, {
    name: 'Oleg',
    sName: 'other',
    salary: 1050,
    age: 35,
}, {
    name: 'Vova',
    sName: 'korob',
    salary: 750,
    age: 50,

}]


arrName.sortItems = function(arr, el){
        if(el === 'secondName'){
    arr.sort((a, b) => {
        if (a.sName < b.sName) {return -1;};
        if (a.sName > b.sName) {return 1;};
        return 0;
    })
    };

    if(el === 'name'){
        arr.sort((a, b) => {
            if (a.name < b.name) {return -1;};
            if (a.name > b.name) {return 1;};
            return 0;
        })
    };
    
    if(el === 'salary'){
        arr.sort((a, b) => Number(b.salary) - Number(a.salary));
    }

    if(el === 'age'){
        arr.sort((a, b) => Number(b.age) - Number(a.age));
    }

}
 arrName.sortItems(arrName, 'age');
console.log(arrName);
