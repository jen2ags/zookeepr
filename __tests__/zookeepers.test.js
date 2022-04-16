const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require('../lib/zookeepers.js');
const { zookeepers } =require('../data/zookeepers.json');

jest.mock('fs');

test('Creates a zookeeper object', () => {
    const zookeeper = createNewZookeeper(
        {name: 'Jennifer', id: 'abcdefghij'},
        zookeepers
    );

    expect(zookeeper.name).toBe('Jennifer');
    expect(zookeeper.id).toBe('abcdefghij');
});

test('filters by query', () => {
    const startingZookeepers = [
        {
            id: '3',
            name: 'Jennifer',
            age: '30',
            favoriteAnimal: 'dog',
        },
        {
            id: '4',
            name: 'Aaron',
            age: '33',
            favoriteAnimal: 'penguin',
        },
    ];
    const updatedZookeepers = filterByQuery({age: '33' }, startingZookeepers);
    expect(updatedZookeepers.length).toEqual(2);
});

test('finds by id', () => {
    const startingZookeepers = [
        {
            id: '3',
            name: 'Jennifer',
            age: '30',
            favoriteAnimal: 'dog',
        },
        {
            id: '4',
            name: 'Aaron',
            age: '33',
            favoriteAnimal: 'penguin',  
        },
    ];
    const result = findById('3', startingZookeepers);
    expect(result.name).toBe('Jennifer');
});

test('validates zookeeper age', () => {
    const zookeeper = {
        id: '3',
        name: 'Jennifer',
        age: '30',
        favoriteAnimal: 'dog',
    };

    const invalidZookeeper = {
        id: '4',
        name: 'Aaron',
        age: '33',
        favoriteAnimal: 'penguin',
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});