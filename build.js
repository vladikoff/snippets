require('shelljs/global');

var mode = 'NOMINAL';

var particleDatabase = {};
// For each folder
var designComponents = [];

cd('database');

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

        if(mode == 'UPDATE'){

            // snippet.dom  = '<div class="xoxo '+strId+'">\n    \n</div>';
            // var domFilePath =  designComponent + '/' + 's'+snippetNumber+'-dom.html';
            // snippet.dom.to(domFilePath);
            
            // snippet.style = '*.xoxo.'+strId+' {\n    color: inherit;\n}\n';
            // var styleFilePath =  designComponent + '/' + 's'+snippetNumber+'-style.css';
            // snippet.style.to(styleFilePath);

            var generatorFilePath =  designComponent + '/' + 's'+snippetNumber+'-generator.json';
            if(test('-f', generatorFilePath)){
                snippet.generator = JSON.parse( cat(generatorFilePath) );
                
                //Update
                if( snippet.generator.id != strId ){
                    console.log( 'update [%s] to [%s]', snippet.generator.id, strId);
                    snippet.generator.id = strId;
                }
                
                if( snippet.generator.app != appId ){
                    console.log( 'update [%s] to [%s]', snippet.generator.app, appId)
                    snippet.generator.app = appId;
                }
                
                //JSON.stringify(snippet.generator, null, '    ').to(generatorFilePath);
                 
            }else{
                snippet.generator = '{\n    "id": "'+strId+'",\n    "app": "'+appId+'"\n}';
                //snippet.generator.to(generatorFilePath);
            }
            
            /*
            snippet.plugin  = '// jQueryPlugin\n(function($) {\n    \n    $.fn.'+appId+' = function(action, options) {\n\n        var settings = $.extend({\n            color: "inherit",\n            backgroundColor: "inherit"\n        }, options);\n\n\n        if (action === "start") {\n\n        }\n        \n        if (action === "stop") {\n            \n        }\n\n        return this;\n    };\n    \n}(jQuery));';
            var pluginFilePath =  designComponent + '/' + 's'+snippetNumber+'-plugin.js';
            snippet.plugin.to(pluginFilePath);

            snippet.settings = '{\n    styles: {\n        main: {\n            border: "none"\n        }\n    },\n    onClick: function(e) {\n    \n    }\n}';
            var settingsFilePath =  designComponent + '/' + 's'+snippetNumber+'-settings.json';
            snippet.settings.to(settingsFilePath);

            snippet.start = '$( "xoxo '+strId+'" ).'+appId+'("start", <%= settings %>);';
            var startFilePath =  designComponent + '/' + 's'+snippetNumber+'-start.js';
            snippet.start.to(startFilePath);

            snippet.stop  = '$( "xoxo '+strId+'" ).'+appId+'("stop");';
            var stopFilePath =  designComponent + '/' + 's'+snippetNumber+'-stop.js';
            snippet.stop.to(stopFilePath);
            */
            
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

if(mode != 'UPDATE'){
    
     var objs = JSON.stringify( particleDatabase, null, '\t');
     cd('..');
     objs.to('database.json');
    
}