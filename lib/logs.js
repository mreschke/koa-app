'use strict';

const moment = require('moment')();

class Log
{

	/**
	 * Create a new instance
	 * @param  {string} logName
	 * @param  {string} logRotate
	 * @param  {string} logPath
	 */
	constructor(logName, logRotate, logPath) {
		this._name = logName;
		this._rotate = logRotate;
		this._path = logPath;
	}

	/**
	 * Get name
	 * @return {string} log filename with proper dates and extension
	 */
	get name() {
		if (this._rotate == 'monthly') {
			// Monthly
			return moment.format('YYYY-MM') + '_' + this._name + '.log';
		} else {
			// Daily
			return moment.format('YYYY-MM-DD') + '_' + this._name + '.log';
		}
	}

	info(message) {
		console.log(message);
	}

	warn(message) {
		console.log(message);
	}

	error(message) {
		console.error(message);
	}

}

module.exports = Log;
