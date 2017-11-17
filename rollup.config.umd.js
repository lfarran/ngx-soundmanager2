import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript';
import {
    nameLibrary,
    PATH_SRC,
    PATH_DIST
} from './config-library.js';
export default {
    entry: PATH_SRC + nameLibrary + '.ts',
    format: 'umd',
    moduleName: nameLibrary,
    external: [
        '@angular/core',
        "@angular/platform-browser"
    ],
    sourceMap:true,
    dest:PATH_DIST + nameLibrary + ".umd.js",
    plugins: [
        angular(
            {
                preprocessors: {
                    template: template => template
                }
            }
        ),
        typescript({
            typescript:require('typescript')
        }),
        resolve({
            module: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**',
        })
    ],
    onwarn: warning => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) {
            console.error('onwarn:', warning);
            return;
        }
    }
};
