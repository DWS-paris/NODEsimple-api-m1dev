/* 
Import
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const cors = require('cors');
    const fetch = require('node-fetch');
//


/* 
Config
*/
    // Declarations
    const server = express();
    const port = process.env.PORT    

    // Server class
    class ServerClass{
        init(){
            // Set CORS
            server.use(cors());

            // View engine configuration
            server.set('view engine', 'ejs');

            // Static path configuration
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> Body-parser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({ extended: true }));

            // Start server
            this.launch();
        };

        serverRoutes(){
            /* 
            Front router
            */
                // Homepage
                server.get( '/', (req, res) => res.render('index', { title: 'NodeJS simple API' }) );
            //

            /*
            API router
            */
                // CRUD : create item
                server.post( '/api/post', (req, res) => {
                    // Send back data to the client
                    res.json({
                        msg: 'Post created!',
                        data: null,
                        error: null,
                        status: 201
                    })
                });
                
                // CRUD : read item by id
                server.get( '/api/post/:id', (req, res) => {
                    // Get request param id
                    const paramId = req.params['id'];
                    
                    // Start Fetch reequest
                    fetch( `http://localhost:3001/post/${paramId}`, {
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
                            res.json({
                                msg: 'Fetch error',
                                data: null,
                                error: response,
                                status: 500
                            })
                        }
                    })
                    // Get json data from response
                    .then( jsonData => {
                        // Send back json data to client
                        res.json({
                            msg: 'Post data sended!',
                            data: jsonData,
                            error: null,
                            status: 200
                        })
                    })
                    // Get Fetch request error
                    .catch( error => {
                        res.json({
                            msg: 'Fetch error',
                            data: null,
                            error: error,
                            status: 500
                        })
                    });
                })
                
                // CRUD : read all items
                server.get( '/api/post', (req, res) => {
                    // Start Fetch reequest
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
                            res.json({
                                msg: 'Fetch error',
                                data: null,
                                error: response,
                                status: 500
                            })
                        }
                    })
                    // Get json data from response
                    .then( jsonData => {
                        // Send back json data to client
                        res.json({
                            msg: 'Post data sended!',
                            data: jsonData,
                            error: null,
                            status: 200
                        })
                    })
                    // Get Fetch request error
                    .catch( error => {
                        res.json({
                            msg: 'Fetch error',
                            data: null,
                            error: error,
                            status: 500
                        })
                    });
                })
                
                // CRUD : update item by id
                server.put( '/api/post/:id', (req, res) => {
                    // Send back data to the client
                    res.json({
                        msg: 'Post send!',
                        data: null,
                        error: null,
                        status: 201
                    })
                });
                
                // CRUD : delete item by id
                server.delete( '/api/post/:id', (req, res) => {
                    // Send back data to the client
                    res.json({
                        msg: 'Post send!',
                        data: null,
                        error: null,
                        status: 201
                    })
                });
            //
        }

        launch(){
            // Init Routers
            this.serverRoutes();

            // Start server
            server.listen(port, () => console.log({ server: `http://localhost:${port}` }))
        };
    };
//


/* 
Start
*/
    new ServerClass().init();
//