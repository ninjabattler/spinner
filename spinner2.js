const spins = ["|","/","-","\\"];

for(let i = 1; i <= 4; i++){

  setTimeout(() => {
    process.stdout.write(`\r${spins[i-1]}   `);
  }, -100 + (200 * i));

}