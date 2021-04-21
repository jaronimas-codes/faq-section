// const btns = document.querySelectorAll(".btn");
const questions = document.querySelectorAll(".question");

// questions.forEach((question) =>
//   question.addEventListener("click", function () {
//     const theButton = question.querySelector(".btn");
//     theButton.addEventListener("click", function () {
//       questions.forEach((item) => {
//         if (item !== question) {
//           item.classList.remove("show-text");
//         }
//       });
//     });

//     question.classList.toggle("show-text");
//   })
// );

questions.forEach((question) =>
  question.addEventListener("click", function (e) {
    const target = e.currentTarget;
    target.classList.toggle("show-text");
    const siblings = target.parentElement.children;
    const arr = Array.from(siblings);
    arr.forEach((sibling) => {
      if (sibling !== target) {
        sibling.classList.remove("show-text");
      }
    });
  })
);
