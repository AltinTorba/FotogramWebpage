let myImgs = [];


function render() {
  let contentRef = document.getElementById('content');
  
  for (let index = 0; index < rendomTitles.length; index++) {
    contentRef.innerHTML += `       
      <div class "single_element">
        <h2>
          ${randomTitles[index]}
        </h2>
        <p>
          ${randomDescription[index]}
        </p>
      </div>´
}

function getNotesHtml() {
  return     contentRef.innerHTML += 
  `       
      <div class "single_element">
        <h2>
          ${randomTitles[index]}
        </h2>
        <p>
          ${randomDescription[index]}
        </p>
      </div>´
}