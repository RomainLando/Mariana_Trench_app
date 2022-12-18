const baseURL = 'http://localhost:9000/api/questions/'


export const getQuestions = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

// export const postQuestions = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }


// export const deleteQuestions = (id) => {
//     return (fetch(baseURL + id + '/delete', {
//         method: 'DELETE' 
//     }))
    
// }


// export const putQuestions = (payload, id) => {
//     return fetch(baseURL + id + '/edit' , {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }
