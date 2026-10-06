/* Set the real download link here (e.g. a GitHub Release URL) */
var DOWNLOAD_URL_APP = "#download"; /* the app */
var DOWNLOAD_URL_PACK = "#download"; /* essential apps pack file */

var T = {
ar:{n1:"لقطات",n2:"المميزات",n3:"طريقة الاستخدام",n4:"السويتش الصامت",dl:"تحميل",dl2:"تحميل Installer Pro",how:"كيف أستخدمه؟",
pill:"يعمل بدون إنترنت · ويندوز",h1:"ثبّت كل برامجك بنقرة واحدة",
sub:"Installer Pro يجمع ملفات تثبيت برامجك في مكتبة واحدة ويشغّلها بالترتيب بالتثبيت الصامت، دون أن تجلس أمام الجهاز. التطبيق نفسه يبدأ فارغًا، ولو تريد البرامج الأساسية جاهزة نزّل حزمتها وضعها بجانبه فيقرؤها وحده.",
meta:"ويندوز 10 و11 · لا يحتاج إنترنت وقت التثبيت",offline:"بدون إنترنت",ft_tag:"أداة تثبيت صامت لويندوز، تجمع ملفات برامجك في مكتبة واحدة وتثبّتها بالترتيب دون إنترنت.",ft_nav:"الأقسام",ft_dev:"المطوّر والتواصل",ai:"صُمّم هذا الموقع وتطبيق Installer Pro، وطُوِّرا بالكامل على يد المطوّر محمود صقر باستخدام أدوات الذكاء الاصطناعي، وهذا يعكس مهارته في توظيفها لبناء منتجات متكاملة.",gh_l:"حساب المطوّر على GitHub",ml:"الوضع الفاتح",md:"الوضع الداكن",top_l:"العودة إلى أعلى الصفحة",demo_h:"جرّبها بنفسك",demo_l:"نسخة تجريبية من البرنامج",lang_l:"تغيير اللغة",theme_l:"تبديل الوضع الفاتح/الداكن",
cats:["كل البرامج","أساسيات","مشغّلات","أدوات"],sel:"المحدد:",ready:"جاهز.",go:"تثبيت",wait:"جارٍ...",ok:"تم",begin:"بدء التثبيت الصامت",fin:"اكتمل: {n} برنامج",
hint:"نسخة تجريبية: حدّد برامج واضغط «تثبيت» لترى الخطة تُنفَّذ.",
s_h:"شكل البرنامج الحقيقي",s_p:"لقطات من Installer Pro أثناء الاستخدام.",
shots:[["المكتبة","المكتبة: برامجك مصنّفة مع بحث ووسوم، وخطة التثبيت على الجانب."],["إضافة برنامج","إضافة برنامج: الاسم والإصدار والتصنيف، وخطوات التثبيت مع خانة السويتش الصامت وأزرار «بحث» و«اختبار»."],["التثبيت","التثبيت: حالة كل برنامج مع سجل مباشر وزر إيقاف."],["الإعدادات","الإعدادات: اللغة ووضع الألوان والسمة، واستثناء مجلد البرامج من Windows Defender، وصفحة «حول» بمعلومات المطوّر."]],
shot_alt:"لقطة شاشة من Installer Pro",
f_h:"كل ما يلزم ليُنهي الجهاز عمله وحده",f_p:"أدوات صغيرة تعمل معًا: ترتيب وأولويات واعتماديات وسجل يخبرك بما حدث.",
feat:[["تثبيت صامت","تعمل السكربتات في الخلفية، فلا نوافذ تنتظر نقرة ولا أسئلة تقاطع التثبيت."],["تصنيفات وأولويات","رتّب التصنيفات بأرقام فيُثبَّت الرقم 1 أولًا، ويأتي كل برنامج بعد ما يعتمد عليه."],["خطوات متعددة","ملف تثبيت أو سكربت أو مجلد أو ملف تسجيل أو اختصار، بالترتيب داخل برنامج واحد."],["وسوم وبحث","يأخذ كل برنامج وسومه تلقائيًا، وتصفّي المكتبة بنقرة على أي وسم."],["قوائم وجدولة","احفظ مجموعة برامج كقائمة وشغّلها من الواجهة أو من سطر الأوامر."],["تحديث وإزالة","يتعرّف على ما ثُبّت، وينبّهك لإصدار أحدث، ويستطيع إزالة البرنامج."],["نسخ احتياطي","تُحفظ مكتبتك تلقائيًا فلا يضيع ترتيبك."],["واجهة مريحة","عربية وإنجليزية، ووضع فاتح وداكن، وسمة زجاجية."]],
u_h:"طريقة الاستخدام",u_p:"أنت تجلب ملفات التثبيت وتضيفها، أو تضع حزمة البرامج الأساسية بجانبه، وهو يشغّلها بالتثبيت الصامت، ولذلك يحتاج كل برنامج إلى السويتش الصامت الخاص به.",
steps:[["جهّز ملفات التثبيت","نزّل ملفات setup أو msi للبرامج التي تريدها وضعها على الجهاز أو على فلاشة. البرنامج لا ينزّلها."],["أضف البرنامج إلى المكتبة","من «إضافة برنامج» اختر الملف أو اسحبه إلى النافذة. يُقرأ الاسم والإصدار والأيقونة تلقائيًا ويمكنك تعديلها."],["اكتب السويتش الصامت","في خانة «السويتش الصامت» اكتب الأمر الذي يُنهي التثبيت دون نوافذ. هذه أهم خطوة وتفاصيلها أدناه."],["جرّب السويتش","اضغط «اختبار السويتش» على جهاز تجريبي. إن انتهى التثبيت دون أي سؤال فهو سليم."],["اختر ورتّب وثبّت","حدّد البرامج وراجع الخطة بترتيبها ثم اضغط تثبيت، وتابع السجل المباشر والملخص في النهاية."]],
w_h:"السويتش الصامت بالتفصيل",w_p:"إضافة تُكتب بعد اسم ملف التثبيت وتأمره بالتثبيت في الخلفية. يختلف نوعها حسب الأداة التي صُنع بها المثبّت. اختر النوع لترى الصيغة المعتادة:",
notes:["أبسط الأنواع، وغالبًا يكفي حرف S كبير.","يخفي النوافذ والرسائل ويمنع إعادة التشغيل.","لمثبّتات MSI سويتشات قياسية ثابتة.","يمرّر سويتش MSI داخل مثبّت InstallShield."],
w_n:"السويتش الذي يعمل فعلًا يختلف من برنامج لآخر، فجرّبه قبل أن تعتمد عليه.",
tri:[["ابحث عن السويتش","زر يبحث باسم البرنامج وإصداره إن لم تعرف السويتش."],["قوالب جاهزة","سويتشات جاهزة للأنواع والبرامج المعروفة."],["اختبار السويتش","جرّبه على جهاز تجريبي قبل أن تعتمده."]],
c_h:"جاهز للتثبيت بنقرة واحدة؟",c_p:"نزّل التطبيق، وإن أردت البرامج الأساسية جاهزة فنزّل الحزمة وضعها بجانبه.",eA_t:"التطبيق",eA_d:"Installer Pro نفسه بدون أي برامج. يعمل وحده، وتضيف إليه ملفات برامجك.",eA_b:"تحميل التطبيق",eB_t:"حزمة البرامج الأساسية",eB_d:"ملف اختياري يوضع بجانب التطبيق، فيقرأ البرامج التي بداخله تلقائيًا ويضيفها إلى مكتبتك.",eB_b:"تحميل الحزمة",req:["ويندوز 10 أو 11","صلاحيات المسؤول","لا يحتاج إنترنت وقت التثبيت"],
rights:"جميع الحقوق محفوظة للمطوّر",support:"للتواصل والدعم:"},
en:{n1:"Screenshots",n2:"Features",n3:"How it works",n4:"Silent switch",dl:"Download",dl2:"Download Installer Pro",how:"How do I use it?",
pill:"Works offline · Windows",h1:"Install all your apps in one click",
sub:"Installer Pro gathers your installer files into a single library and runs them in order with silent install, so you don't have to sit at the machine. The app itself starts empty, and if you want the essentials ready, download their pack and drop it next to the app: it reads it on its own.",
meta:"Windows 10 & 11 · No internet needed while installing",offline:"Offline",ft_tag:"A silent installer for Windows that keeps your installers in one library and runs them in order, offline.",ft_nav:"Sections",ft_dev:"Developer and contact",ai:"This site and the Installer Pro app were designed and built end to end by developer Mahmoud Saqr using AI tools, which reflects his skill at putting AI to work to deliver complete products.",gh_l:"Developer on GitHub",ml:"Light mode",md:"Dark mode",top_l:"Back to top",demo_h:"Try it yourself",demo_l:"Interactive demo of the app",lang_l:"Change language",theme_l:"Toggle light/dark mode",
cats:["All apps","Essentials","Players","Tools"],sel:"Selected:",ready:"Ready.",go:"Install",wait:"Installing…",ok:"Done",begin:"Starting silent install",fin:"Finished: {n} apps",
hint:"Interactive demo: pick a few apps and press “Install” to watch the plan run.",
s_h:"The real app",s_p:"Screenshots of Installer Pro in use.",
shots:[["Library","Library: your apps by category, with search and tags, and the install plan alongside."],["Add program","Add program: name, version and category, plus install steps with a silent-switch field and Find and Test buttons."],["Installing","Installing: each app's status with a live log and a stop button."],["Settings","Settings: language, color mode and theme, a Windows Defender exclusion for the apps folder, and an About page with developer details."]],
shot_alt:"Installer Pro screenshot",
f_h:"Everything the machine needs to finish on its own",f_p:"Small tools that work together: ordering, priorities, dependencies, and a log that tells you what happened.",
feat:[["Silent install","Scripts run in the background, so no window waits for a click and no prompt interrupts the install."],["Categories and priority","Number your categories and 1 installs first. An app that depends on another installs after it."],["Multiple steps","An installer, script, folder, registry file or shortcut, in order, inside one program."],["Tags and search","Every app gets its tags automatically, and one click on a tag filters the library."],["Lists and scheduling","Save a group of apps as a list and run it from the interface or the command line."],["Update and uninstall","It detects what's installed, alerts you to newer versions, and can remove an app."],["Backup","Your library is saved automatically, so your ordering is never lost."],["Comfortable interface","Arabic and English, light and dark mode, and a glass theme."]],
u_h:"How it works",u_p:"You bring the installer files and add them, or drop the essentials pack next to the app, it runs them silently, and that's why each app needs its own silent switch.",
steps:[["Prepare the installers","Download the setup or msi files you want and keep them on the machine or a USB drive. The app doesn't download them."],["Add the app to the library","From “Add program” pick the file or drag it onto the window. Name, version and icon are read automatically and you can edit them."],["Enter the silent switch","In the “Silent switch” field, type the command that finishes the install without windows. This is the most important step; details are below."],["Test the switch","Press “Test switch” on a test machine. If the install finishes with no prompts, it's good."],["Select, order, install","Select the apps, review the plan in order, press Install, and follow the live log and the summary at the end."]],
w_h:"The silent switch in detail",w_p:"An option written after the installer's file name that tells it to install in the background. Its form depends on the tool the installer was built with. Pick a type to see the usual syntax:",
notes:["The simplest type; a capital S is usually enough.","Hides windows and messages and prevents a restart.","MSI installers have fixed, standard switches.","Passes an MSI switch through an InstallShield installer."],
w_n:"The switch that actually works varies from app to app, so test it before you rely on it.",
tri:[["Find the switch","A button that searches by app name and version when you don't know the switch."],["Ready templates","Ready-made switches for common installer types and well-known apps."],["Test the switch","Try it on a test machine before you rely on it."]],
c_h:"Ready to install in one click?",c_p:"Download the app, and if you want the essentials ready, download the pack and put it next to it.",eA_t:"The app",eA_d:"Installer Pro itself, with no apps inside. It works on its own and you add your installers.",eA_b:"Download the app",eB_t:"Essential apps pack",eB_d:"An optional file you put next to the app. It reads the apps inside automatically and adds them to your library.",eB_b:"Download the pack",req:["Windows 10 or 11","Administrator rights","No internet needed while installing"],
rights:"All rights reserved to the developer",support:"Contact and support:"}};

