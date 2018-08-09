
var IceCream = {
  flavors:     [ 'vanilla', 'chocolate', 'bubblegum' ],
  newFlavor:   'banana',
  addNewFlavor: function(){
	  var safeToAdd = true
	  //  check if we've added it already
	  this.flavors.forEach(function(flavor){
	    if(flavor === this.newFlavor)
	      safeToAdd = false;
	  }.bind(this));
	  if(safeToAdd)
	    this.flavors.push(this.newFlavor);
	}
}

IceCream.addNewFlavor();



function CNContactStore ( ) {
    this.reply = function ( contacts ) {
          function resolveAfter() {
              return new Promise(resolve => {
          var pcontacts = contacts.reduce(function(list, person) {
          var pl = person.phoneLabel.isEmpty() ? "Number " : person.phoneLabel
          var givenName = person.first
          , familyName = person.last
          , fullName = givenName + " " + familyName
          , id = person.id
          , email = email
          , phone = person.phone
          , type = pl;
          if(name && phone.length) list.push({
             id: id,
             name: givenName,
             fullName: fullName,
             phonetype: type,
             phoneNumber: phone,
             email: email
             });
          return list;
          }, []).sort(function(a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
            if (nameA > nameB) {
            return 1;
          }
            return 0;
          });
          
          resolve(pcontacts)
     })
}
                       
     async function waitforContacts(){
        var ts = await resolveAfter();
        return ts
     }

     waitforContacts().then((successMessage) => {
      $scope.phoneContacts = successMessage
      setTimeout(function(){
        animate.loader.unload();
      }, 2500);
    });
                       
    }
    return this
}
           
//window.CNContactStore = new CNContactStore ( )




















/////
<!DOCTYPE html>
<html>
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="author" content="Aurelio De Rosa">
      <title>Screen Orientation API Demo by Aurelio De Rosa</title>
      <style>
         *
         {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
         }

         body
         {
            max-width: 500px;
            margin: 2em auto;
            padding: 0 0.5em;
            font-size: 20px;
         }

         h1
         {
            text-align: center;
         }

         .api-support
         {
            display: block;
         }

         .hidden
         {
            display: none;
         }

         .value
         {
            font-weight: bold;
         }

         .button-demo
         {
            padding: 0.5em;
            margin: 1em;
         }

         .author
         {
            display: block;
            margin-top: 1em;
         }
      </style>
   </head>
   <body>
      <h1>Screen Orientation API</h1>

      <span id="so-unsupported" class="api-support hidden">API not supported</span>

      <div id="so-results">
         <p>
            The orientation of the device is <span id="orientation" class="value">unavailable</span>
         </p>
         <form id="form-orientation">
            <label for="orientation">Lock the device in:</label>
            <select id="orientation-type">
               <option value="portrait">portrait</option>
               <option value="landscape">landscape</option>
               <option value="portrait-primary">portrait-primary</option>
               <option value="portrait-secondary">portrait-secondary</option>
               <option value="landscape-primary">landscape-primary</option>
               <option value="landscape-secondary">landscape-secondary</option>
            </select>
            <br />
            <input class="button-demo" id="lock-button" type="submit" value="Lock!" />
            <button class="button-demo" id="unlock-button">Unlock!</button>
         </form>
      </div>

      <small class="author">
         Demo created by <a href="http://www.audero.it">Aurelio De Rosa</a>
         (<a href="https://twitter.com/AurelioDeRosa">@AurelioDeRosa</a>).<br />
         This demo is part of the <a href="https://github.com/AurelioDeRosa/HTML5-API-demos">HTML5 API demos repository</a>.
      </small>

      <script>
         var prefix = 'orientation' in screen ? '' :
                      'mozOrientation' in screen ? 'moz' :
                      'msOrientation' in screen ? 'ms' :
                      null;

         if (prefix === null) {
            document.getElementById('so-unsupported').classList.remove('hidden');

            ['lock-button', 'unlock-button'].forEach(function(elementId) {
               document.getElementById(elementId).setAttribute('disabled', 'disabled');
            });
         } else {
            var form = document.getElementById('form-orientation');
            var select = document.getElementById('orientation-type');

            // Function needed to see lock in action
            function launchFullscreen(element) {
               if(element.requestFullscreen) {
                  element.requestFullscreen();
               } else if(element.mozRequestFullScreen) {
                  element.mozRequestFullScreen();
               } else if(element.webkitRequestFullscreen) {
                  element.webkitRequestFullscreen();
               } else if(element.msRequestFullscreen) {
                  element.msRequestFullscreen();
               }
            }

            function exitFullscreen() {
               if(document.exitFullscreen) {
                  document.exitFullscreen();
               } else if(document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
               } else if(document.webkitExitFullscreen) {
                  document.webkitExitFullscreen();
               } else if (document.msExitFullscreen) {
                  document.msExitFullscreen();
               }
            }

            function orientationHandler() {
               var orientationProperty = prefix + (prefix === '' ? 'o' : 'O') + 'rientation';
               document.getElementById('orientation').textContent = screen[orientationProperty];
            }

            screen.addEventListener(prefix + 'orientationchange', orientationHandler);
            document.getElementById('lock-button').addEventListener('click', function(event) {
               event.preventDefault();
               launchFullscreen(document.documentElement);

               setTimeout(function() {
                  screen[prefix + (prefix === '' ? 'l' : 'L') + 'ockOrientation'](select.value);
               }, 1);
            });
            document.getElementById('unlock-button').addEventListener('click', function() {
               exitFullscreen();
               screen[prefix + (prefix === '' ? 'u' : 'U') + 'nlockOrientation']();
            });

            orientationHandler();
         }
      </script>
   </body>
