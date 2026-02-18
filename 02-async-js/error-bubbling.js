function level3() {
  console.log("level3 start");
  throw new Error("Something broke in level3");
  console.log("level3 end");
}

function level2() {
  console.log("level2 start");
  level3();
  console.log("level2 end");
}

function level1() {
  console.log("level1 start");
  level2();
  console.log("level1 end");
}

level1();
console.log("Program end");


//SELF NOTE

/*
==============================
SYNC ERROR BUBBLING — NOTE
==============================

My Incorrect Assumption:
I thought that after `throw` in level3,
execution would return to level2 and continue,
printing:
  - "level2 end"
  - "level1 end"

Why That Is Wrong:
When `throw` is executed:

1) Execution of the current function stops immediately.
2) Stack unwinding begins.
3) JavaScript does NOT continue executing remaining lines
   in calling functions.
4) Each stack frame is removed until a matching `catch` is found.
5) If no catch is found, Node crashes and exits.

Important Correction:
Stack unwinding does NOT mean:
  "Resume execution in the caller."

It means:
  "Abort execution and bubble the error upward."

So in the original example, the only lines printed are:
  level1 start
  level2 start
  level3 start

Everything after the throw is skipped.
Node prints the error + stack trace and exits.

Call stack at the moment of throw (top → bottom):
  level3
  level2
  level1

These frames are popped without executing their remaining code.
*/


function level2() {
  console.log("level2 start");
  try {
    level3();
  } catch (err) {
    console.log("Caught in level2");
  }
  console.log("level2 end");
}
