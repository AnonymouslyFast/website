var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
var special = '~`!@#$%^&&*-_+|\<>,./?';
var numbers = '0123456789'

var checkLower = true;
var checkUpper = true;
var checkSpecial = true;


function setLower() {
    checkLower = document.getElementById('lower').checked;
}
function setUpper() {
    checkUpper = document.getElementById('upper').checked;
}
function setSpecial() {
    checkSpecial = document.getElementById('special').checked;
}

function getRandom(int) {
    if (int <= 50) {
        var re = "";
        for (var x = 0; x <= 1000; x++) {
            if (re.length >= int) {
                return re;
            } else {
                var i = Math.floor(Math.random() * 101);
                var l = Math.floor(Math.random() * 27);
                if (i <= 25) {
                    if (checkLower) {
                        re += lower.charAt(l);
                    }
                } else if (i > 25 && i <= 50) {
                    if (checkUpper) {
                        re += upper.charAt(l);
                    }
                } else if (i > 50 && i <= 75) {
                    re += numbers.charAt(Math.floor(Math.random() * 11))
                } else if (i > 75 && i <= 100) {
                    if (checkSpecial) {
                        re += special.charAt(Math.floor(Math.random() * special.length+1));
                    }
                }
            }
        }
    }
}

function changePass(string) {
    document.getElementById('a').value = string;
}
