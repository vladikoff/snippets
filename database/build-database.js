require('shelljs/global');

var response = {};

// For each folder
ls('*').forEach(function(directory) {
    if (test('-d', directory) ){ // yes this is a directory with snippets.
        
        var snippetCount = ls(directory + '/*').length / 4;
    
    
    
    
         
        var str = cat(particle);
        var obj = JSON.parse(str);
        
        response[file] = obj; 
 
   
    } // is snippet dir?
});

var objs = JSON.stringify(response, null, '\t');
objs.to('database.json')