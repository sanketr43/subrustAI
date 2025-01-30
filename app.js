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
                  name: "管理栄養士監修 成長サプリ にこにこカ...",
                  image_url:
                    "https://thumbnail.image.rakuten.co.jp/@0_mall/sukusuku-noppokun/cabinet/07385567/imgrc0087994984.jpg?_ex=128x128",
                },
                {
                  name: "【ネコポス送料無料】アンクレット 足...",
                  image_url:
                    "https://thumbnail.image.rakuten.co.jp/@0_mall/vox/cabinet/79/d-mkb-11332_1.jpg?_ex=128x128",
                },
                {
                  name: "日傘 クールプラス UV遮熱遮光コンパク...",
                  image_url:
                    "https://thumbnail.image.rakuten.co.jp/@0_mall/higasa/cabinet/items/1702/1702_01.jpg?_ex=128x128",
                },
                {
                  name: "全品10%OFF●送料無料 スニーカー シュ...",
                  image_url:
                    "https://thumbnail.image.rakuten.co.jp/@0_mall/adachi-jozo/cabinet/jisya/08852640/imgrc0082454263.jpg?_ex=128x128",
                },
                {
                  name: "もっとしっとり150g &クレンジング150g...",
                  image_url:
                    "https://thumbnail.image.rakuten.co.jp/@0_mall/xsyce/cabinet/compass1661401360.jpg?_ex=128x128",
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
