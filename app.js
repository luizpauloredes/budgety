//BUDEGET CONTROLLER

var budgetController = (function () {

    //some code
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        
    };


    var totalExpenses = 0;

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

})();






//UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function () {
            return DOMstrings
        }
    };

})();





//GLOBAL APP  CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAdditem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAdditem()
            }
        })
    }





    var ctrlAdditem = function () {
        // to do list
        //1- get the filed input data
        var input = UICtrl.getinput();
        //2- add the item to the budget controller
        //3-  add the new item in the UI interface
        //4- calculate the budget 
        //5- display the budget on the UI         

    };

    return {
        init: function () {
            console.log('Application has started.')
            setupEventListeners();
        }
    }



    //some code



})(budgetController, UIController);


controller.init();