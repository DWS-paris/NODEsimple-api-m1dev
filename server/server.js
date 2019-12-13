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

    // Inner
    const { createItem, readItem, updateItem, deleteItem } = require('./servives/fetch.service');
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

                // Add post
                server.get( '/add-post', (req, res) => res.render('add-post', { title: 'NodeJS simple API' }) );

                // Single post: call the route like this: localhost:2767/post?id=1
                server.get( '/post', (req, res) => res.render('post', { title: 'NodeJS simple API' }) );

                // Edit post: call the route like this: localhost:2767/edit-post?id=1
                server.get( '/edit-post', (req, res) => res.render('edit-post', { title: 'NodeJS simple API' }) );

                // Register page
                server.get( '/register', (req, res) => res.render('register', { title: 'NodeJS simple API' }) );
            //

            /*
            API router
            */
                // CRUD : create item
                server.post( '/api/post', (req, res) => {
                    // Get data from rrequest body
                    const bodyData = req.body;
                
                    // Use the service method
                    createItem( 'post', bodyData )
                    // => Get the Promise.resolve() data
                    .then( data => {
                        res.json({
                            msg: 'Data created!',
                            data: data,
                            error: null,
                            status: 201
                        })
                    })
                    // => Get the Promise.reject() data
                    .catch( error => {
                        res.json({
                            msg: 'Data not created!',
                            data: null,
                            error: error,
                            status: 500
                        })
                    })
                });
                
                // CRUD : read item by id
                server.get( '/api/post/:id', (req, res) => {

                    // Use the service method
                    readItem(`post/${req.params['id']}`)
                    // => Get the Promise.resolve() data
                    .then( data => {
                        res.json({
                            msg: 'Data send!',
                            data: data,
                            error: null,
                            status: 200
                        })
                    })
                    // => Get the Promise.reject() data
                    .catch( error => {
                        res.json({
                            msg: 'Data not send!',
                            data: null,
                            error: error,
                            status: 500
                        })
                    })
                })

                // CRUD : read all items
                server.get( '/api/post', (req, res) => {
                    // Use the service method
                    readItem('post')
                    // => Get the Promise.resolve() data
                    .then( data => {
                        res.json({
                            msg: 'Data send!',
                            data: data,
                            error: null,
                            status: 200
                        })
                    })
                    // => Get the Promise.reject() data
                    .catch( error => {
                        res.json({
                            msg: 'Data not send!',
                            data: null,
                            error: error,
                            status: 500
                        })
                    })
                })
                
                // CRUD : update item by id
                server.put( '/api/post/:id', (req, res) => {
                    // Get data from rrequest body
                    const bodyData = req.body;
                
                    // Use the service method
                    updateItem( 'post', bodyData )
                    // => Get the Promise.resolve() data
                    .then( data => {
                        res.json({
                            msg: 'Data updated!',
                            data: data,
                            error: null,
                            status: 201
                        })
                    })
                    // => Get the Promise.reject() data
                    .catch( error => {
                        res.json({
                            msg: 'Data not updated!',
                            data: null,
                            error: error,
                            status: 500
                        })
                    })
                });
                
                // CRUD : delete item by id
                server.delete( '/api/post/:id', (req, res) => {
                    // Use the service method
                    deleteItem( 'post', req.params['id'] )
                    // => Get the Promise.resolve() data
                    .then( data => {
                        res.json({
                            msg: 'Data deleted!',
                            data: data,
                            error: null,
                            status: 200
                        })
                    })
                    // => Get the Promise.reject() data
                    .catch( error => {
                        res.json({
                            msg: 'Data not deleted!',
                            data: null,
                            error: error,
                            status: 500
                        })
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