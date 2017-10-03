

.service('CameraAndroid', function($q, $cordovaCamera, $ionicPlatform, functions) {
    var self = this; // ktagCallerInfo is a string, can be string-formatted JSON if you want
                     // ktagCallerInfo is just a pass-thru
                     // readBarcode is just a pass-thru

                    // if readBarcode is true, go right to bar code reader in camera, and result will not return an image but
                    // an object w/ a barcode string in it (if successful)

                    // look for the value of key .barcodeResultString

    function options(gallery, width, bits, caption, ktagCallerInfo, readBarcode, inputImage) {
        return {
            quality: 35,
            destinationType: 0,
            sourceType: 1,
            allowEdit: true,
            encodingType: 0,
            mediaType: 0,
            targetWidth: 840,
            targetHeight: 840,
            // popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            fromPhoneGalleryViaCustomCam: gallery ? true : false, // explicit cast
            videoThumbWidth: width ? width : 24*16, // [24*16 = 384p], needs to be mult of 16
            videoThumbBitsPerSec: bits ? bits : 256000, // 256Kb/s
            videoBitsPerSec: 0, // not used yet, for main video
            instagram: caption? true : false,
            instagramCaption: caption ? caption : false,
            ktagCallerInfo: ktagCallerInfo ? ktagCallerInfo : "",
            readBarcode: readBarcode ? true : false,
            inputImage: inputImage ? inputImage : ""
        };
    }
    function optionsGal(gallery, width, bits, caption, ktagCallerInfo, readBarcode, inputImage) {
            return {
                quality: 25,
                destinationType: 0,
                sourceType: 0,
                allowEdit: true,
                encodingType: 0,
                mediaType: 2, // vid and pic = 2
                targetWidth: 680,
                targetHeight: 680,
                // popoverOptions: CameraPopoverOptions,
                //PictureSourceType:PHOTOLIBRARY,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                fromPhoneGalleryViaCustomCam: gallery ? true : false, // explicit cast
                videoThumbWidth: width ? width : 24*16, // [24*16 = 384p], needs to be mult of 16
                videoThumbBitsPerSec: bits ? bits : 256000, // 256Kb/s
                videoBitsPerSec: 0, // not used yet, for main video
                instagram: caption? true : false,
                instagramCaption: caption ? caption : false,
                ktagCallerInfo: ktagCallerInfo ? ktagCallerInfo : "",
                readBarcode: readBarcode ? true : false,
                inputImage: inputImage ? inputImage : ""
            };
        }
        function optionsVid(gallery, width, bits, caption, ktagCallerInfo, readBarcode, inputImage) {
            return {
                quality: 25,
                destinationType: 0,
                sourceType: 0,
                allowEdit: true,
                encodingType: 0,
                mediaType:2,
                targetWidth: 680,
                targetHeight: 680,
                // popoverOptions: CameraPopoverOptions,
                //PictureSourceType:PHOTOLIBRARY,
                saveToPhotoAlbum: true,
                correctOrientation: true,
                fromPhoneGalleryViaCustomCam: gallery ? true : false, // explicit cast
                videoThumbWidth: width ? width : 24*16, // [24*16 = 384p], needs to be mult of 16
                videoThumbBitsPerSec: bits ? bits : 256000, // 256Kb/s
                videoBitsPerSec: 0, // not used yet, for main video
                instagram: caption? true : false,
                instagramCaption: caption ? caption : false,
                ktagCallerInfo: ktagCallerInfo ? ktagCallerInfo : "",
                readBarcode: readBarcode ? true : false,
                inputImage: inputImage ? inputImage : ""
            };
        }
    function isMobile( ) {
            return navigator.userAgent.match(/Android/i)
             || navigator.userAgent.match(/webOS/i)
             || navigator.userAgent.match(/iPhone/i)
             || navigator.userAgent.match(/iPad/i)
             || navigator.userAgent.match(/iPod/i)
             || navigator.userAgent.match(/BlackBerry/i)
             || navigator.userAgent.match(/Windows Phone/i);
    } // isMobile
    // Browser image support
    function desktopPictureHandling(opt) {
        var q = $q.defer( );
        $('.view-container').append(
            "<div id='desktop_helper' style='position: absolute; top: 44px; left: 0px; width: 100%; height: 100%; background-color: #ddd; z-index: 100000'>"
            + "<input id='desktop_image_picker' type='file'>"
            + "<input id='desktop_helper_close' type='button' value='Close'><br>"
            + "<img id='desktop_image_preview' src=''><br><div id='base64uri'></div></div>"
        );
        $('#desktop_helper_close').click((function(q) {
            return function( ) {
                $("#desktop_helper").remove( );
                q.reject(false);
            }
        })(q));
        $('#desktop_image_picker').change(function( ) {
            var preview = $('#desktop_image_preview'); // document.querySelector('img');
            var file    = document.querySelector('#desktop_image_picker').files[0];
            var reader  = new FileReader( );
            reader.addEventListener("load", function ( ) {
                $('#preview').attr('src', reader.result);
                $('#base64uri').html(reader.result);

                var imageData = reader.result; // "data:image/jpeg;base64,"
                // Remove "data:image/jpeg;base64," because $cordovaCamera doesn't add it so we normalize later
                var img = imageData.replace("data:image/jpeg;base64,", "");
                self.data = {
                    stillImageAsBase64: img.replace("data:image/png;base64,", ""),
                    ktagCallerInfo: opt.ktagCallerInfo
                };
                $('#desktop_helper').remove( ); // Closes view
                q.resolve(self.data);
            }, false);

            if (file)
                reader.readAsDataURL(file);
            else
                console.log("FileReader not supported");
        });
        return q.promise;
    } // desktopPictureHandling

    function determinePlatform(width, bits, ktagCallerInfo, readBarcode) {
        // typeof navigator.camera !== "undefined" >>> good
        var  platform = ionic.Platform.platform( );
        console.log(platform);
        //"iOS", "Android", "WinCE"
        //var isIOS = ionic.Platform.isIOS( );
        var isAndroid = ionic.Platform.isAndroid( );
        var cpu = navigator.cpuClass;
        var plat = navigator.platform; /*platform === "iOS"*/
        console.log("isAndroid? " + (isAndroid? "true" : "false") + " cpu: " + cpu + " platform: " + plat);

        return (isAndroid  && plat !== "Android Simulator")
                ?   camera(options(false, width, bits, "", ktagCallerInfo, readBarcode))
                :   camera(options(true, width, bits, "", ktagCallerInfo, readBarcode)); // gallery
    }
    // take a new picture or video
    function camera( opt ) {
        if(isMobile( )) {
            var q = $q.defer();
            document.addEventListener("deviceready", function ( ) {
                console.log("ready to call cordovaCamera getPicture");
                // to test pulling from new custom gallery, set this to true
                //opt.fromPhoneGalleryViaCustomCam = true;
                $cordovaCamera.getPicture(opt).then(
                function(success) {

                        var aa = JSON.stringify(success);
                        if(aa == '""'){
                           console.log("not good path" + JSON.stringify(success));
                        }else{
                            var galeryExt = success.split(/[\s.]+/);// var galeryExt = success.split('.')[1];
                            var galleryVideo = galeryExt[galeryExt.length-1];
                            if(galleryVideo && galleryVideo.startsWith("mp4")){
                                // /storage/emulated/0/DCIM/Camera/VID_20170206_182913.mp4
                                //file:///storage/emulated/0/DCIM/Camera/VID_20170207_184556.mp4
                                VideoEditor.getVideoInfo(
                                    getVideoInfoSuccess,
                                    getVideoInfoError,
                                    {fileUri: "file://" + success}
                                );
                                function getVideoInfoSuccess(info) {
                                    //console.log('getVideoInfoSuccess, info: ' + JSON.stringify(info, null, 2));
                                    if(info.duration > 16){
                                        console.log("video is to long");
                                        //add go to home
                                        functions.popup("Video is Longer than 15 sec, Please choose other Video", ["ok"])
                                            .then(function(result) {
                                            if (result.name === "ok") console.log("video is to long");//$state.go('home');
                                        });
                                    }else{

                                         self.data = [{"fullPath": "file://" + success}];
                                         q.resolve(self.data);
                                    }

                                }
                                function getVideoInfoError(error){
                                    console.log(error);
                                }
                            }else if(galleryVideo && galleryVideo.startsWith("jpg")){
                                var suc = "file://"+success;
                                getFileContentAsBase64(suc,function(base64Image){
                                  var splitFirst = base64Image.split(",")[1];
                                    self.data = splitFirst;
                                    q.resolve(self.data);
                                });
                            }else{
                                self.data = success;
                                q.resolve(self.data);
                            }
                        }


                }, function(fail) {
                        self.cleanUp( );
                        q.reject(fail);
                });
            });
            return q.promise;
        } else return desktopPictureHandling( opt );
    }

    function cameraVideo( ) {
                if(isMobile( )) {
                    var q = $q.defer();
                    document.addEventListener("deviceready", function ( ) {
                        var optionsVid = {
                              limit: 1,
                              duration: 15
                        };
            navigator.device.capture.captureVideo(captureSuccess, captureError, optionsVid);
            function captureSuccess(success) {
                     console.log(success[0].fullPath);

                    VideoEditor.transcodeVideo(videoTranscodeSuccess,videoTranscodeError,
                            {
                                fileUri: success[0].fullPath,
                                outputFileName: "videoFileName",
                                outputFileType: VideoEditorOptions.OutputFileType.MPEG4,
                                optimizeForNetworkUse: VideoEditorOptions.OptimizeForNetworkUse.YES,
                                saveToLibrary: true,
                                maintainAspectRatio: false,
                                width: 640,
                                height: 640,
                                videoBitrate: 600000, // 1 megabit 1000000
                                audioChannels: 2,
                                audioSampleRate: 14700, //44100
                                audioBitrate: 42666, // 128 kilobits 128000
                                progress: function(info) {
                                    console.log('transcodeVideo progress callback, info: ' + info);
                                }
                            }
                        );

            }
            function captureError(fail) {
                self.cleanUp( );
                q.reject(fail);
            };

                function videoTranscodeSuccess(result) {
                    // result is the path to the transcoded video on the device
                    //console.log('videoTranscodeSuccess, result: ' + result);
                    //  /storage/emulated/0/Movies/Kargoe/videoFileName.mp4
                    //file:///storage/emulated/0/DCIM/Camera/VID_20170929_142304.mp4
                    self.data = [{"fullPath": "file://" + result}];
                    //self.data = "file://"+result;
                    q.resolve(self.data);
                }

                function videoTranscodeError(err) {
                    console.log('videoTranscodeError, err: ' + err);
                }

            });
            return q.promise;
        } else return desktopPictureHandling( opt );
    }

        function getFileContentAsBase64(path, callback){
            window.resolveLocalFileSystemURL(path, gotFile, fail);
            function fail(e) {
                  console.log('Cannot found requested file');
            }
            function gotFile(fileEntry) {
                   fileEntry.file(function(file) {
                      var reader = new FileReader();
                      reader.onloadend = function(e) {
                           var content = this.result;
                           callback(content);
                      };
                      // The most important point, use the readAsDatURL Method from the file plugin
                      reader.readAsDataURL(file);
                   });
                }
    };

    function instaCam(caption, inputImage) {
        var searchImage = inputImage;
        Instagram.isInstalled(function (err, installed) {
            if (installed) {
                    Instagram.share(searchImage, caption, function (err) {
                        if (err) {
                            console.log("not shared");
                        } else {
                            console.log("shared");
                        }
                    });
            } else {
                functions.popup("Instagram is not Installed on Your Phone", ["ok"])
                //console.log("Instagram is not installed");
            }
        });

        }

    // the camera return data
    this.data = null;
    // arbitrary numbers for width & bits
    this.readBarcode = function( ) { return camera(options(false, 100, 100, "", "", true)) };
    // Take a new picture
    this.getPicture = function(width, bits, ktagCallerInfo) { return camera(options(false, width, bits, "", ktagCallerInfo)) };
    // Use a picture from the gallery
    this.usePicture = function(width, bits, ktagCallerInfo) { return camera(optionsGal(true, width, bits, "", ktagCallerInfo)) };
    // Call our primary camera menu
    this.activate = function(width, bits, ktagCallerInfo) { return determinePlatform(width, bits, ktagCallerInfo) };
    // open instagram app
    //this.instagram = function(caption, inputImage) { return camera(options(false, false, false, caption, false, false, inputImage)) };
    // open instagram app
    this.instagram = function(caption, inputImage) {
        return instaCam(caption, inputImage)
      }
    this.activateForeground = function( width, bits, eachFrame ) { // initially for media in message
        return camera(options(false, width, bits, eachFrame, ""))}
    // get video
    this.getVideo = function(width, bits, ktagCallerInfo) { return cameraVideo( ) };
    //this.getVideo = function(width, bits, ktagCallerInfo){ return camera(optionsVid(true, width, bits, "", ktagCallerInfo)) };

    this.cleanUp = function( ) {
        if (isMobile())
            $cordovaCamera.cleanup( )
            .then( function(success) {
//              console.log("success cleanup");
            }, function(fail) {
//              console.log("fail cleanup");
            });
        self.data = null;
    }
});
