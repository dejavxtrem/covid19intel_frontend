import React , {Component}from 'react';
import './amchart.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
//import * as am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
//import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);


class AmChartMap extends React.Component {


    componentDidMount ()  {
      
      // Themes end
      
      // Create map instance
      let map = am4core.create("chartdiv", am4maps.MapChart);
      
      // Set map definition
      //chart.geodata = am4geodata_worldLow;
      map.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/worldLow.json"
      
      // Set projection
      map.projection = new am4maps.projections.Miller();
      
      // Series for World map
      let worldSeries = map.series.push(new am4maps.MapPolygonSeries());
      worldSeries.exclude = ["AQ"];
      worldSeries.useGeodata = true;
      
      let polygonTemplate = worldSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = map.colors.getIndex(0);
      polygonTemplate.nonScalingStroke = true;
      
      // Hover state
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#367B25");
      
      // Series for United States map
      let usaSeries = map.series.push(new am4maps.MapPolygonSeries());
      //usaSeries.geodata = am4geodata_usaLow;
      usaSeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/usaLow.json"
      
      let usPolygonTemplate = usaSeries.mapPolygons.template;
      usPolygonTemplate.tooltipText = "{name}";
      usPolygonTemplate.fill = map.colors.getIndex(1);
      usPolygonTemplate.nonScalingStroke = true;
    }
    
    componentWillUnmount ()  {
      if (this.map) {
        this.map.dispose();
      }
    }
  
  
  
  
  
  
    render () {
  
      return (
        <div>
          <div id="chartdiv" ></div>
        </div>
      );
    }
  
  }
  
  export default AmChartMap;
  