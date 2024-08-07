$(document).ready(function() {
    var text1 = 'Budi izvrstan u onom što vidiš!';
    var text2 = 'ZAISKRI.';
    var i = 0;
    var j = 0;
    var speed = 300;

    function typeWriter1() {
        if (i < text1.length) {
            document.getElementById('Textonvid1').innerHTML += text1.charAt(i);
            i++;
            setTimeout(typeWriter1, speed);
        } else {
            typeWriter2();
        }
    }

    function typeWriter2() {
        if (j < text2.length) {
            document.getElementsByClassName('Textonvid2')[0].innerHTML += text2.charAt(j);
            j++;
            setTimeout(typeWriter2, speed);
        }
    }

    typeWriter1();
});

















































































