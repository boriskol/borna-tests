/////////////

function has_touch() {
  return !!('ontouchstart' in window);
}

function has_mouse() {
  return !!('onmousemove' in window);
}
function touchHandler(event) {
    var touch = event.changedTouches[0];

    var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent({
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    }[event.type], true, true, window, 1,
        touch.screenX, touch.screenY,
        touch.clientX, touch.clientY, false,
        false, false, false, 0, null);

    touch.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}


function formatMessage(msg) {
        // i.e. [56f1915a-0b042d-0001-ac1f1d34-4d63-3deb JPEG 1.41111]
        var mediaMatch = /\[(\w{14}|\w{32}) (JPEG|MP4|3D) ([+-]?\d+(\.\d+)?)\]/;
        var postMatch = /\[(\w{14}|\w{32}) (JPEG|MP4|3D) ([+-]?\d+(\.\d+)?) (\w{14}|\w{32}) ([+-]?\d+(\.\d+)?) (POST)\]/
        var Message = document.createElement("div");
        var parts = msg.Message.split(/(\[[^]*?\])/); // get everything with brackets
        var characterCount = 0;
        for(var i=0;i<parts.length;++i) {
            if(characterCount > 100) break;
            var media = parts[i].match(mediaMatch);
            var post = parts[i].match(postMatch);
            if(post) {
                
                var thumbref = msg.UserImage;
                var img = Message.appendChild(document.createElement("img"));
                img.classList.add("media-summary-thumbnail", "unloaded-gallery-image");
                img.alt = ''; // WC3 standard likes alt to exist, even if blank.
                img.src = thumbref;
                var limit = 0.035 * window.innerHeight; // 4vh
                img.style.width = limit * post[3] + "px";
                img.style.height = limit + "px"; // height is baseline here, short rows
                characterCount += 10;
            } 
        }
        return Message;
}

var x = document.getElementById("elementid");
var self = this;
this.Elem = document.createElement("div");
this.deleteState = null;

