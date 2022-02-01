var pieChart = document.getElementById("myChart1").getContext("2d");

var myChart = new Chart(pieChart,{
    type:"pie",
    // uk clith share market 2019 
    /* data = M&S(C&H) - 6% , Next UK ex-credit - 6%, Primark UK - 5%, Archadia - 3%, 
    TK Maxx - 4%, JD Sports - 4%, debenhams UK - 2%, Sports Direct UK - 3%, New Look UK - 2%,
    H&M UK - 2%, Matarian - 2%, Rover Island - 2%, ASOS - 2%, Bochoo - 1%, EWM - 1%, 
    Rest of market - 53 % */
    data:{
        labels:['M&S(C&H)',"Next UK ex-credit","Primark UK","Archadia","TK Maxx","JD Sports","debenhams UK",
        "Sports Direct UK","New Look UK","H&M UK","Matarian","Rover Island","ASOS","Bochoo","EWM",
        "Rest of market"],
        datasets:[
            {
                data:[6,6,5,3,4,4,2,3,2,2,2,2,2,1,1,53],
                backgroundColor: ["#6d9cad","#6d9cad","#6d9cad","black","#6d9cad","#6d9cad","black","#6d9cad","#6d9cad","black","#6d9cad","#6d9cad","#6d9cad","#6d9cad","black","#6d9cad"],
                borderColor: ["white"],
                borderWidth:3,
            },
        ],
    },
    options:{
        responsive:true,
        maintainAspectRatio:false,
        layout: {
            padding: {
                left: 10,
                top: 20,
            }
        },
        plugins: {
            labels:{
                render: 'label'
            },
            title:{
                display:true,
                text:"UK Clothing Market Share (2019)",
                font: {
                    size: 20
                }
            },
            legend:{
                display: false,
            },
          }
    },
})
//updated structure 

//SETUP BLOCK
const labels = [
   '2017 H2','2018 H1','2018 H2','2019 H1', '2019 H2',
   '2020 H1','2020 H2',
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Cilent Retention Rate %',
      fill:false,
      label:{
        backgroundColor: 'red'
      },
      backgroundColor: '#6d9cad',
      borderColor: '#6d9cad',
      borderWidth:5,
      data: [ 94.75, 94.35,93.50, 93.90, 93.60, 93.35, 92.75],
      
    }
  ]};
  
  //CONFIG BLOCK
  const config = {
    type: 'line',
    data,
    options: {
      responsive:true,
      maintainAspectRatio:false,
      label:{
          display:true
      },
           scales:{
         y: {
          min: 91.50,
          max: 95,
          grid:{
            borderColor:"rgba(0,0,0,0)",
            borderWidth:15
        },
        ticks:{
            callback: function(value){
                console.log(this.getLabelForValue(value));
                return value+"%"
            }
        }
        },
        x:{
            grid:{
                display:false,
                borderColor:"rgba(0,0,0,0)",
                borderWidth:30
            },
            
        }
       },
       elements: {
        point:{
            radius: 0
        }
    },
       plugins:{
        title:{
            display:true,
            text:"Client Retention Rate %",
            font: {
                size: 20
            }
        },
        legend:{
            display: false,
        }
    },
       
      }
  };

  //rendering block
   const myChart2 = new Chart(
      document.getElementById('myChart2'),
      config
    );
  
//2 Graph
var lineChart3 = document.getElementById("myChart3").getContext("2d");

var myChart = new Chart(lineChart3,{
    type:"line",
    data:{
        labels:["Jan-18", "Feb-18", "Mar-18", "Apr-18", "May-18", "Jun-18", "Jul-18", "Aug-18", "Sep-18", "Oct-18", "Nov-18", "Dec-18",
                "Jan-19", "Feb-19", "Mar-19", "Apr-19", "May-19", "Jun-19", "Jul-19", "Aug-19", "Sep-19", "Oct-19", "Nov-19", "Dec-19",
                "Jan-20", "Feb-20", "Mar-20", "Apr-20", "May-20", "Jun-20", "Jul-20", "Aug-20", "Sep-20", "Oct-20", "Nov-20", "Dec-20"],
        datasets:[
            {
                data:[0.0,0.2,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,0.0,0.2,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,0.0,0.2,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,],
                label:"ONI",
                backgroundColor: ["lightblue"],
                borderColor: ["lightblue"],
                borderWidth:4,
            },
            {
                data:[0.0,0.2,0.3,0.4,0.6,0.9,0.0,0.2,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,0.0,0.2,0.3,0.4,0.5,0.6,0.8,0.7,0.9,0.4,0.6,0.9,],
                label:"VELO",
                backgroundColor: ["#b3845f"],
                borderColor: ["#b3845f "],
                borderWidth:4,
            },
            {
                data:[0.0,0.2,0.3,0.4,0.6,0.9,1.2,1.4,1.6,1.8,1.9,2.0,2.4,2.7,3.2,3.5,3.7,3.9,4.2,4.5,4.6,4.7,4.8,5.5,5.9,6.8,7.4,7.7,7.8,8.0,8.3,8.4,8.5,8.6,8.8,8.9],
                label:"ZYN",
                backgroundColor: ["#23637a"],
                borderColor: ["#23637a"],
                borderWidth:4,
            
            }

        ],
    },
    
    options:{
        responsive:true,
        maintainAspectRatio:false,
        tension:0.3,

        layout: {
            padding: {
                left: 10,
                top: 20,
            }
        },
          scales:{

            y: {
             min: 0,
             max: 9,
             title:{
                display: true,
                text: "millions in cans",
                font: {
                    size:17
                }
             },
             grid:{
                 borderColor:"rgba(0,0,0,0)",
                 borderWidth:30
             }
           },
           x:{
            grid:{
                display:false,
                borderColor:"rgba(0,0,0,0)",
                borderWidth:30
            },

           }
        },
           elements: {
            point:{
                radius: 0
            }
        },
        plugins:{
            tooltip:{
                backgroundColor:"red",
                borderWidth:2,
                titleColor:'black'
            },
            title:{
                display:true,
                text:"US Oral nicotine sales (4-weeks)",
                font: {
                    size: 20
                }
            },
            legend:{
                position:"bottom",
                font: {
                    size: 20
                },
                labels:{
                    boxWidth:60,
                    boxHeight:10
                }

            }
        },
        
    },
})

// labels chart outside
