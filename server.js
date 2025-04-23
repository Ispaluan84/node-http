const infoWeb = require('./data.js')

const http = require('node:http')
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); 
    res.writeHead(200);                           
    res.end(`
        <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${infoWeb.title}</title>
                    <style>
                        h1 {
                        background-color: gray;
                        color: blue;
                        padding: 10px;
                        display: flex;
                        justify-content: center;
                        }
                        h2 {
                            background-color: gray;
                            color:blue;
                            padding: 10px;
                            display: flex;
                            justify-content: center;
                        }
                        
                        p {
                            background-color: gray;
                            font-sixe: 16px;
                            color:black;
                            padding: 10px;
                            display: flex;
                            justify-content: center;
                        }
                    </style>
                </head>
                <body>
                    <h1>${infoWeb.title}</h1>
                    <h2>${infoWeb.subtitle}</h2>
                    <p>${infoWeb.description}</p>
                </body>
            </html>
        `);

});

server.listen(0, () => {
    console.log(`Servidor en funcionamiento en el puerto http://localhost:${server.address().port}`)
})
