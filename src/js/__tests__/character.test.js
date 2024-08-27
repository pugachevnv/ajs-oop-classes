import Character from '../character';

test('Правильно создается объект', () => {
    const warrior = new Character('Alex', 'Bowman');
    const correct = {    
        attack: undefined,
        defence: undefined,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Bowman'
    };
    expect(warrior).toEqual(correct);
});

test('Ошибка в name, не является строкой', () => {
    expect(() => new Character(123, 'Bowman')).toThrow('Имя персонажа должно быть строкой');
});

test('Ошибка в name, менее 2 сиволов', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя персонажа должно быть не менее 2 и не более 10 символов');
});

test('Ошибка в name, более 10 символов', () => {
    expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Имя персонажа должно быть не менее 2 и не более 10 символов');
});

test('Ошибка в type', () => {
    expect(() => new Character('Alex', 'Bow')).toThrow('Такого перcонажа нет в списке');
});