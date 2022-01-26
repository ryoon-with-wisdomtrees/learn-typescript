let arr = [
    { gender: 'male', name: 'john'},
    { gender: 'female', name: 'eli'},
    { gender: 'none', name: 'Ravender'},
    ]

    let filtered =    arr.filter(function(item){
        if(item.gender == 'female')
        return item;
    })

    console.log(filtered)