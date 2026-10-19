h5gg.require(7.8);

var modules = h5gg.getRangesList(0);
var base = Number(modules[0].start);

var offset1 = 0x02FF1A00;
var offset2 = 0x02FF3080;
var offset3 = 0x02E8A4F4;
var offset4 = 0x062BD138;

var addr1 = base + offset1;
var addr2 = base + offset2;
var addr3 = base + offset3;
var addr4 = base + offset4;

alert(
    "0x" + addr1.toString(16) + "\n" +
    "0x" + addr2.toString(16) + "\n" +
    "0x" + addr3.toString(16) + "\n" +
    "0x" + addr4.toString(16)
);