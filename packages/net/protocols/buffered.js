jsio('from base import *');

jsio('import logging');
jsio('from net.interfaces import Protocol');
jsio('from net.buffer import Buffer');

var logger = logging.getLogger('Buffered');

exports.BufferedProtocol = Class(Protocol, function(supr) {

	this.init = function() {
		this.buffer = new Buffer();
	}

	// Overwrite this instead of dataReceived in base classes
	this.bufferUpdated = function() {}

	this.dataReceived = function(data) {
		this.buffer.append(data);
		this.bufferUpdated();
	}

})