function buildAlert(msg) {
    // { ChatId, Message, OtherUserId, OtherUsername, TimeStamp, UserId }

    var msgBlock = document.createElement("a");
        msgBlock.setAttribute("id", msg.OtherUserId);
        msgBlock.style.width = '100vw';
        msgBlock.style.position = "relative";
        //msgBlock.style.height = '2vw';
        var slidingElement = document.createElement("div");
        slidingElement.style.position = 'relative';
        slidingElement.classList.add("row");
        msgBlock.appendChild(slidingElement);

        var slider = (function(block, msg) {
            var startX = 0, dU = 0, lim = 0, moved = false;
            var startY = 0;

            function cur( ) {
                //console.log("cur")
                var c = block.style.left;

                if(!c) {
                    block.style.left = "0px";
                    return 0;
                } else if(c.indexOf("px") === -1) {
                    block.style.left = "0px";
                    return 0;
                } else {
                    return parseFloat(c.slice(0,c.length-2));
                }
            }
            function unhook( ) {
                // unhook
                
                block.removeEventListener('touchmove', drag, false);
                block.removeEventListener('touchend', release, false);
                block.removeEventListener('mousemove', drag, false);
                block.removeEventListener('mouseup', release, false);

                var scroll = cur( );
               
                if(scroll == 0){
                    console.log(`Scroll clissck ${scroll}`)
                    alert("click")

                }else if(scroll - 10 > -lim){ // didn't fully scroll
                    //$(block).animate({left: 0}, 300);
                    console.log(`scroll - 10 > -lim ${scroll} , ${lim}`);
                    block.style.left = "0px";
                }else if(scroll <= -lim + 10) {
                    console.log(`scroll <= -lim + 10 ${scroll} , ${lim}`)
                    //$(block).animate({left: -lim}, 300);
                    block.style.left = -lim+"px";
                    self.deleteState = block;
                }
            }
            function drag(event) {

                if (is_touch_device()) {
                var dX = event.touches[0].clientX - dU;
                }else{
                var dX = event.clientX - dU;
                }
                var scroll = cur( ); // float px left shifted
                var next = 0;
                // if(dX + scroll < -lim) next = -lim;
                if(dX + scroll > 0) next = 0;
                else next = scroll + dX;
                if(next < -3 || moved) {
                    moved = true;
                    event.preventDefault( );
                    event.stopPropagation( );
                    if (is_touch_device()) {
                        dU = event.touches[0].clientX;
                    }else{
                        dU = event.clientX;
                    }
                    block.style.left = next + "px";
                } else if(Math.abs(event.touches[0].clientY - startY) > 3) {
                    unhook( );
                }
            }
            function release(event) {
                unhook( );
                if(Math.abs(startY - event.changedTouches[0].clientY) > 10) return;
                if(Math.abs(startY - event.clientY) > 10) return;
                // if they didn't drag, go to the link
                if(Math.abs(dU - startX) < 10){ // didn't really scroll [at all]
                   // $state.go("directmessage",{userId: msg.OtherUserId, username: msg.OtherUsername});
                  console.log(`du ${dU} , start x ${startX}`)
                }
            }
            return function(event) {
                moved = false;
                //console.log(event)
                if(!event.touches || !event.touches.length) return; // invalid event
                //event.preventDefault( );
                //event.stopPropagation( );
                if(self.deleteState) {
                    console.log(self.deleteState)
                     block.style.left = "0px";
                     self.deleteState.left = "0px";
                    //$(self.deleteState).animate({left: 0}, 300);
                    //var b = `translateX(${-scroll}px)`
                    
                    /*self.deleteState.animate([
                      // keyframes
                      { transform: 'translateY(-64px)' }, 
                      { transform: 'translateY(0px)' }
                    ], { 
                      // timing options
                      duration: 300
                      //, iterations: Infinity
                    });*/
                    
                    self.deleteState = null;
                    event.preventDefault( );
                    event.stopPropagation( );
                    return; // see: iMessages behavior
                }
                // flush state
                lim = window.innerWidth * 0.2;
                if (is_touch_device()) {
                    startX = event.touches[0].clientX;
                    startY = event.touches[0].clientY;
                    dU = startX;
                } else{
                    console.log(is_touch_device())
                    startX = event.clientX;
                    startY = event.clientY;
                    dU = startX;
                }
                // hook
                
                if (is_touch_device()) {
                    block.addEventListener('touchmove', drag, false);
                    block.addEventListener('touchend', release, false);
                }else{
                    block.addEventListener('mousemove', drag, false);
                    block.addEventListener('mouseup', release, false);
                }
            }
        })(slidingElement, msg);

        if (!is_touch_device()) {
            msgBlock.addEventListener('mousedown', slider);
        }else{
            msgBlock.addEventListener('touchstart', slider);
        }
       

//msgBlock.href = "#/directmessage/" + msg.OtherUserId + "/" + msg.OtherUsername;
    //console.log(msg)
    var unread = msg.Unread && msg.Unread[msg.OtherUserId];
    msgBlock.classList.add("alert-message", "row", unread? "message-unread" : "message-read");
    slidingElement.classList.add(unread? "message-data-unread" : "message-data");

    var colA = document.createElement("div");
    colA.classList.add("col-20", "alert-avatar");
    // colA is always an Avatar
    var avatar = document.createElement("img");
    avatar.classList.add("message-avatar");
    ///image
    avatar.src = msg.UserImage//""//Common.avatarString(msg.OtherUserId);
    colA.appendChild(avatar);

    var colB = document.createElement("a");
    colB.classList.add("col","col-70","col-center");
        // moved href to touch functions
        // colB.href = "#/directmessage/" + msg.OtherUserId + "/" + msg.OtherUsername;
    // colB is always the message string
    var username = document.createElement("span");
    username.style.fontWeight = "700";
    username.classList.add("message-username", "no-padding", "no-marging");
    username.innerHTML = msg.OtherUsername;
        // Unread messages
        var unread = document.createElement("span");
        unread.style.fontWeight = "700";
        if(msg.unread)
            unread.textContent = " ("+msg.unread[msg.OtherUserId]+")";

    var message = document.createElement("div");
    message.classList.add("row", "row-center", "message-body", "no-padding", "no-marging");
    message.appendChild(formatMessage(msg)); // max length, 40 characters.
    
    colB.appendChild(username); colB.appendChild(unread); colB.appendChild(message);

    var colC = document.createElement("div");
    colC.classList.add("no-padding", "text-left", "col-10", "col-center");
    // The third field is timeago
    var time = document.createElement("time");
    time.classList.add("timeago", "activity", "font-12");
    time.setAttribute('datetime', new Date(msg.TimeStamp * 1000).toISOString( ));
    colC.appendChild(time);

        var colD = document.createElement("div");
        colD.style.background = "#b02026";
        colD.setAttribute("id", "delete-button-" + msg.OtherUserId);
        colD.classList.add("convo-delete-button", "vcenter");
        colD.innerText = msg.UserAction;

        colD.addEventListener("click", (function(ChatId) {
            return function( event ) {
                event.preventDefault( );
                event.stopPropagation( );
                console.log("delete")
        }
        })(msg.ChatId), false);


    // append columns to message
    slidingElement.appendChild(colA); slidingElement.appendChild(colB);
    slidingElement.appendChild(colC); msgBlock.appendChild(colD);
        
    return msgBlock;
  };

  ////

  function buildMessages( chatSummary ) {
    self.deleteState = null; // reset, in case controller changes
    self.Elem.innerHTML = "";
    if(chatSummary) {
            //$localStorage.unread = { };
            chatSummary.sort(function(a,b) {
                return b.TimeStamp - a.TimeStamp;
            });
            chatSummary.forEach(function(message) {
                /*if(message.Unread && message.Unread[$localStorage.User.UserId]) {
                    $localStorage.unread[message.OtherUserId]
                        = Object.keys(message.Unread[$localStorage.User.UserId]).length
                }*/
                self.Elem.appendChild(buildAlert(message));
            });
    }
    //$(".timeago").timeago( );
    //$rootScope.$broadcast('messages:built');
    //console.log(self.Elem)

    return self.Elem;
  }
  //
