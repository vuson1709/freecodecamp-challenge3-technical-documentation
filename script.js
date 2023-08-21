"use strict";
const object = {
  firstName: "Vu",
  lastName: "Son",
};
object.age = 0;

// If we use OR operand, the result will be 20. It's not logic because we assgined age to 0
const ageVu = object.age ?? 20;
console.log(ageVu); // 0
