var path = require('canonical-path');
var Package = require('dgeni').Package;


// Project configuration.
const projectRootDir = path.resolve(__dirname, '../..');
const sourceDir = path.resolve(projectRootDir, 'node_modules/@plentymarkets/terra-components/index.d.ts');
const outputDir = path.resolve(__dirname, '../build');
const templateDir = path.resolve(__dirname, './templates');


// Create and export a new Dgeni package
// We will use Gulp later on to generate that package
// Think of packages as containers, our 'myDoc' package contains other packages
// which themselves include processors, services, templates...
const apiDocsPackage = new Package('myDoc', [
    require('dgeni-packages/jsdoc'),
    require('dgeni-packages/nunjucks'),
    require('dgeni-packages/typescript')
])

// Processor that filters out symbols that should not be shown in the docs.
    .processor(require('./processors/docs-private-filter'))

    // Processor that appends categorization flags to the docs, e.g. `isDirective`, `isNgModule`, etc.
    .processor(require('./processors/categorizer'))

    // Processor to group components into top-level groups such as "Tabs", "Sidenav", etc.
    .processor(require('./processors/component-filter'))

    .config(function(log) {
        log.level = 'info';
    })

// Configure the processor for reading files from the file system.
    .config(function(readFilesProcessor, writeFilesProcessor) {
        readFilesProcessor.basePath = sourceDir;
        readFilesProcessor.$enabled = false; // disable for now as we are using readTypeScriptModules

        writeFilesProcessor.outputFolder = outputDir;
        console.log(outputDir);
    })

    // workaround to handle multiple @description and @deprecated tags due to setter/getter definitions
    .config(function(parseTagsProcessor) {
        const descTag = parseTagsProcessor.tagDefinitions.find( function(tagDef) { return tagDef.name === 'description'; });
        descTag.multi = true;

        const deprecatedTag = parseTagsProcessor.tagDefinitions.find( function(tagDef) { return tagDef.name === 'deprecated'; });
        deprecatedTag.multi = true;
    })

    // Configure the output path for written files (i.e., file names).
    .config(function(computePathsProcessor) {
        computePathsProcessor.pathTemplates = [{
            docTypes: ['componentGroup'],
            pathTemplate: '${name}',
            outputPathTemplate: '${name}.html'
        }];
    })

    // Configure custom JsDoc tags.
    .config(function(parseTagsProcessor) {
        parseTagsProcessor.tagDefinitions = parseTagsProcessor.tagDefinitions.concat([
            {name: 'docs-private'}
        ]);
    })

    // Configure the processor for understanding TypeScript.
    .config(function(readTypeScriptModules) {
        console.log(sourceDir);
        readTypeScriptModules.basePath = projectRootDir;
        readTypeScriptModules.ignoreExportsMatching = [/^_/];

        readTypeScriptModules.hidePrivateMembers = true;

        readTypeScriptModules.sourceFiles = [
            sourceDir
        ];

        readTypeScriptModules.outputFolder = outputDir;
    })


    // Configure processor for finding nunjucks templates.
    .config(function(templateFinder, templateEngine) {
        console.log('TemplateDir: ', templateDir);
        // Where to find the templates for the doc rendering
        templateFinder.templateFolders = [templateDir];

        // Standard patterns for matching docs to templates
        templateFinder.templatePatterns = [
            '${ doc.template }',
            '${ doc.id }.${ doc.docType }.template.html',
            '${ doc.id }.template.html',
            '${ doc.docType }.template.html',
            '${ doc.id }.${ doc.docType }.template.js',
            '${ doc.id }.template.js',
            '${ doc.docType }.template.js',
            '${ doc.id }.${ doc.docType }.template.json',
            '${ doc.id }.template.json',
            '${ doc.docType }.template.json',
            'common.template.html'

        ];

        // dgeni disables autoescape by default, but we want this turned on.
        templateEngine.config.autoescape = true;

        // Nunjucks and Angular conflict in their template bindings so change Nunjucks
        templateEngine.config.tags = {
            variableStart: '{$',
            variableEnd: '$}'
        };
    });

module.exports = apiDocsPackage;
