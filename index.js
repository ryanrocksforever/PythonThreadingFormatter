console.log("hello")


procces = function () {
    console.log("proccesing")
    var code = document.getElementById("code")
    var text = code.value
    console.log(text)
    try {
        var args= text.match(/\(([^)]+)\)/)[1]
        //text = text.replace(args, "")
    }
    catch (e) {
        var args = ""
    }


    //args = text.match(new RegExp("(" + "(.*)" + ")"));
    //console.log(args)
    //fintext = text.replace(/H.*S/, 'HS')
    fincode = `x = threading.Thread(target=${text}) \nx.start() \nx.join()`
    console.log(fincode)
    document.getElementById("fincode").innerHTML = fincode
}


function selectText() {
    var element = document.getElementById("fincode")
    var range;
    if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

// function for copying selected text in clipboard
function copyText() {
    selectText();
    //alert('Color code ' + event.target.innerText + ' copied in clipboard')
    document.execCommand("copy");
}