/*

Stack unwinding is the automatic removal 
of stack frames while an error propagates upward until a matching 
catch block is found or the stack becomes empty.
 */

function level3() {
  console.log("level3 start");
  //creates a new error object
  //stack unwinding starts
  
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

//exercise2 modifying level2

function level2() {
  console.log("level2 start");
  try {
    level3();
  } catch (err) {
    console.log("Caught in level2");
  }
  console.log("level2 end");
}


//did this exercise correctly 
/*
SYNC ERROR WITH TRY/CATCH — NOTE

If an error is caught:

1) Stack unwinding stops at the catch block.
2) Execution resumes AFTER the catch block.
3) Remaining code in that function runs normally.
4) Program does not crash.

Important:
Error bubbling stops where the error is handled.
*/


//exercise3 modifying level3

function level2() {
  console.log("level2 start");
  try {
    level3();
  } catch (err) {
    console.log("Caught in level2");
    throw err;
  }
  console.log("level2 end");
}


/*
RETHROWING — NOTE

If an error is caught and then rethrown:

1) Stack unwinding resumes.
2) Remaining code in that function does NOT execute.
3) Error continues bubbling upward.
4) If no higher catch exists, Node crashes.

Important:
Catching does not "neutralize" the error
unless you DO NOT rethrow it.
*/




/*
CATCH + IMMEDIATE RETHROW

If you catch an error and immediately rethrow it,
and there is no outer catch:

The result is the same as not catching it at all.

The process will still crash.

Catching only matters if:
- You handle it
- Or you transform it
- Or you prevent it from propagating
*/


/*
CRITICAL UNDERSTANDING

When an error propagates out of a function,
that function's execution is permanently aborted.

Even if the error is caught outside,
the function does NOT resume from where it left off.

Throw = immediate function termination.
*/


//exercise4

function level3() {
  console.log("level3 start");
  throw new Error("Boom");
}

function level2() {
  console.log("level2 start");

  try {
    level3();
  } catch (err) {
    console.log("Caught in level2");
    throw err;
  } finally {
    console.log("level2 finally");
  }

  console.log("level2 end");
}

function level1() {
  console.log("level1 start");
  level2();
  console.log("level1 end");
}

try {
  level1();
} catch (err) {
  console.log("Caught at top level");
}

console.log("Program end");

//error is thrown stack unwinding starts 
//before js removes that stack fram
//finally of that function is run

/*
FINALLY DURING RETHROW

When rethrowing an error:

1) Catch executes.
2) Throw triggers unwinding.
3) Before the function exits, its finally block runs.
4) Only after finally finishes does the error propagate upward.

Finally runs before the stack frame is removed.
*/

//if we return in finally the error is swallowed 
//and the rest functions are called in the call stack 

//Exercise5

async function level3() {
  console.log("level3 start");
  throw new Error("Boom in async level3");
}

async function level2() {
  console.log("level2 start");
  level3(); // notice: NO await
  console.log("level2 end");
}

async function level1() {
  console.log("level1 start");
  level2(); // NO await
  console.log("level1 end");
}

level1();
console.log("Program end");


/*
========================================
STACK UNWINDING VS PROMISE REJECTION
========================================

1) In synchronous code:
   - `throw` immediately starts stack unwinding.
   - Current function stops.
   - Stack frames are removed until a catch is found.
   - If no catch exists, Node crashes.

2) In async functions:
   - `throw` does NOT cause stack unwinding.
   - It becomes `Promise.reject(error)`.
   - Caller functions continue executing normally.

3) Stack unwinding only happens:
   - In synchronous throw
   - Or at an `await` boundary when awaiting a rejected Promise.

Promises themselves do NOT unwind the call stack.
*/
