"use strict";
dcos.extend('os', {
	sandbox: {},
	apps: {},
	register : function(appId, creator) {
		this.apps[appId] = {
			creator : creator,
			instance : null
		};
	},
	start : function(appId) {
		var app = this.apps[appId];
		app.instance = app.creator(this.sandbox);
		try {
			app.instance.init();
		} catch (e) {
			console && console.error(e.stack);
		}
	},
	stop : function(appId) {
		var data = this.apps[appId];
		if(!data.instance)
			return;
		data.instance.kill();
		data.instance = null;
	},
	boot : function() {
		this.sandbox = new dcos.broker();
		this.sandbox.init();
		this.sandbox.transition = new dcos.transition();
		this.sandbox.storage = new dcos.storage();
		this.sandbox.sync = new dcos.sync();
		this.sandbox.storage.init();
		this.sandbox.sync.init();
		for (var i in this.apps) {
			this.apps.hasOwnProperty(i) && this.start(i);
		}
		this.sandbox.emit({type: "body:load", data: {}});
	},
	halt : function() {
		for ( var i in this.apps) {
			this.apps.hasOwnProperty(i) && this.stop(i);
		}
	}
});
dcos.apps = new dcos.os();
