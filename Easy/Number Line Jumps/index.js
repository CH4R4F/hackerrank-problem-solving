function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  // simple .. run an infinit loop and check if the initial difference between the two kangoroos is the the same or less than their speed after each jump, if so, they will never meet
  // if x1 = 0 anc v1 = 2, and x2 = 2 and v2 = 2, the difference will always be the same so they will never meet
  // also I check if the difference will incrase or decrase, if it incrase, then they will never meet
  // if decrease, change the value of difference to the new difference, and always check if the difference will decrease until they meet or one of them will skip the other
  let diff = Math.abs(x1 - x2);
  while (true) {
    x1 = x1 + v1;
    x2 = x2 + v2;

    if (x1 == x2) {
      return "YES";
    } else if (Math.abs(x1 - x2) >= diff) {
      return "NO";
    }
    diff = Math.abs(x1 - x2);
  }
}
