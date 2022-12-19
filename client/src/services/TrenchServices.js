const baseURL = 'http://localhost:9000/api/trench/'

const TrenchServices = {
    getTrench () {
        return fetch(baseURL)
        .then(res => res.json())
}
}

export default TrenchServices;

// export const postTrench = (payload) => {
//     return fetch(baseURL, {
//         method: 'POST',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }


// export const deleteTrench = (id) => {
//     return (fetch(baseURL + id + '/delete', {
//         method: 'DELETE' 
//     }))
    
// }


// export const putTrench = (payload, id) => {
//     return fetch(baseURL + id + '/edit' , {
//         method: 'PUT',
//         body: JSON.stringify(payload),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     .then(res => res.json())
// }