(function () {
  //function getMessages(then){
    var messages  = [{ChatId:"9778e108fc58752ed1e1fa866d87b6dd"
                    ,Message:"hello how r u"
                    ,Online:true
                    ,OtherUserId:"LO5758a0bc01449c0001ac1f18a31c21"
                    ,OtherUsername:"libertinesb"
                    ,TimeStamp:1532773112.126851
                    ,Unread:[]
                    ,UserId:"LO5758a0bc01449c0001ac1f18a31c21"
                    ,UserImage:"img/prst.png"
                    ,UserAction: "Home"
            },{
                    ChatId:"535c54248542c31ce534af210036ef09"
                    ,Message:"whts up"
                    ,Online:false
                    ,OtherUserId:"fmOBp7taxcrxx6"
                    ,OtherUsername:"bside"
                    ,TimeStamp:1532352220.698931
                    ,Unread:[]
                    ,UserId:"LO5758a0bc01449c0001ac1f18a31c21"
                    ,UserImage:"img/rog.jpg"
                    ,UserAction: "About"
            },{
                    ChatId:"535c54248542c31ce534af210036ef10"
                    ,Message:"alo"
                    ,Online:false
                    ,OtherUserId:"fmOBp7taxcrxx67"
                    ,OtherUsername:"kolaric"
                    ,TimeStamp:1532352220.698931
                    ,Unread:[]
                    ,UserId:"LO5758a0bc01449c0001ac1f18a31c21"
                    ,UserImage:"img/rog.jpg"
                    ,UserAction: "Contacts"
            }]

      // { ChatId, Message, OtherUserId, OtherUsername, TimeStamp, UserId }
      var chatSummary = messages.sort(function(a,b) {
        return b.TimeStamp - a.TimeStamp;
      });
    //buildMessages( chatSummary )
    //document.getElementById("elementid").appendChild(buildMessages( chatSummary ));
    //var x = document.getElementById("elementid");
    
    //console.log(x)
    x.appendChild(buildMessages( chatSummary ));
    
    
        
 // }
  })();

   //getMessages(function( ) { });


/*




*/
var el = document.querySelector('.el')
var height = el.scrollHeight
el.style.setProperty('--max-height', height + 'px')



















   