var CMD=["setup.exe <em>/S</em>","setup.exe <em>/VERYSILENT /SUPPRESSMSGBOXES /NORESTART</em>","msiexec <u>/i</u> app.msi <em>/qn /norestart</em>","setup.exe <em>/s /v\"/qn\"</em>"],
TABS=["NSIS","Inno Setup","MSI","InstallShield"],IMG=["library","add-program","installing","settings"],
APPS=[["7z","7-Zip","/S",1,1],["Ch","Google Chrome","/qn /norestart",1,1],["VL","VLC media player","/S",1,2],["WR","WinRAR","/S",0,3],["N+","Notepad++","/S",0,3]],cat=0,
$=function(i){return document.getElementById(i)},root=document.documentElement,
L=root.lang==="en"?"en":"ar",busy=false,shot=0,shv=0,sw=0,logN=0;
function save(k,v){try{localStorage.setItem(k,v)}catch(e){}}
function t(k){return T[L][k]}
function tabs(el,names,cur,fn){el.innerHTML="";names.forEach(function(n,i){var b=document.createElement("button");b.className="tab";b.type="button";b.setAttribute("role","tab");b.setAttribute("aria-selected",i===cur);b.textContent=n;b.onclick=function(){fn(i)};el.appendChild(b)})}
function mark(el,i){[].forEach.call(el.children,function(b,n){b.setAttribute("aria-selected",n===i)})}
function say(h){var l=$("log");l.innerHTML+=(l.innerHTML?"<br>":"")+h;l.scrollTop=l.scrollHeight}
function count(){var n=document.querySelectorAll(".app[aria-pressed=true]:not([hidden])").length;$("cnt").textContent=t("sel")+" "+n;$("go").disabled=busy||!n}
function drawShot(fade){var im=$("simg");function put(){var i=shot,dk=root.dataset.theme==="dark";im.src="assets/img/"+IMG[i]+(dk?"-dark":"-light")+".webp";im.alt=t("shot_alt")+": "+t("shots")[i][0];$("scap").textContent=t("shots")[i][1];im.style.opacity=1}
 if(fade){im.style.opacity=0;setTimeout(put,180)}else put()}
