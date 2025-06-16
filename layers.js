var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_JAYAWIJAYA_1 = new ol.format.GeoJSON();
var features_JAYAWIJAYA_1 = format_JAYAWIJAYA_1.readFeatures(json_JAYAWIJAYA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JAYAWIJAYA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JAYAWIJAYA_1.addFeatures(features_JAYAWIJAYA_1);
var lyr_JAYAWIJAYA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JAYAWIJAYA_1, 
                style: style_JAYAWIJAYA_1,
                popuplayertitle: 'JAYAWIJAYA',
                interactive: true,
                title: '<img src="styles/legend/JAYAWIJAYA_1.png" /> JAYAWIJAYA'
            });
var lyr_jp21_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'jp21<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/jp21_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [15427001.049711, -499049.743824, 15498066.170183, -417905.432560]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_JAYAWIJAYA_1.setVisible(true);lyr_jp21_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_JAYAWIJAYA_1,lyr_jp21_2];
lyr_JAYAWIJAYA_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV_MIN': 'ELEV_MIN', 'ELEV_MAX': 'ELEV_MAX', });
lyr_JAYAWIJAYA_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV_MIN': 'TextEdit', 'ELEV_MAX': 'TextEdit', });
lyr_JAYAWIJAYA_1.set('fieldLabels', {'fid': 'no label', 'ID': 'inline label - always visible', 'ELEV_MIN': 'inline label - visible with data', 'ELEV_MAX': 'inline label - always visible', });
lyr_JAYAWIJAYA_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});