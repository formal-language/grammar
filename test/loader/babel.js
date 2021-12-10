/**
 * Based on source of @node-loader/babel
 *
 * Source: https://github.com/node-loader/node-loader-babel
 *
 * with the following license:
 *
 * MIT License
 *
 * Copyright (c) 2020 node-loaders
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import process from 'process';
import path from 'path';
import urlModule from 'url';
import babel from '@babel/core';

const {loadOptionsAsync, transformAsync} = babel;

const isBabelConfigFile = (filename) => {
	const basename = path.basename(filename);
	return (
		basename === '.babelrc.js' ||
		basename === '.babelrc.mjs' ||
		basename === 'babel.config.js' ||
		basename === 'babel.config.mjs' ||
		basename === '.babelrc' ||
		basename === '.babelrc.cjs' ||
		basename === 'babel.config.cjs'
	);
};

const getFormatWithCertitude = (filename) => {
	return /\.cjs$/.test(filename)
		? 'commonjs'
		: /\.mjs$/.test(filename)
		? 'module'
		: undefined;
};

const getFormat = (filename) => {
	const packageType = 'module'; // TODO query package.json
	const defaultFormat = 'json'; // TODO is this correct as default?

	return (
		getFormatWithCertitude(filename) ??
		(/\.js$/.test(filename) ? packageType : defaultFormat)
	);
};

const getSourceType = (filename) => {
	// TODO replace with getFormat once getFormat queries package.json
	const format = getFormatWithCertitude(filename);

	switch (format) {
		case 'module':
			return 'module';
		case 'commonjs':
			return 'script';
		default:
			return 'unambiguous';
	}
};

const skip = (url) => {
	return /node_modules/.test(url) || /node:/.test(url);
};

export const load = async (url, context, defaultLoad) => {
	if (skip(url)) return defaultLoad(url, context, defaultLoad);

	const {source} = await defaultLoad(url, context, defaultLoad);

	const filename = urlModule.fileURLToPath(url);
	// Babel config files can themselves be ES modules,
	// but we cannot transform those since doing so would cause an infinite loop.
	if (isBabelConfigFile(filename)) {
		return {
			source,
			format: getFormat(filename),
		};
	}

	const options = await loadOptionsAsync({
		sourceType: getSourceType(filename),
		root: process.cwd(),
		rootMode: 'root',
		filename,
		configFile: true,
	});
	const transformed = await transformAsync(source, options);

	return {
		source: transformed.code,
		// TODO: look at babel config to see whether it will output ESM/CJS or other formats
		format: getFormat(filename),
	};
};
