function myFunction() {
    let hour = new Date().getHours();
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    let paragraph = document.getElementById("my-paragraph");
    paragraph.innerHTML = greeting;
  }
  