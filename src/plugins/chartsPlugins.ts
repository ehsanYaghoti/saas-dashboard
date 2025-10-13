import type { Chart } from "chart.js";


const getOrCreateLegendList = (chart : Chart , id : string) => {
  const legendContainer = document.getElementById(id);
  let listContainer = legendContainer?.querySelector('ul');

  if (!listContainer) {
    listContainer = document.createElement('ul');
    listContainer.style.display = 'flex';
    listContainer.style.flexDirection = 'row';
    listContainer.style.alignItems = 'center';
    listContainer.style.gap = '25px';
    listContainer.style.margin = '10px 0';
    listContainer.style.padding = '0';

    legendContainer?.appendChild(listContainer);
  }

  return listContainer;
};

export const htmlLegendPlugin = {
  id: 'htmlLegend',
  afterUpdate(chart : any, args : any, options : any ) {
    const ul = getOrCreateLegendList(chart, options.containerID);

    // Remove old legend items
    while (ul.firstChild) {
      ul.firstChild.remove();
    }

    // Reuse the built-in legendItems generator
    const items = chart.options.plugins.legend.labels.generateLabels(chart)

    items?.forEach((item : any) => {
      const li = document.createElement('li');
      li.style.alignItems = 'start';
      li.style.gap = '6px';
      li.style.cursor = 'pointer';
      li.style.display = 'flex';
      li.style.flexDirection = 'row';

      li.onclick = () => {
        const {type} = chart.config;
        if (type === 'pie' || type === 'doughnut') {
          // Pie and doughnut charts only have a single dataset and visibility is per item
          chart.toggleDataVisibility(item.index);
        } else {
          chart.setDatasetVisibility(item.datasetIndex, !chart.isDatasetVisible(item.datasetIndex));
        }
        chart.update();
      };

      // Color box
      const boxSpan = document.createElement('span');
      boxSpan.style.background = item.fillStyle;
      boxSpan.style.borderColor = item.strokeStyle;
      boxSpan.style.borderWidth = item.lineWidth + 'px';
      boxSpan.style.display = 'inline-block';
      boxSpan.style.flexShrink = '0';
      boxSpan.style.height = '9px';
      boxSpan.style.borderRadius = '1px';
      boxSpan.style.marginTop = '5px';
      boxSpan.style.marginRight = '5px';
      boxSpan.style.width = '9px';
      boxSpan.style.rotate = '45deg';

      // Label Section
      const textsSection = document.createElement('div');
      textsSection.style.display = "flex";
      textsSection.style.flexDirection = "column";
      textsSection.style.fontWeight = "600";

      // Label title
      const labelTitle = document.createElement('span');
      labelTitle.style.color = 'rgba(0,0,0,0.4)';
      labelTitle.style.margin = '0';
      labelTitle.style.padding = '0';
      labelTitle.style.textDecoration = item.hidden ? 'line-through' : '';

      const text = document.createTextNode(`Total ${item.text}`);
      labelTitle.appendChild(text);

      // Label paragraph
      const labelParagraph = document.createElement('p');
      labelParagraph.style.color = 'rgba(0,0,0,0.8)';
      labelParagraph.style.display = 'flex';
      labelParagraph.style.gap = '10px';
      labelParagraph.innerText = "$32,839.99";

      // Label paragraph percent
      const labelPercent = document.createElement('span');
      labelPercent.style.color = 'rgba(0,0,0,0.4)';
      labelPercent.innerText = " • 55%";


      labelParagraph.appendChild(labelPercent)
      textsSection.appendChild(labelTitle);
      textsSection.appendChild(labelParagraph);
      li.appendChild(boxSpan);
      li.appendChild(textsSection);
      ul.appendChild(li);
    });
  }
};

export const verticalHoverLine = {
  id: "verticalHoverLine",
  beforeDatasetsDraw(chart : Chart) {
    const {
      ctx,
      chartArea: { top, bottom  },
    } = chart;

    // console.log(ctx);
    // console.log(chart);

    chart.getDatasetMeta(0).data.forEach((dataPoint) => {
      if (dataPoint.active) {
        ctx.save();
        ctx.beginPath();
        // ctx.isPointInPath(dataPoint.x , dataPoint.y)
        ctx.strokeStyle = "rgba(0,0,0,0.6)";
        ctx.setLineDash([2, 4]);
        ctx.moveTo(dataPoint.x, top);
        ctx.lineTo(dataPoint.x, bottom );
        ctx.stroke();
      }
    });
  },
};
