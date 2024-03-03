const makeChange = (c) => {
  // your name here
	const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;
    let quarters = Math.floor(c / quarterValue);
    c %= quarterValue;
    let dimes = Math.floor(c / dimeValue);
    c %= dimeValue;
    let nickels = Math.floor(c / nickelValue);
    c %= nickelValue;
    let pennies = Math.round(c / pennyValue);
    return { q: quarters, d: dimes, n: nickels, p: pennies };
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
