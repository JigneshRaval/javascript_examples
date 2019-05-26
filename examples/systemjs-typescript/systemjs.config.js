/**
 * System configuration for Typescript and RxJs
 */
(function (global) {
    System.config({
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        paths: {
            // paths serve as alias
            'local:': './app/',
            'npm:': 'https://unpkg.com/'
        },
        // map tells the System loader where to look for things
        map: {
            'app': 'app',
            'main': 'app/main.ts',
            // angular bundles load from local folder
            // '@angular': 'app/@angular',

            // angular bundles load from https://unpkg.com/
            /* '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js', */

            // "crypto": "@empty",
            // 'rxjs': 'npm:rxjs',
            'rxjs': 'rxjs', // Load RxJs from local file system
            // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

            // typescript for compilation in the browser with latest version of system.src.js
            'ts': './plugin-typescript.js',
            // 'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
            // 'typescript': 'npm:typescript@2.2.1/lib/typescript.js'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': {
                defaultExtension: 'ts',
                main: './main.ts'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            rxjs: {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs/operators': {
                main: 'index.js',
                defaultExtension: 'js'
            },
        },

    });
})(this);
