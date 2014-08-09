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
    
        //for(var snippetNumber=0; snippetNumber<snippetCount; snippetNumber++){
        for(var snippetNumber=0; snippetNumber<3; snippetNumber++){
            
            var strId = 'xoxo-'+designComponent +'s'+ snippetNumber;
            var appId = 'levelApp'+ +designComponent.replace(/^[a-z]/,'')+snippetNumber;
            
            var snippet = {};
            
            if(0){
            
            snippet.dom  = '<div class="xoxo '+strId+'">\n    \n</div>';
            var domFilePath =  designComponent + '/' + 's'+snippetNumber+'-dom.html';
            if(1){ // if(test("-f",domFilePath)) {
                snippet.dom  .to(domFilePath);  //= cat(domFilePath);
            }
            
            snippet.plugin  = '// jQueryPlugin\n(function($) {\n    \n    $.fn.'+appId+' = function(action, options) {\n\n        var settings = $.extend({\n            color: "inherit",\n            backgroundColor: "inherit"\n        }, options);\n\n\n        if (action === "start") {\n\n        }\n        \n        if (action === "stop") {\n            \n        }\n\n        return this;\n    };\n    \n}(jQuery));';
            var pluginFilePath =  designComponent + '/' + 's'+snippetNumber+'-plugin.js';
            if(1){ // if(test("-f",pluginFilePath)) {
                snippet.plugin  .to(pluginFilePath);  //= cat(pluginFilePath);
            }
            
            snippet.generator = '{\n    "id": "'+strId+'",\n    "app": "'+appId+'"\n}';
            var generatorFilePath =  designComponent + '/' + 's'+snippetNumber+'-generator.json';
            if(1){ // if(test("-f",generatorFilePath)) {
                snippet.generator .to(generatorFilePath);  //= cat(generatorFilePath);
            }
            
            snippet.settings = '{\n    styles: {\n        main: {\n            border: "none"\n        }\n    },\n    onClick: function(e) {\n    \n    }\n}';
            var settingsFilePath =  designComponent + '/' + 's'+snippetNumber+'-settings.json';
            if(1){ // if(test("-f",settingsFilePath)) {
                snippet.settings .to(settingsFilePath);  //= cat(settingsFilePath);
            }
            
            snippet.start = '$( "xoxo '+strId+'" ).'+appId+'("start", <%= settings %>);';
            var startFilePath =  designComponent + '/' + 's'+snippetNumber+'-start.js';
            if(1){ // if(test("-f",startFilePath)) {
                snippet.start .to(startFilePath);  //= cat(startFilePath);
            }
            
            snippet.stop  = '$( "xoxo '+strId+'" ).'+appId+'("stop");';
            var stopFilePath =  designComponent + '/' + 's'+snippetNumber+'-stop.js';
            if(1){ // if(test("-f",stopFilePath)) {
                snippet.stop  .to(stopFilePath);  //= cat(stopFilePath);
            }
            
            snippet.style = '*.xoxo.'+strId+' {\n    color: inherit;\n}\n';
            var styleFilePath =  designComponent + '/' + 's'+snippetNumber+'-style.css';
            if(1){ // if(test("-f",styleFilePath)) {
                snippet.style .to(styleFilePath);  //= cat(styleFilePath);
            } 
            
            }else{
            
            snippet.dom  = '';
            var domFilePath =  designComponent + '/' + 's'+snippetNumber+'-dom.html';
            if(test("-f", domFilePath)) {
                snippet.dom = cat(domFilePath);
            }
            
            snippet.plugin  = '';
            var pluginFilePath =  designComponent + '/' + 's'+snippetNumber+'-plugin.js';
            if(test("-f", pluginFilePath)) {
                snippet.plugin = cat(pluginFilePath);
            }
            
            snippet.generator = '';
            var generatorFilePath =  designComponent + '/' + 's'+snippetNumber+'-generator.json';
            if(test("-f", generatorFilePath)) {
                snippet.generator = JSON.parse( cat(generatorFilePath) );
            }
            
            snippet.settings = '';
            var settingsFilePath =  designComponent + '/' + 's'+snippetNumber+'-settings.json';
            if(test("-f", settingsFilePath)) {
                snippet.settings = cat(settingsFilePath);
            }
            
            snippet.start = '';
            var startFilePath =  designComponent + '/' + 's'+snippetNumber+'-start.js';
            if(test("-f", startFilePath)) {
                snippet.start = cat(startFilePath);
            }
            
            snippet.stop  = '';
            var stopFilePath =  designComponent + '/' + 's'+snippetNumber+'-stop.js';
            if(test("-f", stopFilePath)) {
                snippet.stop = cat(stopFilePath);
            }
            
            snippet.style = '';
            var styleFilePath =  designComponent + '/' + 's'+snippetNumber+'-style.css';
            if(test("-f", styleFilePath)) {
                snippet.style = cat(styleFilePath);
            }
            
            } // el
            
            

            potentialComponents[snippetNumber] = snippet;
        };
        var particleObject = {};   
 });

var objs = JSON.stringify(particleDatabase, null, '\t');
objs.to('database.json');