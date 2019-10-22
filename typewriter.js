const sentence = "hello there from lighthouse labs";
let timer = 0;
let count = 0;
for (const char of sentence) {
  timer += 50;
  setTimeout(() => {
    process.stdout.write(char);
    count--;
    if (!count) {
      process.stdout.write('\n');
    }
  }, timer);
  count++;
}
