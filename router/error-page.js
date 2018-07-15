export default ( error ) => {

    const { message, stack } = error

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Internal Server Error</title>
            <style>
                html{
                    font-size: 62.5%;
                }
                body{
                    background: #212121;
                    font-size: 1.6rem;
                }
                #message{
                    color: #f44336;
                    font-size: 1.8rem;
                }
                #stack{
                    color: #ef5350;
                    font-size: 1.4rem;
                }
                h1{
                    color: #546E7A;
                }
                p{
                    font-family: Consolas,monospace;
                }
            </style>
        </head>
        <body>
            <h1>Internal Server Error</h1>
            <p id="message">${message}</p>
            <p id="stack">${stack.replace( /\n/g, '<br />' ).replace( /\s\s/g, '&nbsp;&nbsp;' )}</p>
        </body>
        </html>
    `

}
