require('shelljs/global');

var particleDatabase = {};

// For each folder
ls('*').forEach(function(snippetSetName) {
    if (test('-d', directory) ){ // yes this is a directory with snippets.
        
        var snippetCount = ls(snippetSetName + '/*').length / 4;
    
        var particleObject = {};
        particleDatabase[snippetSetName] = particleObject;
    
         
        particleObject.html = cat('.html');
        particleObject.css  = cat('.css');
        particleObject.js   = cat('.js');
        particleObject.json = cat('.json');
        
        var obj = JSON.parse(str);
        
        response[file] = obj; 
 
   
    } // is snippet dir?
});

var objs = JSON.stringify(particleDatabase, null, '\t');
objs.to('database.json')