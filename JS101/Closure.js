function outerFunction() {
  const outerVariable = "I'm a variable from the outer scope";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction(); //here the outer function has finished execution

inner(); //but the inner function will still hold the access of the surrounding state - the outervariable.
