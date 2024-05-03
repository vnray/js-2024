for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(`value of i ${i}`);
}
