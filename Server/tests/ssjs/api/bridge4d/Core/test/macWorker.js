﻿var envVars = {};try {	envVars = require('unitTest').getenv();}catch (e) {}var server4D = envVars.BUILD_TEST_DIR + '/4D Server.app/Contents/MacOS/4D Server';var base4D = application.getFolder('path') + 'Resources/testWakandaBridge.4dbase/testWakandaBridge.4DB'; var script = application.getFolder('path') + 'scriptMac.sh'; var output = '';var theWorker = new SystemWorker(script + ' "' + server4D + '" "'  + base4D + '"');/*theWorker.onmessage = function() {    output += arguments[0].data.toString();};theWorker.onterminated = function() {	exitWait();}*/wait();