function drawSwitch(){var c=$("cmd");c.classList.remove("fi");void c.offsetWidth;c.classList.add("fi");$("cmd").innerHTML=CMD[sw];$("note").textContent=t("notes")[sw]+" "+t("w_n")}
function render(){
 root.lang=L;root.dir=L==="ar"?"rtl":"ltr";$("langT").textContent=L==="ar"?"EN":"AR";
 document.querySelectorAll("[data-i]").forEach(function(e){e.textContent=t(e.dataset.i)});
 document.querySelectorAll("[data-l]").forEach(function(e){var v=t(e.dataset.l);e.setAttribute("aria-label",v);e.title=v});
 document.title="Installer Pro — "+(L==="ar"?"أداة تثبيت صامت بدون إنترنت":"Silent offline installer for Windows");
 $("cats").innerHTML=t("cats").map(function(c,i){var n=APPS.filter(function(a){return !i||a[4]===i}).length;return"<button type=button class=\"cat"+(i===cat?" on":"")+"\"><span>"+c+"</span><span>"+n+"</span></button>"}).join("");
 $("feat").innerHTML=t("feat").map(function(f){return"<div><dt>"+f[0]+"</dt><dd>"+f[1]+"</dd></div>"}).join("");
 $("steps").innerHTML=t("steps").map(function(s,i){return"<li"+(i==2?" class=key":"")+"><span class=n>"+(i+1)+"</span><b>"+s[0]+"</b><span>"+s[1]+"</span></li>"}).join("");
 $("tri").innerHTML=t("tri").map(function(s){return"<div><b>"+s[0]+"</b><span>"+s[1]+"</span></div>"}).join("");
 $("req").innerHTML=t("req").map(function(s){return"<li>"+s+"</li>"}).join("");
 tabs($("stabs"),t("shots").map(function(s){return s[0]}),shot,function(i){shot=i;manual=true;stopAuto();mark($("stabs"),i);drawShot(true)});
 tabs($("wtabs"),TABS,sw,function(i){sw=i;mark($("wtabs"),i);drawSwitch();startSw()});
 drawShot(false);drawSwitch();count();if(!logN)$("log").innerHTML="&gt; "+t("ready");
 arm();
}
function buildApps(){var box=$("apps");APPS.forEach(function(a){var b=document.createElement("button");b.type="button";b.className="app";b.setAttribute("aria-pressed",!!a[3]);
 b.innerHTML="<span class=ic>"+a[0]+"</span><span class=nm>"+a[1]+"<small>"+a[2]+"</small></span><span class=st></span><span class=ck>✓</span>";
 b.onclick=function(){if(busy)return;b.setAttribute("aria-pressed",b.getAttribute("aria-pressed")!=="true");count()};box.appendChild(b)})}
