function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;
  
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
  
    document.getElementById("dayy").innerHTML = "Days" + ":" + d;
    document.getElementById("monthh").innerHTML = "Month" + ": " + m;
    document.getElementById("yearr").innerHTML = "Years" + ": " + y;
  }
  let one = document.querySelector('[name="one"]');
  let two = document.querySelector('[name="two"]');
  let three = document.querySelector('[name="three"]');
  
  console.log(one, two, three);
  window.onload = () => {
    one.focus();
    one.onkeyup = () => {
      if (one.value.length === 2) {
        one.blur();
        two.focus();
        one.value.slice(0, 0);
        console.log(one.value);
      }
    };
    two.onkeyup = () => {
      if (two.value.length === 2) {
        two.blur();
        three.focus();
        two.value.slice(1, 2);
        console.log(two.value);
      }
    };
  
    six.onkeyup = () => {
      if (three.value.length === 4) {
        three.blur();
        three.value.slice(1, 4);
        console.log(three.value);
      }
    };
  };
  