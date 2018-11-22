var expect = require('expect');
var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Abhishek';
        var text =  'Howling Blizzard';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from: from,
            text: text
        })
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', ()=> {
        var from = 'Tethes';
        var latitude = 12.265589;
        var longitude = 15.496632;
        var url = `https://google.com/maps?q=12.265589,15.496632` ;
        var message = generateLocationMessage(from,latitude,longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from: from,
            url: url 
        })
    });
});
