// Your code here
function createEmployeeRecord(array){
    return{
        firstName: array[0], 
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],


    }
    
    }
      
    function createEmployeeRecords(array){
        return array.map(x => createEmployeeRecord(x))
        
    }

    function createTimeInEvent(object, time){
        const splitArray = time.split(" ")
        const obj = {type: "TimeIn", 
    hour: parseInt(splitArray[1], 10), date: splitArray[0], }
    object.timeInEvents.push(obj)
    return object
    }

    function createTimeOutEvent(object, time){
        const splitArray = time.split(" ")
        const obj = {type: "TimeOut", hour: parseInt(splitArray[1], 10), date: splitArray[0], }
        object.timeOutEvents.push(obj)
        return object
    }
    function hoursWorkedOnDate(object,time){
        let inEvent = object.timeInEvents.find(function(e){
            return e.date === time
        })
        console.log(inEvent.hour)
    
        let outEvent = object.timeOutEvents.find(function(e){
            return e.date === time
    })
    console.log(outEvent.hour)
   return (outEvent.hour - inEvent.hour) / 100
    

}    


function wagesEarnedOnDate(object, time){
    const pay = hoursWorkedOnDate(object, time)* object.payPerHour
    return pay
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}


let findEmployeeByFirstName = function(srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  }
  
  let calculatePayroll = function(arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor(rec)
      }, 0)
  }