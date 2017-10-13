name="test";
var person = {
    name: 'Abby',
    sayName: function() {
        var fn = function(){
            return function() {
                console.log(this);   //window
                console.log(this.name); //Abby
            }
        }
        fn()();
    }
}

person.sayName();