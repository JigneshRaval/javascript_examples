/**
 * System configuration for Angular v7.2.15
 */
(function (global) {
    System.config({
        // baseURL: ".",
        warnings: true,
        // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
        /* transpiler: "plugin-typescript",
        typescriptOptions: {
            "target": "esnext", // do not downlevel future ECMAScript syntax apart from decorators
            "module": "system" // transpile import and export statements, emitting as `System.register`
        }, */
        transpiler: 'ts',
        typescriptOptions: {
            tsconfig: true
        },
        /* meta: {
            'typescript': {
                "exports": "ts"
            }
        }, */
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
            // 'rxjs': 'app/rxjs-5.5.12', // Load RxJs from local file system
            // 'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

            // typescript for compilation in the browser with latest version of system.src.js
            // 'ts': 'plugin-typescript/plugin.js',
            // "plugin-typescript": "./js/plugin-typescript",
            'ts': './js/plugin-typescript',
            // 'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
            // 'typescript': './node_modules/typescript/lib'
            'typescript': './js/typescript'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            'app': {
                defaultExtension: 'ts',
                main: './main.ts'
            },
            /* "plugin-typescript": {
                main: "./plugin.js",
                defaultExtension: 'js',
            }, */
            "typescript": {
                main: "./typescript.js",
                defaultExtension: 'js',
            },
            "ts": {
                main: "./plugin.js",
                defaultExtension: 'js',
            }
            /* '@angular/core': {
                defaultExtension: 'js',
                main: './core.umd.js'
            },
            '@angular/common': {
                defaultExtension: 'js',
                main: './common.umd.js'
            },
            '@angular/compiler': {
                defaultExtension: 'js',
                main: './compiler.umd.js'
            },
            '@angular/platform-browser': {
                defaultExtension: 'js',
                main: './platform-browser.umd.js'
            },
            '@angular/platform-browser-dynamic': {
                defaultExtension: 'js',
                main: './platform-browser-dynamic.umd.js'
            },
            '@angular/http': {
                defaultExtension: 'js',
                main: './http.umd.js'
            },
            '@angular/router': {
                defaultExtension: 'js',
                main: './router.umd.js'
            },
            '@angular/forms': {
                defaultExtension: 'js',
                main: './forms.umd.js'
            }, */
            // Load RxJs from local file system
            /* rxjs: {
                defaultExtension: 'ts'
            },
            rxjs: {
                main: './Rx.ts',
                defaultExtension: 'ts'
            }, */
            /* rxjs: {
                defaultExtension: 'js'
            },
            rxjs: {
                main: 'index.js',
                defaultExtension: 'js'
            },
            'rxjs/operators': {
                main: 'index.js',
                defaultExtension: 'js'
            }, */
        },

    });
})(this);
