require('shelljs/global');
var traceur = require('traceur');


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

        }else{

            // THIS IS A LIVE OBJECT.
            /*
                It would be best to consider it as a kind of win32 registry
                Over at HTML world, some of the stuff from here will be interpolated in.
                Note that HTML version CAN'T use JavaScript, as it maybe turned off.
                Hybrid/polyfilled solutions will be available,
                but those are on case-by-case and nice to have.

                DO TWO THINGS, and do each well.
                HTML and JS.
                Later a polyfilled JS program with IE6-ish support can give the HTML a boost.
            */
            snippet.configuration = '';
            var configurationFilePath =  designComponent + '/' + 's'+snippetNumber+'-configuration.json';
            if(test("-f", configurationFilePath)) {
                snippet.configuration = JSON.parse( cat(configurationFilePath) );
            }



            // THE HEART OF THE MATTER
            snippet.plugin  = '';
            var pluginFilePath =  designComponent + '/' + 's'+snippetNumber+'-plugin.js';
            if(test("-f", pluginFilePath)) {
                var contents = cat(pluginFilePath);

                var result = traceur.compile(contents, {
                    filename: pluginFilePath,
                    sourceMaps: true,
                    // etc other Traceur options
                    modules: 'commonjs'
                });

                if (result.error) {
                    throw result.error;
                }

                snippet.plugin result.js;
            }


            /*
                This is the fallback strategy, IE6 and other "marvels".
                JavaScript alone will go a long way back, but not all the way back.
                IT IS ALSO CRITICAL to understand that <NOSCRIPT/> is VERY IMPORTANT,
                more important than it has been in the past. NOSCRIPT means more batteries,
                coller CPU and great experience on cheap phones.
                
                This is the BIG BONUS that MODEL based setup beings us.
                HTML/NOSCRIPT can cacpture the essence, JS/jQ the rest.
            
            */
            snippet.html  = '';
            var htmlFilePath =  designComponent + '/' + 's'+snippetNumber+'-html.html';
            if(test("-f", htmlFilePath)) {

                snippet.html = cat(htmlFilePath);
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