var http=require('http')
var fs=require('fs')

http.createServer(function (req,res){

    if(req.url==='/'){

fs.readFile('navbar.component.html',function (err,data){
    
    res.writeHead(200,{'content-Type':'text/html'})
    res.write(data)
    res.end()
})
    }
else if(req.url==='/signupaction'){
    res.write('action')
    res.end()


}

}).listen(7000)