</html>



/////////////
var self = this;
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
                var scroll = cur( );
                if(scroll - 10 > -lim){ // didn't fully scroll
                    $(block).animate({left: 0}, 300);
                }else if(scroll <= -lim + 10) {
                    $(block).animate({left: -lim}, 300);
                    self.deleteState = block;
                }
            }
            function drag(event) {
                var dX = event.touches[0].clientX - dU,
                scroll = cur( ); // float px left shifted
                var next = 0;
                // if(dX + scroll < -lim) next = -lim;
                if(dX + scroll > 0) next = 0;
                else next = scroll + dX;
                if(next < -3 || moved) {
                    moved = true;
                    event.preventDefault( );
                    event.stopPropagation( );
                    dU = event.touches[0].clientX;
                    block.style.left = next + "px";
                } else if(Math.abs(event.touches[0].clientY - startY) > 3) {
                    unhook( );
                }
            }
            function release(event) {
                unhook( );
                if(Math.abs(startY - event.changedTouches[0].clientY) > 10) return;
                // if they didn't drag, go to the link
                if(Math.abs(dU - startX) < 10) // didn't really scroll [at all]
                    $state.go("directmessage",
                        {userId: msg.OtherUserId, username: msg.OtherUsername});
            }
            return function(event) {
                moved = false;
                if(!event.touches || !event.touches.length) return; // invalid event
                //event.preventDefault( );
                //event.stopPropagation( );
                if(self.deleteState) {
                    $(self.deleteState).animate({left: 0}, 300);
                    self.deleteState = null;
                    event.preventDefault( );
                    event.stopPropagation( );
                    return; // see: iMessages behavior
                }
                // flush state
                lim = window.innerWidth * 0.2;
                startX = event.touches[0].clientX;
                startY = event.touches[0].clientY;
                dU = startX;
                // hook
                block.addEventListener('touchmove', drag, false);
                block.addEventListener('touchend', release, false);
            }
        })(slidingElement, msg);
        msgBlock.addEventListener('touchstart', slider);

//msgBlock.href = "#/directmessage/" + msg.OtherUserId + "/" + msg.OtherUsername;
    var unread = msg.Unread && msg.Unread[$localStorage.User.UserId];
    msgBlock.classList.add("alert-message", "row", unread? "message-unread" : "message-read");
                        slidingElement.classList.add(unread? "message-data-unread" : "message-data");

    var colA = document.createElement("div");
    colA.classList.add("col-20", "alert-avatar");
    // colA is always an Avatar
    var avatar = document.createElement("img");
    avatar.classList.add("message-avatar");
    ///image
    avatar.src = Common.avatarString(msg.OtherUserId);
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
        if($localStorage && $localStorage.unread[msg.OtherUserId])
            unread.textContent = " ("+$localStorage.unread[msg.OtherUserId]+")";

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
        colD.innerText = "Delete";

        colD.addEventListener("touchstart", (function(ChatId) {
            return function( event ) {
                event.preventDefault( );
                event.stopPropagation( );
                API.do('Chat', 'delete', { id: ChatId, method: 'DELETE' })
                .then(function(success) { getMessages(function( ) { }) })
                .catch(console.log);
            }
        })(msg.ChatId), false);


    // append columns to message
    slidingElement.appendChild(colA); slidingElement.appendChild(colB);
        slidingElement.appendChild(colC); msgBlock.appendChild(colD);
        
    return msgBlock;
  };

  ////

  function buildMessages( ) {
    self.deleteState = null; // reset, in case controller changes
    self.Elem.innerHTML = "";
    if($localStorage.chatSummary) {
            $localStorage.unread = { };
            $localStorage.chatSummary.sort(function(a,b) {
                return b.TimeStamp - a.TimeStamp;
            });
            $localStorage.chatSummary.forEach(function(message) {
                if(message.Unread && message.Unread[$localStorage.User.UserId]) {
                    $localStorage.unread[message.OtherUserId]
                        = Object.keys(message.Unread[$localStorage.User.UserId]).length
                }
                self.Elem.appendChild(buildAlert(message));
            });
    }
    $(".timeago").timeago( );
        $rootScope.$broadcast('messages:built');
    return self.Elem;
  }
  //

  function getMessages(then) {
        API.do('Chat', 'list')
        .then(function(messages) {
      // { ChatId, Message, OtherUserId, OtherUsername, TimeStamp, UserId }
      $localStorage.chatSummary = messages.sort(function(a,b) {
        return b.TimeStamp - a.TimeStamp;
      });
      then(buildMessages( ));
        }).catch(console.log);
  }









