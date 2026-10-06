document.querySelector('#generateName').addEventListener('click', generateName)

function generateName() {

  const firstName = document.querySelector('#firstName').value
  const color = document.querySelector('#color').value
  const animal = document.querySelector('#animal').value
  const food = document.querySelector('#food').value
  const number = document.querySelector('#number').value

  fetch(`/api?firstName=${firstName}&color=${color}&animal=${animal}&food=${food}&number=${number}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      document.querySelector('#result').innerText =
        `Your Wu-Tang name is: ${data.wuTangName}`
    })
    .catch(error => {
      console.log(error)
    })
}