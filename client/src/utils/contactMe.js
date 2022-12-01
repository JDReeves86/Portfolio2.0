export const contactMe = (input) => {
    console.log('contactme called')
  return fetch('/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
};
