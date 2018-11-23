const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Zack',
            room: 'Mission Control'
        },{
            id: '2',
            name: 'Patrick',
            room: 'Quality Assurance'
        },{
            id: '3',
            name: 'Alicia',
            room: 'Mission Control'
        }];
    });

    it('should add new user', ()  => {
        var usersArray = new Users();
        var user = {
            id: '321',
            name: 'Zelda',
            room: 'Spiderverse'
        };
        var res = usersArray.addUser(user.id, user.name, user.room);

        expect(usersArray.users).toEqual([user]);  
    });

    it('should remove a user',() => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '34';
        var user = users.removeUser(userId);
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find a user', () => {
        var userId = '1';
        var user = users.getUser(userId);
        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var user = users.getUser('44');
        expect(user).toBeFalsy();
    });

    it('should return names for mission control', () => {
        var userList = users.getUserList('Mission Control');

        expect(userList).toEqual(['Zack', 'Alicia']);
    });

    it('should return names for Quality assurance', () => {
        var userList = users.getUserList('Quality Assurance');

        expect(userList).toEqual(['Patrick']);
    });
});