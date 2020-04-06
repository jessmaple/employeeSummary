function body(card){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        
        <title>Employee</title>
        <style>
            .jumbotron{
                background-color: #EA4263;
                color: #fff;
            }
            
            .card-header{
                background-color: #379fee;
                color: white;
                text-align: left;
            }
        </style>
    </head>
    <body>
        
        <div class="text-center jumbotron">
            <h1 class="display-4">My Team</h1>
            
          </div>
    
          <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  
                   ${card}
                    
                </div>
              </div>
          </div>
    
          
          <script src="https://kit.fontawesome.com/b2a86741df.js" crossorigin="anonymous"></script>
    </body>
    </html>`
}

module.exports = body