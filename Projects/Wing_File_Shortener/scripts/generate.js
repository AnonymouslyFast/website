function convert(string) {
    var list = string.split("|");
    if (list[list.length] == '') list[list.length] = null;
    var output = "";
    for (var i = 0; i < list.length; i++) {
      var line = list[i].split(",");
      for (var ie = 0; ie < line.length; ie++) {
        if (line[ie] == "x") {
          if (ie == line.length-1) {
            output += ie+1;
            line[ie] = "-"
          } else {
            output += ie+1 + ",";
          }
        }
      }
      if (i+1 != line.length) {
        if (output.charAt(output.length-1) == ",") {
          output = output.slice(0, -1);
        }
        output += "|";
      }
    }
    if (output.charAt(output.length-1) == "|") {
        output = output.slice(0, -1);
    }
    return output;
   }

function convertY(string) {
  var list = string.split("|");
    if (list[list.length] == '') list[list.length] = null;
    var output = "";
    for (var i = 0; i < list.length; i++) {
      var line = list[i].split(",");
      for (var ie = 0; ie < line.length; ie++) {
        if (line[ie] == "Y" || line[ie] == "y") {
          if (ie == line.length-1) {
            output += ie+1;
          } else {
            output += ie+1 + ",";
          }
        }
      }
      if (i+1 != line.length) {
        if (output.charAt(output.length-1) == ",") {
          output = output.slice(0, -1);
        }
        output += "|";
      }
    }
    if (output.charAt(output.length-1) == "|") {
        output = output.slice(0, -1);
    }
    return output;
}


function ChangeValue() {
    document.getElementById('a').value = convert(document.getElementById('ae').value);
    document.getElementById('aee').value = convertY(document.getElementById('ae').value);
}