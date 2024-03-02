const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Не вказані аргументи командного рядка.");
} else {
  console.log("Аргументи командного рядка:");
  args.forEach((arg, index) => {
    console.log(`${index + 1}: ${arg}`);
  });
}
