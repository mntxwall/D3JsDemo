(function(foo){
  foo.addEventListener('load', evt => {

    //console.log("Hello")

    document.getElementById("select-btn").addEventListener('click', ev => {

      simulation
        .nodes(aaa.nodes)
        .on("tick", function () {
          context.clearRect(0, 0, width, height);
          //context.beginPath();
          // aaa.links.forEach(drawLink);
          //context.strokeStyle = "#aaa";
          //context.stroke();
          aaa.nodes.forEach(drawNode);
        });


      var zoom = d3.zoom().scaleExtent([1, 8])
        .on("zoom", function () {
          console.log("aa")
        });

      d3.select(canvas).call(zoom)

    });
  })

})(window);