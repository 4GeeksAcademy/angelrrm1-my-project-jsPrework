/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const excuse = {
    who: ["The dog", "My human grandma ", "The mailman", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "my phone", "the car"],
    when: [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ]
  };
  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function generateExcuse() {
    const { who, action, what, when } = excuse;
    return [
      randomElement(who),
      randomElement(action),
      randomElement(what),
      randomElement(when)
    ].join(" ");
  }
  const excuseElement = document.getElementById("excuse");
  if (excuseElement) {
    excuseElement.innerHTML = generateExcuse();
  }
};
