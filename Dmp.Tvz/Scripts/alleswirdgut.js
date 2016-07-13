var blocked = false;
function start() {
     if (!blocked) {
         blocked = true;
         popupClose();
         $('#loading').css({ left: '50%' });
         $('#loadingbar-full').animate({ width: '100%' }, 10000, 'swing', function() {
             $('#done').css({ left: '50%' });
             $('#loading').css({ left: '-10000px' });
             $('#loadingbar-full').css({ width: '0' });
             blocked = false;
         });
     }
}
function popupClose() {
     $('.popup').css({ left: '-10000px' });
}
function impressum() {
     if (!blocked) {
         popupClose();
         $('#impressum').css({ left: '50%' });
     }
}
function ueber() {
     if (!blocked) {
         popupClose();
         $('#ueber').css({ left: '50%' });
     }
}
function feedback() {
    var a1 = 'fee';
    var a2 = '-gut.de';
    var a3 = 'mach-alles';
    var a4 = 'dback';
    var a5 = '@';
    location.href = 'mailto:' + a1 + a4 + a5 + a3 + a2;
}