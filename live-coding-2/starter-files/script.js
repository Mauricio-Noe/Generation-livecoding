

        function fetchAnswer() {
          fetch('https://yesno.wtf/api')
          .then(response => response.json()) // Convertir la respuesta a JSON
          .then(data => {
              // elemento div con id "answer"
              var answerDiv = document.getElementById('answer');
              // Actualizar el div con la respuesta del API
              answerDiv.innerText = data.answer;
          })
          .catch(error => {
              console.error('Error al obtener la respuesta del API:', error);
          });
      }     
           

document.getElementById('fetchButton').addEventListener('click', fetchAnswer);
