/*
Import
*/
const fetch = require('node-fetch');
//

/*
Methods
*/
    // CRUD: create item
    const createItem = () => {
    
    };
    
    // CRUD: read all items
    const readAllItems = () => {
        // Return new Promise
        return new Promise( (resolve, reject) => {
        
            // Start Fetch request
            fetch( 'http://localhost:3001/post', {
                method: 'GET'
            })
            // Get Fetch response
            .then( response => {
                // Check response
                if( response.ok ){
                    // Extraire les données en JSON
                    return response.json();
                }
                else{
                    return reject(reponse);
                }
            })
            // Get json data from response
            .then( jsonData => {
                return resolve(jsonData);
            })
            // Get Fetch request error
            .catch( error => {
                return reject(error);
            });
        })
        
    };
    
    // CRUD: read item by id
    const readItem = () => {
    
    };
    
    // CRUD: update item by id
    const updateItem = () => {
    
    };
    
    // CRUD: delete item by id
    const deleteItem = () => {
    
    };
//

/*
Exports
*/
    module.exports = { createItem, readAllItems, readItem, updateItem, deleteItem }
//