describe('person', function () {
    var Person = require('../../lib/Person/Person');
    var Student = require('../../lib/Person/Student');
    var Worker = require('../../lib/Person/Worker');

    it('should return string', function () {
        var  introduce = new Person('Tom', 21).introduce();
        expect(introduce).toEqual('My name is Tom. I am 21 years old.');
    })

    it('should return student string', function () {
        var introduce = new Student('Tom', 21, 2).introduce();
        expect(introduce).toEqual('I am a Student. I am at Class 2.');
    })

    it('should return wordker string', function () {
        var introduce = new Worker('Tom', 21).introduce();
        expect(introduce).toEqual('I am a Worker. I have a job.');
    })
})