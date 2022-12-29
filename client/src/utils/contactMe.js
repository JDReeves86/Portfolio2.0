export const contactMe = async (input) => {
  const response = await fetch("/netlify/functions/nodemail.js", {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    return response.json()
  }
};
