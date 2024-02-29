var sidebarOpen=false;
var sidebar=document.getElementById("sidebar");

function openSidebar(){
if(!sidebarOpen){
sidebar.classList.add("sidebar-responsive");
sidebarOpen=true;
}
}

function closeSidebar(){
if(sidebarOpen){
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen=false;
}
}


const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 35];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
  
});





