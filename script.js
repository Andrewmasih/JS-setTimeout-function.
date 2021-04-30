function taskOne () {

  console.log ("task one");

}

function tasktwo () {

  console.log ("task two");
}

setTimeout (taskOne, 4000);
tasktwo ();


const message = function () {

  console.log ("this is the timed message set for delay of 2sec, and 'task one' is set for delay of 4sec");
}

setTimeout (message, 2000);

/* use 'setTimeout' and then the number of the time delay */