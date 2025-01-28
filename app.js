import { data } from "./data.js";

Highcharts.chart("container", {
  chart: {
    height: "100%",
  },
  exporting: {
    enabled: false,
  },
  // Let the center circle be transparent
  colors: ["transparent"].concat(Highcharts.getOptions().colors),
  title: {
    text: "Personalized AI Sunburst",
    style: {
      fontSize: "48px",
    },
  },
  subtitle: {
    text: "Empowering the Affiliate Ecosystem!",
    style: {
      fontSize: "28px",
    },
  },
  series: [
    {
      type: "sunburst",
      data: data,
      name: "Root",
      allowTraversingTree: true,
      borderRadius: 3,
      cursor: "pointer",
      levels: [
        {
          level: 1,
          levelIsConstant: false,
          dataLabels: {},
        },
        {
          level: 2,
          colorByPoint: true,
        },
        {
          level: 3,
          colorVariation: {
            key: "brightness",
            to: -0.5,
          },
        },
        {
          level: 4,
          colorVariation: {
            key: "brightness",
            to: 0.5,
          },
        },
        {
          level: 5,
          colorVariation: {
            key: "brightness",
            to: -0.5,
          },
        },
      ],
    },
  ],
  tooltip: {
    headerFormat: "",
    pointFormat: "{point.name}",
  },
  plotOptions: {
    series: {
      point: {
        events: {
          click: function () {
            if (this.node.children.length === 0) {
              // Check if the node is a leaf
              document.getElementById(
                "modalLabel"
              ).innerText = `${this.name} Category items`;
              const modalContent = document.getElementById("modalContent");
              modalContent.innerHTML = "";

              // Example data - replace with actual data retrieval logic
              const items = [
                {
                  name: "Item 1",
                  image_url: "https://placehold.jp/100x100.png",
                },
                {
                  name: "Item 2",
                  image_url: "https://placehold.jp/100x100.png",
                },
                {
                  name: "Item 3",
                  image_url: "https://placehold.jp/100x100.png",
                },
                {
                  name: "Item 4",
                  image_url: "https://placehold.jp/100x100.png",
                },
              ];

              // Create item cards
              items.forEach((item) => {
                const col = document.createElement("div");
                col.className = "col-md-4";
                col.innerHTML = `
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="${item.image_url}" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title">${item.name}</h5>
                        </div>
                    </div>
                `;
                modalContent.appendChild(col);
              });

              var modal = new bootstrap.Modal(
                document.getElementById("infoModal"),
                {
                  keyboard: true,
                }
              );
              modal.show();
            }
          },
        },
      },
    },
  },
});
