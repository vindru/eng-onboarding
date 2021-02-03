const prompt = require("prompts");

(async () => {
  const response = await prompt({
    type: "number",
    name: "nextTerm",
    message: "Enter numerice value:",
  });

  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= response.nextTerm; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
})();
