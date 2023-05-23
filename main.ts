radio.setTransmitPower(7);
radio.onReceivedString(function (str: string) {
    basic.showIcon(IconNames.Heart)
    
    const x = str.charCodeAt(0);
    const y = str.charCodeAt(1);
    const a = parseInt(str.charAt(2)) === 1
    const b = parseInt(str.charAt(3)) === 1
    const l = parseInt(str.charAt(4)) === 1

    const ul = Math.map(x, 0, 255, -255, 255); // přizpůsobit našim kolům
    const ur = Math.map(y, 0, 255, -215, 215);




    if (a) {
        autickoJede(-255, -255);
    } else if (b) {
        autickoJede(255, 255);
    } else if (l) {
        autickoJede(0, 0);
    } else if (ul > 128) {
        autickoJede(ur - ul, ur);
    } else if (ul < 128) {
        autickoJede(ur, ur + ul);
}



}); // doleva 255 doprava 0

function autickoJede(lw: number = 128, rw: number = 128) {
    PCAmotor.MotorRun(PCAmotor.Motors.M1, lw);
    PCAmotor.MotorRun(PCAmotor.Motors.M4, -rw);
}
