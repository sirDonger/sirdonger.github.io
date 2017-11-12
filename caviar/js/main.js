$(".spoiler_toggle").click( function() {
    changeToggle(this.id);

});

function changeToggle(id) {
    let num = id.charAt(7);
    let key =  id.substr(6,1);

    if(key === "T") {
        $("#toggleT" + num).hide();
        $("#toggleF" + num).show();
        showTextInfo(num);
    } else {
        $("#toggleF" + num).hide();
        $("#toggleT" + num).show();
        hideTextInfo(num);
    }
}

function hideTextInfo(num) {
    $("#textInfo" + num).hide();
}

function showTextInfo(num) {
    $("#textInfo" + num).show();
}