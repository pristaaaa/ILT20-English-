var m3u8Link="https://d10rltuy0iweup.cloudfront.net/ATNNAT/myStream/master.m3u8";jwplayer("jwplayerDiv").setup({playlist:[{sources:[{file:m3u8Link}]}],position:"bottom",autostart:true,stretching:"",width:"100%"}).onError(function(e){console.error("JWPlayer Error:",e);});
