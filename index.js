// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    return [drivers[0],drivers[1]];
}
function returnLastTwoDrivers(drivers){
    return [drivers[2],drivers[3]];
}

const selectingDrivers= [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(num){
    return function (num2){
        return num*num2;
    }
}

function fareDoubler(num){
    return num*2;
}

function fareTripler(num){
    return num*3;
}

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}