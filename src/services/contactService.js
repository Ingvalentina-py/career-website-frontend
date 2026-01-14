export const sendContact = async (data) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error");
  return res.json();
};
