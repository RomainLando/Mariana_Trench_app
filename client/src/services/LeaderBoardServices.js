

    const baseURL = 'http://localhost:9000/api/leaderboard/'


    export const getLeaderboard = () => {
        return fetch(baseURL)
        .then(res => res.json())
    }
    
    export const postLeaderboard = (payload) => {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
    
    export const deleteLeaderboard = (id) => {
        return (fetch(baseURL + id + '/delete', {
            method: 'DELETE' 
        }))
        
    }
    
    
    export const putLeaderboard = (payload, id) => {
        return fetch(baseURL + id + '/edit' , {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }








