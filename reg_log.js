//Перевірка введеного пароля на першій кнопці
function checkTextLength() {
    const inputText = document.getElementById("inputText1").value;
    if (inputText.length < 8) {
      alert("Ваш пароль повинен мати не менше 8 символів!!!");
    }
  }

  //Перевірка введеного пароля на другій кнопці

  function checkTextLength1() {
    const inputText = document.getElementById("inputText12").value;
    if (inputText.length < 8) {
      alert("Ваш пароль повинен мати не менше 8 символів!!!");
    }
  }

  //Перевірка введених даних для логіна на кнопці 1

  function checkInput() {
    const inputText = document.getElementById("inputText").value;
    const regex = /^[a-zA-Z0-9\s\.\,\!\?\)\(\_\*\<\>\-]+$/; 
    if (!regex.test(inputText)) {
      
      alert("Логін повинен бути виключно кирилицею та з цифрами!!!");
    }
  }


    //Перевірка введених даних для логіна на кнопці 2

    function checkInput1() {
        const inputText = document.getElementById("inputText11").value;
        const regex = /^[a-zA-Z0-9\s\.\,\!\?\)\(\_\*\<\>\-]+$/; 
        if (!regex.test(inputText)) {
          
          alert("Логін повинен бути виключно кирилицею та з цифрами!!!");
        }
      }