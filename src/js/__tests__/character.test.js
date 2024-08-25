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

test('Ошибка в name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow("не менее 2 и не более 10 символов");
});

test('Ошибка в type', () => {
    expect(() => new Character('Alex', 'Bow')).toThrow('перcонажа нет в списке');
});