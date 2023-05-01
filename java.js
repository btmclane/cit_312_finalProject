
// This is some js that will make the bootstrap popover have full functionality
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
    });

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
})

// These are all of the questions that will be called by their numver in the array on the index file

let questionSet = [
    {question: "Which president served during the War of 1812?", answer: "James Madison" },
    {question: "Who was the first president to lose both the electoral and popular vote but still be elected? ", answer: "John Quincy Adams" },
    {question: "Which president was in office when Alaska was purchased?", answer: "Andrew Johnson"},
    {question: "Which president was known as the 'Preacher President'?", answer: "James A. Garfield"},
    {question: "Who was the only president to be a grandson of a former president?", answer: "Benjamin Harrison"},
    {question: "Which president was the only one born on the 4th of July?", answer: "Calvin Coolidge"},
    {question: "Which president was the only one to serve 3 terms?", answer: "Franklin D. Roosevelt"},
    {question: "What was Ronald Reagan's nickname?", answer: "Dutch"},
    {question: "Who was the first African American president?", answer: "Barack Obama"},
    {question: "Which two presidents were father and son?", answer: "George H. W. Bush & George W. Bush"},
  ];
  
  
  
  let questionNumber = 0;
  //  for buttons in part 1
  const addListener = (item) => {
    item.addEventListener("click", (e) => {
      questionNumber = e.target.attributes.num.value - 1;
      document.querySelector("#answer").textContent = "";
      document.querySelector("#question").textContent =
        questionSet[questionNumber].question;
    });
  };
  let questionButtons = document.querySelectorAll(".qBtn");
  questionButtons.forEach(addListener);
  
  document.querySelector("#check").addEventListener("click", (e) => {
    document.querySelector("#answer").textContent =
      questionSet[questionNumber].answer;
  });
  

 