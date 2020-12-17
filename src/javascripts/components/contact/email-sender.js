export const sendFeedback = (templateId, variables) => {
  return window.emailjs
    .send ('website_emailer', templateId, variables)
    .then (res => {
      return res.text;
    })
    .catch (err => {
      return err.text;
    });
};


export const refreshRecaptcha = () => {
  window.grecaptcha.reset();
}