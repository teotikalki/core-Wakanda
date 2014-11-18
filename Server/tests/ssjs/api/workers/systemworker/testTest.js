﻿﻿/* This is a regular JS file */var testCase = {	name: 'Tests of the System Worker API',		testConstructorExists: function () {		Y.Assert.areSame('function', typeof SystemWorker);	},		testStaticExecMethodExists: function () {		Y.Assert.areSame('function', typeof SystemWorker.exec);	},		testConstructorReturnsInstance: function () {		Y.Assert.areSame('object', typeof new SystemWorker(''));	},			testInstanceEndOfInputMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.endOfInput);	},		testInstanceGetInfosMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.getInfos);	},		testInstanceGetNumberRunningMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.getNumberRunning);	},		testInstancePostMessageMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.postMessage);	},		testInstanceSetBinaryMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.setBinary);	},		testInstanceTerminateMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.terminate);	},		testInstanceWaitMethodExists: function () {		var instance = new SystemWorker('');		Y.Assert.areSame('function', typeof instance.wait);	},		testStaticExecMethodWrongTypeEmpty: function () {		var failed = false;		try {			SystemWorker.exec();		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},		testStaticExecMethodWrongTypeNumber: function () {		var failed = false;		try {			SystemWorker.exec(42);		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},		testStaticExecMethodWrongTypeNull: function () {		var failed = false;		try {			SystemWorker.exec(null);		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},		testStaticExecMethodWrongTypeDate: function () {		var failed = false;		try {			SystemWorker.exec(new Date());		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},		testStaticExecMethodWrongTypeObject: function () {		var failed = false;		try {			SystemWorker.exec({foo: 'bar'});		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},	testStaticExecMethodWrongTypeFunction: function () {		var failed = false;		try {			SystemWorker.exec(function foo (bar) {});		}		catch (e) {			Y.Assert.areSame('Wrong type for parameter #1, expected String.', e.message);			failed = true;		}		if (!failed) Y.Assert.fail('A "wrong type" error should have been thrown.');	},		testStaticExecMethodUnknownCommand: function () {		var result = -1;		try {			result = SystemWorker.exec('supercalifragilisticexpialidocious');		}		catch (e) {			Y.Assert.fail('An exception has been thrown: ' + JSON.stringify(e));		}		Y.Assert.isNull(result, 'result should be null');		/*		Y.Assert.isObject(result, 'result should be an objet');		Y.Assert.areNotSame(0, result.exitStatus, 'exitStatus should not be 0');		Y.Assert.isObject(result.error, 'error should be an objet');		Y.Assert.areNotSame(0, result.error.length, 'length of error should not be 0');		*/	},		testStaticExecMethodKnownCommandWrongPath: function () {		var result = -1;		if (os.isWindows) var command = 'ipconfig.exe';		else var command = 'ifconfig';		try {			result = SystemWorker.exec(command, null, '/supercalifragilisticexpialidocious');		}		catch (e) {			Y.Assert.fail('An exception has been thrown: ' + JSON.stringify(e));		}		Y.Assert.isNull(result, 'result should be null');		/*		Y.Assert.isObject(result, 'result should be an objet');		Y.Assert.areNotSame(0, result.exitStatus, 'exitStatus should not be 0');		Y.Assert.isObject(result.error, 'error should be an objet');		Y.Assert.areNotSame(0, result.error.length, 'length of error should not be 0');		*/	},	testStaticExecMethodSimpleCommand: function () {		if (os.isWindows) var command = 'ipconfig.exe';		else if (os.isLinux) var command = '/sbin/ifconfig';		else var command = 'ifconfig';		if (os.isWindows) var re = /IPv4/;		else var re = /inet6/;		var result = SystemWorker.exec(command);		Y.Assert.isNotNull(result, 'The result from exec() should not be null');		Y.Assert.isInstanceOf(Buffer, result.output);		var output = result.output.toString('ascii'); // should not have to to it: on Win64 toString() or toString('utf-8') returns an empty result...		Y.Assert.areNotSame('', output, 'Output should not be empty: maybe a Buffer.toString() bug on some platforms. Need to study this further...');		var match = output.match(re);		Y.Assert.isNotNull(match, output);		Y.Assert.areSame(1, match.length, output);	}};