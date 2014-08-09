require('shelljs/global');

var particleDatabase = {};

// For each folder
var designComponents = [];

ls('l*').forEach(function(designComponent) {
    if (test('-d', designComponent) ){
        
        // yes this is a directory with snippets, yay!
        designComponents.push(designComponent)
        
    }
});
designComponents.sort();
console.log('Encountered %s Component Sets', designComponents.length)

designComponents.forEach(function(designComponent, designComponentIndex) {
         
        potentialComponents = []
        particleDatabase[designComponent] = potentialComponents;
        
        // the counter counts 'snip-0-code.html' files as those are the absolute minimum required for a snippet.
        var snippetCount = ls(designComponent + '/*code.html').length;
        console.log('Level %s contains a set of %d.', designComponent, snippetCount);
    
        for(var snippetNumber=0; snippetNumber<snippetCount; snippetNumber++){
            var snippet = {};
            
            snippet.code  = "";
            var codeFilePath =  designComponent + '/' + 'snip-'+snippetNumber+'-code.html';
            if(test("-f",codeFilePath)) {
                snippet.code  = cat(codeFilePath);
            }
            
            snippet.model = "";
            var modelFilePath =  designComponent + '/' + 'snip-'+snippetNumber+'-model.json';
            if(test("-f",modelFilePath)) {
                snippet.model = cat(modelFilePath);
            }
            
            snippet.start = "";
            var startFilePath =  designComponent + '/' + 'snip-'+snippetNumber+'-start.js';
            if(test("-f",startFilePath)) {
                snippet.start = cat(startFilePath);
            }
            
            snippet.stop  = "";
            var stopFilePath =  designComponent + '/' + 'snip-'+snippetNumber+'-stop.js';
            if(test("-f",stopFilePath)) {
                snippet.stop  = cat(stopFilePath);
            }
            
            snippet.style = "";
            var styleFilePath =  designComponent + '/' + 'snip-'+snippetNumber+'-style.css';
            if(test("-f",styleFilePath)) {
                snippet.style = cat(styleFilePath);
            }
            
            
            potentialComponents[snippetNumber] = snippet;
        };
        
        
    
        var particleObject = {};
        
        
        
        
    
         
       





   
 });

var objs = JSON.stringify(particleDatabase, null, '\t');
objs.to('database.json');