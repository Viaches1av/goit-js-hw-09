document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  const saveToLocalStorage = () => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  };

  const uploadForm = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const { email, message } = JSON.parse(savedData);
      emailInput.value = email;
      messageInput.value = message;
    }
  };

  uploadForm();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    if (!email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    console.log('Form data:', { email, message });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  });

  form.addEventListener('input', saveToLocalStorage);
});
