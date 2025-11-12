const sendForm = () => {
  const form = document.querySelector('.modal');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // const text = form.querySelector('input[type=text]');
    // const tel = form.querySelector('input[type=tel]');
    // const email = form.querySelector('input[type=email]');

    const formData = new FormData(form);

    const sendObj = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email')
    }
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(sendObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error()
      }
      form.reset();
      return response.json();
    }) 
    .then((json) => console.log(json))
    .catch(error => alert(error.message)) 
  })
};

sendForm();