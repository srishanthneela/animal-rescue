function myFunction() {
    var element, name, arr;
    element = document.getElementById("myDIV");
    name = "mystyle";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
      element.className += " " + name;
    }
  }