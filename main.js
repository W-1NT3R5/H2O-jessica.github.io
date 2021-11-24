var  aud_1 = document.getElementById("aud_1")
aud_1.volume = 0.4;

$.getJSON('https://json.geoiplookup.io/?callback=?', function(data) {
    localStorage.setItem('H2O',(JSON.stringify(data, null, 2)))
});

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { 
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { 
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { 
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
$("#terminal-head").click(()=>{
    closeFullscreen()
})
$("#terminal").click(()=>{
    openFullscreen()
})
$("body").click(()=>{
    var toad = document.getElementById("aud_1")
    toad.play()
    toad.loop = true
})

var rev = "fwd";
function titlebar(val){
    var obj2 = JSON.parse(localStorage.getItem('H2O'))
    var Bring = obj2["district"]
    var msg  = "I wish i was there,RIP you'll never be forgotten";
    var res = " ";
    var speed = 75;
    var pos = val;
    msg = "Hey lemme pull up to your house in "+Bring+" ,on my way ;)";
    var le = msg.length;
    if(rev == "fwd"){
        if(pos < le){
            pos = pos+1;
            scroll = msg.substr(0,pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
    else {
        if(pos > 0) {
            pos = pos-1;
            var ale = le-pos;
            scrol = msg.substr(ale,le);
            document.title = scrol;
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
        else {
            rev = "fwd";
            timer = window.setTimeout("titlebar("+pos+")",speed);
        }
    }
}
titlebar(0);

document.addEventListener('contextmenu', event => event.preventDefault());
//Background change currrently suspended
/*function chng1(){
    $("body").css("background-image","url(./imgs/skull.gif)")
    $("body").css("background-size","20rem 20rem")
    
}
function chng2(){
    $("body").css("background-image","url('./imgs/skull2.gif')")
    $("body").css("background-size","cover")
    
}
setInterval(chng2,3000)
setInterval(chng1,4000)*/



$(function() {
    $( "#terminal" ).draggable();
    function down() {
        $('html, body').animate({ scrollTop: hg}, 20000);
        up();
    };  
    $(this).bind("contextmenu", function(e) {
        e.preventDefault();
        $(document).keydown(function(objEvent) 
	{
		if (objEvent.ctrlKey && !enableKeys) 
		{
			if (objEvent.shiftKey) 
			{
				if (objEvent.keyCode == 73 || objEvent.keyCode == 74) return false; 
			} 
			else 
			{
				if (objEvent.keyCode == 65 || objEvent.keyCode == 85) return false;
			}
        }
	});
    });
    
});


function main(){
    let root=0;
    var originalPrompt = window.prompt;
    function prompt(s) { window.status = s }
    document.onload = TWT()
    function TWT(){
        /*aud_1 = document.getElementById("aud_1");
        aud_1.muted = false;
        aud_1.play()*/
        return aud=1,ry=1
    }
    /*function ms_move_1st_(){
        aud_1 = document.getElementById("aud_1");
        document.getElementById("body").addEventListener("mousemove",()=>{
            aud_1.muted = false;
            aud_1.play();
        })        
        return aud = 1;
    }*/
    console.log("Bypass the login")
    console.log("admin")
    console.log(ry)
    var form = '<div style="width: 100%;display: table"><div style="display: table-cell; width: 1%"></div>&nbsp<form id="form" style="display: table-cell; width :100%"></form></div>'
    var input = '&nbsp&nbsp<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"  type="text" maxlength="20" class="nostyle" autofocus=""></input>'
    var prompt = "<span id=\"white\"><strong><u>Guest@H2O</u></strong></span>"
    var sign = "<span id='violet'>:#~</span>"
    var div = "<div id=\"H2O\"></div>"
    $("#terminal-body").append(form)
    $("form").append("&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+"&nbsp;"+prompt+sign+input+"<br>")
    $("form").submit((e)=>{
        e.preventDefault()

        function H20(d) {
            return rstr2hex(binl2rstr(binl_md5(rstr2binl(d), 8 * d.length)))
        }
        
        function rstr2hex(d) {
            for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++) _ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _);
            return f
        }
        
        function rstr2binl(d) {
            for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++) _[m] = 0;
            for (m = 0; m < 8 * d.length; m += 8) _[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32;
            return _
        }
        
        function binl2rstr(d) {
            for (var _ = "", m = 0; m < 32 * d.length; m += 8) _ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255);
            return _
        }
        
        function binl_md5(d, _) {
            d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _;
            for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) {
                var h = m,
                    t = f,
                    g = r,
                    e = i;
                f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e)
            }
            return Array(m, f, r, i)
        }
        
        function md5_cmn(d, _, m, f, r, i) {
            return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m)
        }
        
        function md5_ff(d, _, m, f, r, i, n) {
            return md5_cmn(_ & m | ~_ & f, d, _, r, i, n)
        }
        
        function md5_gg(d, _, m, f, r, i, n) {
            return md5_cmn(_ & f | m & ~f, d, _, r, i, n)
        }
        
        function md5_hh(d, _, m, f, r, i, n) {
            return md5_cmn(_ ^ m ^ f, d, _, r, i, n)
        }
        
        function md5_ii(d, _, m, f, r, i, n) {
            return md5_cmn(m ^ (_ | ~f), d, _, r, i, n)
        }
        
        function safe_add(d, _) {
            var m = (65535 & d) + (65535 & _);
            return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m
        }
        
        function bit_rol(d, _) {
            return d << _ | d >>> 32 - _
        }
       
        var input = '&nbsp&nbsp&nbsp&nbsp<input autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" " type="text" maxlength="20" class="nostyle" autofocus=""></input>'
        var prompt = "<span id=\"white\"><strong>&nbsp&nbsp&nbsp<u>Guest@H2O</u></strong></span>"
        var res = $("input").val()
        var sign = "<span id='violet'>:#~</span>"
        if(res==="help"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"help\"</span>"
            var response = "<div><span id='black'>&nbsp&nbsp&nbsp&nbspyou can type the following commands as a \"Guest Visitor\":<br>&nbsp<br><span id=\"violet\">&nbsp&nbsp&nbsp&nbspdev</span> - Info about me</span>"
            var response3 ="<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspsite</span><span id=\"white\"> - One of my other site(pretty old)</span>"
            var response4 ="<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspp</span><span id=\"white\"> - Play/Pause music</span>"
            var response5 ="<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbsproot</span><span id=\"white\">  - Login as root</span>"
            var response6 = "<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspinfo</span><span id=\"white\"> - Info about the terminal</span>"
            var response7 = "<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspnews</span><span id=\"white\"> - Current_events</span>"
            var response8 = "<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspfull</span><span id=\"white\"> - Full-screen/Normal-screen</span><br>"
            var response9 = "<div><span id=\"violet\">&nbsp&nbsp&nbsp&nbspme</span><span id=\"white\"> - Things related to you!</span><br>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>"+"<br>"+response3+"<br>"+response4+"<br>"+response5+"<br>"+response6+"<br>"+response7+"<br>"+response9+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="news"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"news\"</span>"
            var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspYou know what's going around just be safe out there <span id=\"opace\"></span></span></div>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="api"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"api\"</span>"
            var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspCheck console <span id=\"opace\"></span></span></div>"
            const options = {method: 'GET', headers: {Accept: 'application/json'}};
            var link = 'http://api.brainshop.ai/get?bid=154518&key=bA8iYTwV8nIMyM5W&uid=[uid]&msg=[msg]'
            fetch(link,options)
            .then((resp)=>resp.json())
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="me"){
            var obj = JSON.parse(localStorage.getItem('H2O'))
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"me\"</span>"
            var response100 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspip: <span id=\"green\">"+obj["ip"]+"</span></span></div>"
            var response101 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspisp: <span id=\"green\">"+obj["isp"]+"</span></span></div>"
            var response102 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsporg: <span id=\"green\">"+obj["org"]+"</span></span></div>"
            var response103 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsphost-name: <span id=\"green\">"+obj["hostname"]+"</span></span></div>"
            var response104 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsplatitude: <span id=\"green\">"+obj["latitude"]+"</span></span></div>"
            var response105 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspasn: <span id=\"green\">"+obj["asn"]+"</span></span></div>"
            var response106 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspasn_number: <span id=\"green\">"+obj["asn_number"]+"</span></span></div>"
            var response107 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspasn_org: <span id=\"green\">"+obj["asn_org"]+"</span></span></div>"
            var response108 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcity: <span id=\"green\">"+obj["city"]+"</span></span></div>"
            var response109 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspconnection_type: <span id=\"green\">"+obj["connection_type"]+"</span></span></div>"
            var response110 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcontinent_code: <span id=\"green\">"+obj["continent_code"]+"</span></span></div>"
            var response111 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcontinent_name: <span id=\"green\">"+obj["continent_name"]+"</span></span></div>"
            var response112 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcountry_code: <span id=\"green\">"+obj["country_code"]+"</span></span></div>"
            var response113 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcountry_name: <span id=\"green\">"+obj["country_name"]+"</span></span></div>"
            var response114 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcurrency_code: <span id=\"green\">"+obj["currency_code"]+"</span></span></div>"
            var response115 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspcurrency_name: <span id=\"green\">"+obj["currency_name"]+"</span></span></div>"
            var response116 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspdistrict: <span id=\"green\">"+obj["district"]+"</span></span></div>"
            var response117 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsphostname: <span id=\"green\">"+obj["hostname"]+"</span></span></div>"
            var response118 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsplongitude: <span id=\"green\">"+obj["longitude"]+"</span></span></div>"
            var response119 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspregion: <span id=\"green\">"+obj["region"]+"</span></span></div>"
            var response120 = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbsptimezone_name: <span id=\"green\">"+obj["timezone_name"]+"</span></span></div>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response100+"<br>"+response101+"<br>"+response102+"<br>"+response103+"<br>"+response104+"<br>"+response105+"<br>"+response106+"<br>"+response107+"<br>"+response108+"<br>"+response109+"<br>"+response110+"<br>"+response111+"<br>"+response112+"<br>"+response113+"<br>"+response114+"<br>"+response115+"<br>"+response116+"<br>"+response117+"<br>"+response118+"<br>"+response119+"<br>"+response120+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        /*else if(res==="full"){
            if(ry==1){
                var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"full\"</span>"
                var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspTerminal fullscreen</span><span id='opace'>(Type full again to change to Normal screen)</span></div>"
                var elem = document.documentElement;
                function openFullscreen() {
                    if (elem.requestFullscreen) {
                        elem.requestFullscreen();
                    } else if (elem.webkitRequestFullscreen) { 
                        elem.webkitRequestFullscreen();
                    } else if (elem.msRequestFullscreen) { 
                        elem.msRequestFullscreen();
                    }
                }
                openFullscreen()
                $("form").append(history+"<br>"+"&nbsp")
                $("form").append(response+"<br>")
                $("input").remove()
                $("form").append(prompt+sign+input+"<br>"+"&nbsp")
                ry=0
            }
            else if(ry==0){
                var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"full\"</span>"
                var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspTerminal Normal</span></div>"
                function closeFullscreen() {
                    if (document.exitFullscreen) {
                      document.exitFullscreen();
                    } else if (document.webkitExitFullscreen) { 
                      document.webkitExitFullscreen();
                    } else if (document.msExitFullscreen) {
                      document.msExitFullscreen();
                    }
                  }
                  closeFullscreen()
                  $("form").append(history+"<br>"+"&nbsp")
                  $("form").append(response+"<br>")
                  $("input").remove()
                  $("form").append(prompt+sign+input+"<br>"+"&nbsp")
                  ry=1
            }
        }*/
        else if(res==="dev"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"dev\"</span>"
            var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspHi, i go by the name Winters online i'm not usually active online however i might be on <br>&nbsp&nbsp&nbsp&nbspdiscord sometimes,that's about it</span></div>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="discord"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"discord\"</span>"
            var response = "<div><span id='violet'>&nbsp&nbsp&nbsp&nbspWinters#5900<span id=\"opace\">(not much active tho)</span></span></div>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="site"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"site\"</span><br>"
            var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"violet\"><a href=\"https://www.h2o-bit.cf/\">link</a></span><br>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="p"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"p\"</span><br>"
            aud_1 = document.getElementById("aud_1");
            if(aud==1){
                aud_1.pause();
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"violet\">Song paused</span><br>"
                aud=0
            }
            else if(aud==0){
                aud_1.muted = false;
                aud_1.play()
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"violet\">Song playing</span><br>"
                aud=1
            }
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>"+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        else if(res==="info"){
            var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>showing results for \"info\"</span><br>"
            var response = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"violet\">&nbsp&nbspUptime:<span id='green'>102days</span><br>&nbsp&nbsp&nbsp&nbsp&nbspTotal-visits:<span id='green'>3327</span><br>&nbsp&nbsp&nbsp&nbsp&nbspMade by:<span id='green'>Winters</span><br>&nbsp&nbsp&nbsp&nbsp&nbsptry to bypass the login,to see something interesting</span><br>"
            $("form").append(history+"<br>"+"&nbsp")
            $("form").append(response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")

        }
        else if(res==="stats"){
            if(root==="1"){
                var history  = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>stats</span><br>"
                var prompt1 = "<span id=\"white\"><strong>&nbsp&nbsp&nbsp<u>Root@H2O</u></strong></span>"
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"green\">The terminal status code[200]</span><br>"
                $("form").append(history+"<br>"+"&nbsp")
                $("form").append(response+"<br>")
                $("input").remove()
                $("form").append(prompt1+sign+input+"<br>"+"&nbsp")
            }
            else{
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"red\">Command only for root users</span><br>"
                $("form").append("<br>"+response+"<br>")
                $("input").remove()
                $("form").append(prompt+sign+input+"<br>"+"&nbsp")
            }
        }
        else if(res==="terminal"){
            if(root==="1"){
                var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>terminal</span><br>"
                var prompt1 = "<span id=\"white\"><strong>&nbsp&nbsp&nbsp<u>Root@H2O</u></strong></span>"
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"green\">Terminal Pass(hash)=\"FF613E8AD12E7E4648860CCBBB188F85\"</span><br>"
                $("form").append(history+"<br>"+"&nbsp")
                $("form").append(response+"<br>")
                $("input").remove()
                $("form").append(prompt1+sign+input+"<br>"+"&nbsp")
            }
            else{
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"red\">Command only for root users</span><br>"
                $("form").append("<br>"+response+"<br>")
                $("input").remove()
                $("form").append(prompt+sign+input+"<br>"+"&nbsp")
            }
        }
        else if(res==="root"){
            //root commands
            var root_pass = originalPrompt('Password for root');
            if(H20(root_pass)=="FF613E8AD12E7E4648860CCBBB188F85"){
                var a=()=>{return root="1";};a()
                var history = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span id='opace'>Password correct granting root access!</span><br>"
                var prompt1 = "<span id=\"white\"><strong>&nbsp&nbsp&nbsp<u>Root@H2O</u></strong></span>"
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"green\">Welcome root!</span><br>"
                $("form").append(history+"<br>"+"&nbsp")
                $("form").append(response+"<br>")
                $("input").remove()
                $("form").append(prompt1+sign+input+"<br>"+"&nbsp")
            }
            else{
                var response = "&nbsp&nbsp&nbsp&nbsp&nbsp<span id=\"red\">Wrong password,try again!</span><br>"
                $("form").append("<br>"+response+"<br>")
                $("input").remove()
                $("form").append(prompt+sign+input+"<br>"+"&nbsp")
            }
        }
        else{
            var response = "<div><span id='red'>&nbsp&nbsp&nbspError No such command!</span></div>"
            $("form").append("<br>"+response+"<br>")
            $("input").remove()
            $("form").append(prompt+sign+input+"<br>"+"&nbsp")
        }
        
    })

}
main()
