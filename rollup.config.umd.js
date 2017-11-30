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
    input: PATH_SRC + nameLibrary + '.ts',
    name: nameLibrary,
    globals: {
        'soundManager': 'soundmanager2',
        '@angular/core': '@angular/core'
    },
    external: [
        'soundmanager2',
        '@angular/core'
    ],
    sourcemap:true,
    output: {
        file: PATH_DIST + nameLibrary + ".umd.js",
        format: 'umd'
    },
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
    /*onwarn: warning => {
        const skip_codes = [
            'THIS_IS_UNDEFINED',
            'MISSING_GLOBAL_NAME'
        ];
        if (skip_codes.indexOf(warning.code) != -1) {
            console.error('onwarn:', warning);
            return;
        }
    }*/
};