$("cats").onclick=function(e){var b=e.target.closest(".cat");if(!b||busy)return;cat=[].indexOf.call($("cats").children,b);[].forEach.call($("cats").children,function(x,i){x.classList.toggle("on",i===cat)});document.querySelectorAll(".app").forEach(function(a,i){a.hidden=!!cat&&APPS[i][4]!==cat});count()};
$("go").onclick=function(){var list=[].slice.call(document.querySelectorAll(".app[aria-pressed=true]:not([hidden])"));if(!list.length||busy)return;
 busy=true;logN=1;$("log").innerHTML="";say("&gt; "+t("begin"));$("bar").style.width="0";count();
 document.querySelectorAll(".app").forEach(function(a){a.classList.remove("run","done");a.querySelector(".st").textContent=""});
 var i=0;(function next(){if(i>=list.length){say("<b>✓</b> "+t("fin").replace("{n}",list.length));busy=false;count();return}
  var a=list[i],n=a.querySelector(".nm").firstChild.textContent,s=a.querySelector("small").textContent;a.classList.add("run");a.querySelector(".st").textContent=t("wait");say("&gt; "+n+" "+s);
  setTimeout(function(){a.classList.remove("run");a.classList.add("done");a.querySelector(".st").textContent=t("ok");say("<b>✓</b> "+n);i++;$("bar").style.width=i/list.length*100+"%";setTimeout(next,200)},900)})()};
