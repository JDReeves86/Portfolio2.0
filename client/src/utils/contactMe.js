export const contactMe = async (input) => {
  const response = await fetch("/netlify/functions/nodemail.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });
  if (response.ok) {
    return response.json()
  }
};
