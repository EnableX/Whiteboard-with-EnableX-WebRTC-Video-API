///////////////////////////////////////////////////////
//
// File: confo.js
// This is the main application file for client end point. It tries to use Enablex Web Toolkit to
// communicate with EnableX Servers
//
/////////////////////////////////////////////////////


var username = null;
var room;
var canvasStarted = false;
var presentationStarted = false;
// Player Options
var player_options = {
    "player": {
        "autoplay": "",     // Enum: autoplay (default)
        "name": "",         // Use stream.attributes.name preferably
        "nameDisplayMode": "",  // Enum: auto (default), on, off
        "frameFitMode": "", // Enum: bestFit (default), coverMax
        "skin":"default",   // Enum: default (default)
        "class": ""       // Custom CSS Class Name
    },
    toolbar: {
        'displayMode': false,
    }
};
window.onload = function () {
    
    // URL Parsing to fetch Room Information to join

    var parseURLParams = function (url) {
        var queryStart = url.indexOf("?") + 1,
            queryEnd = url.indexOf("#") + 1 || url.length + 1,
            query = url.slice(queryStart, queryEnd - 1),
            pairs = query.replace(/\+/g, " ").split("&"),
            parms = {}, i, n, v, nv;

        if (query === url || query === "") return;

        for (i = 0; i < pairs.length; i++) {
            nv = pairs[i].split("=", 2);
            n = decodeURIComponent(nv[0]);
            v = decodeURIComponent(nv[1]);

            if (!parms.hasOwnProperty(n)) parms[n] = [];
            parms[n].push(nv.length === 2 ? v : null);
        }
        return parms;
    }
    var urlData = parseURLParams(window.location.href);

    // Function: To create user-json for Token Request
    var createDataJson = function (url) {
        var urlData = parseURLParams(url);
        username = urlData.user_ref[0];
        var retData = {
            "name": urlData.user_ref[0],
            "role": urlData.usertype[0],
            "roomId": urlData.roomId[0],
            "user_ref": urlData.user_ref[0],
        };
        return retData;

    }
    // Function: Create Token

    function joinRoom(new_tok){
        localStream = EnxRtc.joinRoom(new_tok, {audio:true,video:true,data:true},
            function (success, error) {
                if (error && error != null) {
                    document.getElementById("response").innerHTML = JSON.stringify(error, undefined, 4);
                    if (error.error == 1100) {
                        // room_reconnect(new_tok);
                        window.location.href = "/";
                    }
                    if (error.error == 1103) {
                        window.location.href = "/";
                    }
                }
                if (success && success != null) {
                    room = success.room;
                    for (var i = 0; i < success.streams.length; i++) {
                        room.subscribe(success.streams[i]);
                    }
                    localStream.play("localStreamPlayer",player_options);
                    var wb = new EnxWb({
                        canvasId: 'wb',
                        initialWidth: 1000,
                        initialHeight: 500,
                        scheme : 'default',
                    });
                    wb.create(room);
                    wb.startCollaboration();
                   room.addEventListener("user-connected",function(event){
                       var clientId = event.clientId;
                       wb.shareWith(clientId);
                   })
                   var i =0;
                   room.addEventListener("stream-subscribed", function (res) {
                       console.log("stream_subscribed",i++);
                       // document.getElementById("notifications").innerHTML = JSON.stringify(res, undefined, 4);
                   })
                   room.addEventListener("canvas-started",function(data){
                      if(data.message.clientId != room.me.clientId)
                      {
                        canvasStarted = true;
                        presentationStarted = true;
                        var stream_id = data.message.streamId;
                        var st = room.remoteStreams.get(stream_id);
                        st.play("canvasStreamPlayer",player_options);
                        document.querySelector("#canvasStreamPlayer").style.border = "1px solid red";
                      }
                      
                   });
                    room.addEventListener("canvas-stopped",function(data){
                        canvasStarted = false;
                        presentationStarted = false;
                        document.querySelector("#canvasStreamPlayer").innerHTML = "";
                        document.querySelector("#canvasStreamPlayer").style.border = "none";
                    });
                    room.addEventListener("active-talkers-updated",(event)=>{
                        
                       document.querySelector("#remoteStreamPlayer").innerHTML = "";
                       if (event.message && event.message !== null && event.message.activeList && event.message.activeList !== null) {
                           ATUserList = event.message.activeList;
                           console.table(ATUserList)
                           if (ATUserList.length > 0) {
                               for (var i = 0; i < ATUserList.length; i++) {
                                   if (ATUserList[i] && ATUserList[i].streamId) {
                                       var st = room.remoteStreams.get(ATUserList[i].streamId);                                   
                                       st.play("remoteStreamPlayer",player_options);
                                   }
                               }
                           }
                       }
                    })
                }
            });
        
    }


    createToken(createDataJson(window.location.href), function (response) {
            var token = response;
            joinRoom(token);

    });
}







