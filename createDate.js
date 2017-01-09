module.exports = function createDateRes (isoDate){
    var result = {};
    var unixDate = Date.parse(isoDate)/1000;
    result.unix = unixDate;
    var MM = {Jan:"January", Feb:"February", Mar:"March", Apr:"April", May:"May", Jun:"June", Jul:"July", Aug:"August", Sep:"September", Oct:"October", Nov:"November", Dec:"December"}

    var nat = String(new Date(isoDate)).replace(/\w{3} (\w{3}) (\d{2}) (\d{4})/, function($0,$1,$2,$3){
        return MM[$1]+" "+$2+", "+$3+" ";
    });

    nat = nat.split(" ").splice(0,3).join(" ");
    if(nat !== "Invalid Date"){
        result.natural = nat;
    } else {
        result.natural = null;
    }
    return result;
}