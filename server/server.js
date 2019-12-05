/* 
Import
*/
    // NodeJS
    require('dotenv').config();
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    const cors = require('cors');
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
                    // Send back data to the client
                    res.json({
                        msg: 'Post send!',
                        data: null,
                        error: null,
                        status: 200
                    })
                });
                
                // CRUD : read all items
                server.get( '/api/post', (req, res) => {
                    // Send back data to the client
                    res.json({
                        msg: 'Posts send!',
                        data: null,
                        error: null,
                        status: 200
                    })
                });
                
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