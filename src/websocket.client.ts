import readline from "readline";
import { io } from "socket.io-client";

const socket = io("ws://localhost:4000");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userName = "";

function getUserInput(question: string) {
  rl.question(question, (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("Exiting...!");
      rl.close();
    } else {
      if (userName.length <= 0) {
        userName = userInput;
      } else {
        socket.emit("chat message", `${userName} said ${userInput}`);
      }

      getUserInput(
        'Please enter a message to broadcast (type "exit" to quit): '
      );
    }
  });
}

getUserInput('Please enter your name. (type "exit" to quit): ');

rl.on("close", () => {
  process.exit(0);
});

socket.on("chat message", (msg) => {
  console.log(msg);
});
