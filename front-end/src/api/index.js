const token = localStorage.getItem('token');

export const fetchStats = async () => {
    const payLoad = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    };
    fetch("http://localhost:3000/total", payLoad)
        .then((r) => r.json())
}

//   export const fetchPosts = (token) => {
//       return fetch("http://localhost:3000/posts", payLoad)
//         .then((r) => r.json())
// }