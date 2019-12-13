/*
Import
*/
    const fetch = require('node-fetch');
//

/*
Methods
*/
    // REGISTER: create new user
    const register = ( data ) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            
        });
    };

    // LOGIN: connect user
    const login = ( data ) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            
        });
    };
    
    // CRUD: create item
    const createItem = ( endpoint, data ) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            // Start Fetch request
            fetch( `http://localhost:3001/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            // Get Fetch response
            .then( response => {
                // Check response
                if( response.ok ){ return response.json() }
                else{ return reject(reponse) }
            })
            // Get json data from response
            .then( jsonData => resolve(jsonData))
            // Get Fetch request error
            .catch( error => reject(error));
        })
    };
    
    
    // CRUD: read item by id
    const readItem = ( endpoint ) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            
            // Start Fetch request
            fetch( `http://localhost:3001/${endpoint}`, {
                method: 'GET'
            })
            // Get Fetch response
            .then( response => {
                // Check response
                if( response.ok ){ return response.json() }
                else{ return reject(reponse) }
            })
            // Get json data from response
            .then( jsonData => resolve(jsonData))
            // Get Fetch request error
            .catch( error => reject(error));
        })
    };
    
    // CRUD: update item by id
    const updateItem = (endpoint, id) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            // Start Fetch request
            fetch( `http://localhost:3001/${endpoint}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            // Get Fetch response
            .then( response => {
                // Check response
                if( response.ok ){ return response.json() }
                else{ return reject(reponse) }
            })
            // Get json data from response
            .then( jsonData => resolve(jsonData))
            // Get Fetch request error
            .catch( error => reject(error));
        })
    };
    
    // CRUD: delete item by id
    const deleteItem = (endpoint, id) => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
            // Start Fetch request
            fetch( `http://localhost:3001/${endpoint}/${id}`, {
                method: 'DELETE'
            })
            // Get Fetch response
            .then( response => {
                // Check response
                if( response.ok ){ return response.json() }
                else{ return reject(reponse) }
            })
            // Get json data from response
            .then( jsonData => resolve(jsonData))
            // Get Fetch request error
            .catch( error => reject(error));
        })
    };
//

/*
Exports
*/
    module.exports = { register, login,createItem, readItem, updateItem, deleteItem }
//