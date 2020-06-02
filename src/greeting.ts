export class greeting{
    public showGreeting(){
        const time = new Date().getHours();
  if (time < 10) {
    return "Good morning";
  } else if (time < 20) {
    return "Good day";
  } else {
    return "Good evening";
  }
    }
}