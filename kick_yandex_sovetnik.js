function kickSovetnik () {
    var elems = document.querySelectorAll('body div[id]');
    var styles = document.querySelectorAll('style');


    Object.keys(elems).forEach(function(item) {
        if (/[a-z0-9]{11,13}$/.test(elems[item].id)) {
            elems[item].remove();
        }
    });

    Object.keys(styles).forEach(function(item) {
        if (styles[item].style && styles[item].innerHTML.includes('38px !important;')) {
            styles[item].remove();
        }
    });

    document.querySelector('html').style.marginTop = '0';
};

observer = new MutationObserver( kickSovetnik );
var  options = {
    'childList': true
};
var body = document.querySelector( 'body' );

observer.observe( body , options );
