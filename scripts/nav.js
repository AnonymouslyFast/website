function goToSection(string){
    document.getElementById(string)?.scrollIntoView(true, smooth);
}

function loadProject(string) {
    var web = document.getElementById('web');
    var webTab = document.getElementById('WEBTAB');
    var ep = document.getElementById('ep');
    var epTab = document.getElementById('EPTAB');
    ep?.classList.remove('hidden');
    web?.classList.remove('hidden');
    epTab?.classList.remove('active');
    webTab?.classList.remove('active');
    if (string == "ep") {
        epTab?.classList.add('active');
        web?.classList.add('hidden');
    } else if (string == "web") {
        webTab?.classList.add('active');
        ep?.classList.add('hidden');
    }
    else {
        console.log('NOPE');
    }

}
