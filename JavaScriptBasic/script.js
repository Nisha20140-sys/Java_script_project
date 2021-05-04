// const applyClickHandler=(e)=>{
    const clickForm = document.getElementById("apply");
    clickForm.addEventListener("click", function (e) {
      e.preventDefault();
      const id = document.getElementById("wall_id");
      const color = document.getElementById("wall_color");
      const wall = document.getElementById(String(id.value));
      wall.style.backgroundColor = String(color.value);
    
      for (let i = 1; i <= 9; i++) {
        if (i != id) {
          document.getElementById(i).style.backgroundColor = "transparent";
        }
      }
      id.value = color.value = "";
    });
    
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", function () {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i).style.backgroundColor = "transparent";

      }
    });
    