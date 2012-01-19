/**
 * Read a text file and transform it into an JSON object
 */
var fs = require('fs');

function Parser () {
  this.type   = '';
  this.prop   = ''; 
  this.value  = '';
  this.object = {};

  this.numLines   = 0;
  this.first   = true;
}

Parser.prototype.parse = function (file) {
  var lines = this.getLines(file); 

  lines.forEach(function(line, index) {
    if (line.indexOf('*') == 0 && this.first) {
      // this is the first property of the file
      // set the property and begin adding values
      this.setProp(line);
      this.first = false;
    } else if (line.indexOf('*') == 0 || this.isLastLine(index)) {
      // there is a new property on this line,
      // or it's the last line of the file. 
      // so set the value for the last one and 
      // start adding to the new property
      this.appendProp(line);
    } else {
      // add value to appropriate property
      this.addValue(line);
    }
  }, this);

  return this.object;
}

Parser.prototype.getLines = function (file) {
  var file = fs.readFileSync(file, 'utf8'),
      lines = file.split('\n');
  // get the number of lines so we can 
  // stop when we get to the last line
  this.numLines = lines.length;
  return lines;
}

Parser.prototype.isLastLine = function (index) {
  if (index == this.numLines - 1) {
    return true;
  } else {
    return false;
  }
}
  
Parser.prototype.getPropType = function (line) {
  if (line.indexOf('[]') == 0) {
    this.type = 'array';
    this.prop = this.prop.substr(2);
    return;
  } else if (line.indexOf('.') == 0) {
    this.type = 'float';
    this.prop = this.prop.substr(1);
    return;
  } else if (line.indexOf('#') == 0) {
    this.type = 'integer';
    this.prop = this.prop.substr(1);
    return;
  } else if (line.indexOf(':') == 0) {
    this.type = 'date';
    this.prop = this.prop.substr(1);
    return;
  } else {
    this.type = 'string'; 
    return;
  }
}

Parser.prototype.addValue = function (line) {
  if (line != '' || this.type == 'date') {
    switch (this.type) {
      case 'array':
        if (Array.isArray(this.value)) {
          this.value.push(line);
        } else {
          this.value = [line];
        }
        break;
      case 'float':
        this.value = parseFloat(line);
        break;
      case 'integer': 
        this.value = parseInt(line);
        break;
      case 'date':
        this.value = new Date();
        break;
      default:
        this.value += line;
        break;
    }
  }
}

Parser.prototype.setProp = function (line) {
  this.prop = line.substr(1);
  this.value = '';
  this.getPropType(this.prop);
}

Parser.prototype.appendProp = function (line) {
  // you're moving on to the next property 
  // so set the current properties value now
  this.object[''+this.prop] = this.value; 

  // change to the new property and reset this.value
  this.setProp(line);
}

module.exports = new Parser();
