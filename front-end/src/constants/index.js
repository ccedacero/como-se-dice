export const payload = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.token}`,
  },
};