$("lang").onclick=function(){L=L==="ar"?"en":"ar";save("ip-lang",L);render()};
$("theme").onclick=function(){var d=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=d;save("ip-theme",d);drawShot(false)};
$("yr").textContent=new Date().getFullYear();
if(DOWNLOAD_URL_APP!=="#download")$("dlA").href=DOWNLOAD_URL_APP;if(DOWNLOAD_URL_PACK!=="#download")$("dlB").href=DOWNLOAD_URL_PACK;
/* Motion: scroll reveal, scroll progress, nav shadow */
document.documentElement.classList.add("js");
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");var p=e.target.parentNode;if(p&&p.id)p.dataset.seen=1;io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"}):null;
function arm(){document.querySelectorAll(".head,.win,.lab,.cta,.tick,.tabs.mid,.frame,#feat>div,#steps>li,#tri>div").forEach(function(e){
 if(e.dataset.armed)return;e.dataset.armed=1;e.classList.add("rv");
 var i=e.parentNode.id?[].indexOf.call(e.parentNode.children,e):0;e.style.setProperty("--d",Math.min(i,8));
 e.addEventListener("transitionend",function(ev){if(ev.target===e&&ev.propertyName==="opacity")e.classList.remove("rv")});
 if(!io||(e.parentNode.dataset&&e.parentNode.dataset.seen)){e.classList.add("in");e.classList.remove("rv")}else io.observe(e)})}
