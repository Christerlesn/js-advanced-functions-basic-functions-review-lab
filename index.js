function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(main = '*'){
    return function(important = "special"){
        return `You are ${main}${important}${main}!`
    }
}

const Calculator = {
    add: function add(n1, n2){
        const results = n1 + n2
        return results
    },

    subtract: function subtract(n1, n2){
        const results = n1 - n2
        return results
    },

    multiply: function multiply(n1, n2){
        const results = n1 * n2
        return results
    },

    divide: function divide(n1, n2){
        const results = n1 / n2
        return results
    }
}

function actionApplyer(int, array){
    array.forEach(fn => int = fn(int))
    return int
}