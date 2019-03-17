"use strict";
dcos.apps.register('canvas', function(sandbox){
    var app;
    var services = {
        hadoop: {
            code: "Hd",
            name: "Hadoop"
        },
        rails: {
            code: "Rl",
            name: "Rails"
        },
        chronos: {
            code: "Ch",
            name: "Chronos"
        },
        storm: {
            code: "St",
            name: "Storm"
        },
        spark: {
            code: "Sp",
            name: "Spark"
        }
    };
    return {
        init: function(){
			app = this;
            app.storage = new dcos.storage();
            app.storage.init();
            app.init_template();
            app.sync = new dcos.sync();
            app.sync.init();
			sandbox.on([".add-server:click"], app.add_server);
			sandbox.on([".destroy-server:click"], app.destroy_server);
			sandbox.on([".add-service:click"], app.add_service);
			sandbox.on([".destroy-service:click"], app.destroy_service);
			sandbox.on(["collection.ready"], app.render);
        },
        init_template: function(){
            app.template = new dcos.xslt();
            app.template.init({type: "list", name: "servers"});
            app.template.broker.on(['update'], app.init_collection);
            app.template.fetch();
        },
        init_collection: function(event){
            app.sync.get('/db/servers.json', function(data){
                app.collection = JSON ? JSON.parse(data) : data;
                sandbox.emit({type: "collection.ready"});
            });
        },
        add_server: function(event){
            var id = app.storage.uuid();
            app.collection.unshift({id : id, apps : []});
            app.render();
        },
        destroy_server: function(event){
            var server = app.collection.pop();
            if(server.apps.length){
                for(var i = 0; i < server.apps.length; i++){
                    var getAttribute = function(type){
                        return server.apps[i].type;
                    }
                    app.add_service({data: {target : {getAttribute : getAttribute}}});
                }
            }
            app.render();
        },
        add_service: function(event){
            var type = event.data.target.getAttribute('service');
            var service = services[type];
            var i = app.collection.length;
            var n = -1;
            while(i--){
                if(app.collection[i].apps.length < 1){
                    n = i;
                    break;
                }
            }
            if(n==-1){
                i = app.collection.length;
                while(i--){
                    if(app.collection[i].apps.length < 2){
                        n = i;
                        break;
                    }
                }
            }
            if(n != -1){
                app.collection[n].apps.unshift(app.service_meta(type, service));
                app.render();
            }
        },
        service_meta: function(type, service){
            return {
                type: type,
                code: service.code,
                name: service.name,
                created_at: ((new Date()).getTime())
            };
        },
        destroy_service: function(event){
            var type = event.data.target.getAttribute('service');
            var service = services[type];
            for(var i = 0; i < app.collection.length; i++){
                for(var j = 0; j < app.collection[i].apps.length; j++){
                    if(type == app.collection[i].apps[j].type){
                        app.collection[i].apps.splice(j, 1);
                        app.render();
                        return this;
                    }
                }
            }
        },
        render: function(event){
            var i = app.collection.length;
            while(i--){
                for(var j = 0; j < app.collection[i].apps.length; j++){
                    app.collection[i].apps[j].age = app.time_to_age(app.collection[i].apps[j].created_at);
                }
            }
            var html = app.template.transform(app.collection).getHTML();
            var stage = Sizzle('.server-canvas-content')[0];
            stage.innerHTML = '';
            stage.appendChild(html);
        },
        time_to_age: function(t){
            var second = 1000;
            var minute = 60 * second;
            var hour = 60 * minute;
            var day = 24 * hour;
            var week = 7 * day;
            var year = 364.25 * day;
            var td = (new Date()).getTime() - t;
            if(td < minute){
                return Math.round(td/second) + ' seconds ago';
            }
            if(td < hour){
                return Math.round(td/minute) + ' minutes ago';
            }
            if(td < day){
                return Math.round(td/hour) + ' hours ago';
            }
            if(td < week){
                return Math.round(td/day) + ' days ago';
            }
            if(td < year){
                return Math.round(td/week) + ' weeks ago';
            }
            return Math.round(td/year) + ' years ago';
        }
    }
});