var sp=$("sp"),nv=document.querySelector(".nav");
function sc(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;sp.style.transform="scaleX("+(m>0?h.scrollTop/m:0)+")";nv.classList.toggle("sc",h.scrollTop>10);var tt=$("totop");if(h.scrollTop>600){tt.hidden=false;requestAnimationFrame(function(){tt.classList.add("show")})}else{tt.classList.remove("show");setTimeout(function(){if(!tt.classList.contains("show"))tt.hidden=true},250)}}
$("totop").onclick=function(){scrollTo({top:0,behavior:still?"auto":"smooth"})};
addEventListener("scroll",sc,{passive:true});sc();
/* Screenshots auto-rotate every 5s; pauses on hover and when the tab is hidden */
var autoT=null,manual=false,hold=false,still=matchMedia("(prefers-reduced-motion:reduce)").matches;
function stopAuto(){if(autoT){clearInterval(autoT);autoT=null}}
function startAuto(){stopAuto();if(still||manual)return;autoT=setInterval(function(){if(hold)return;shot=(shot+1)%IMG.length;
 [].forEach.call($("stabs").children,function(b,n){b.setAttribute("aria-selected",n===shot)});drawShot(true)},5000)}
var fr=document.querySelector(".frame");fr.addEventListener("mouseenter",function(){hold=true});fr.addEventListener("mouseleave",function(){hold=false});
document.addEventListener("visibilitychange",function(){document.hidden?stopAuto():startAuto()});
/* Silent-switch types auto-rotate every 4.5s; pause on hover/focus and when the tab is hidden */
var swT=null,swHold=false;
function stopSw(){if(swT){clearInterval(swT);swT=null}}
function startSw(){stopSw();if(still)return;swT=setInterval(function(){if(swHold)return;sw=(sw+1)%TABS.length;
 [].forEach.call($("wtabs").children,function(b,n){b.setAttribute("aria-selected",n===sw)});drawSwitch()},4500)}
var lb=document.querySelector(".lab");["mouseenter","focusin"].forEach(function(e){lb.addEventListener(e,function(){swHold=true})});["mouseleave","focusout"].forEach(function(e){lb.addEventListener(e,function(){swHold=false})});
document.addEventListener("visibilitychange",function(){document.hidden?stopSw():startSw()});
IMG.forEach(function(n){["light","dark"].forEach(function(m){new Image().src="assets/img/"+n+"-"+m+".webp"})});
buildApps();render();startAuto();startSw();

/* Email link: on desktop (often no mail app set up) open Gmail compose; on phones keep mailto */
(function(){
  var a=document.querySelector('a[href^="mailto:"]');
  if(!a)return;
  var to=a.getAttribute('href').slice(7);
  a.addEventListener('click',function(e){
    if(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent))return;
    e.preventDefault();
    var u='https://mail.google.com/mail/?view=cm&fs=1&to='+encodeURIComponent(to);
    var w=window.open(u,'_blank');
    if(w){w.opener=null}else{location.href=u}
  });
})();
