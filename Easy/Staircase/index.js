// javascript is a high level language, and it offers you many pre-defined functions that will help u solve such problems

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n, " "));
  }
}
