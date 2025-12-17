var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kelurahan_Pekapuran_Raya_1 = new ol.format.GeoJSON();
var features_Kelurahan_Pekapuran_Raya_1 = format_Kelurahan_Pekapuran_Raya_1.readFeatures(json_Kelurahan_Pekapuran_Raya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_Pekapuran_Raya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_Pekapuran_Raya_1.addFeatures(features_Kelurahan_Pekapuran_Raya_1);
var lyr_Kelurahan_Pekapuran_Raya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_Pekapuran_Raya_1, 
                style: style_Kelurahan_Pekapuran_Raya_1,
                popuplayertitle: 'Kelurahan_Pekapuran_Raya',
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_Pekapuran_Raya_1.png" /> Kelurahan_Pekapuran_Raya'
            });
var format_Kelurahan_Sei_Andai_2 = new ol.format.GeoJSON();
var features_Kelurahan_Sei_Andai_2 = format_Kelurahan_Sei_Andai_2.readFeatures(json_Kelurahan_Sei_Andai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelurahan_Sei_Andai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelurahan_Sei_Andai_2.addFeatures(features_Kelurahan_Sei_Andai_2);
var lyr_Kelurahan_Sei_Andai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kelurahan_Sei_Andai_2, 
                style: style_Kelurahan_Sei_Andai_2,
                popuplayertitle: 'Kelurahan_Sei_Andai',
                interactive: true,
                title: '<img src="styles/legend/Kelurahan_Sei_Andai_2.png" /> Kelurahan_Sei_Andai'
            });
var format_Pekapuran_Raya_3 = new ol.format.GeoJSON();
var features_Pekapuran_Raya_3 = format_Pekapuran_Raya_3.readFeatures(json_Pekapuran_Raya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pekapuran_Raya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pekapuran_Raya_3.addFeatures(features_Pekapuran_Raya_3);
var lyr_Pekapuran_Raya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pekapuran_Raya_3, 
                style: style_Pekapuran_Raya_3,
                popuplayertitle: 'Pekapuran_Raya',
                interactive: true,
    title: 'Pekapuran_Raya<br />\
    <img src="styles/legend/Pekapuran_Raya_3_0.png" /> <br />\
    <img src="styles/legend/Pekapuran_Raya_3_1.png" /> Saluran Perumahan<br />\
    <img src="styles/legend/Pekapuran_Raya_3_2.png" /> Saluran Utama<br />' });
var format_Sei_Andai_Bawang_Puting_4 = new ol.format.GeoJSON();
var features_Sei_Andai_Bawang_Puting_4 = format_Sei_Andai_Bawang_Puting_4.readFeatures(json_Sei_Andai_Bawang_Puting_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sei_Andai_Bawang_Puting_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sei_Andai_Bawang_Puting_4.addFeatures(features_Sei_Andai_Bawang_Puting_4);
var lyr_Sei_Andai_Bawang_Puting_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sei_Andai_Bawang_Puting_4, 
                style: style_Sei_Andai_Bawang_Puting_4,
                popuplayertitle: 'Sei_Andai_Bawang_Puting',
                interactive: true,
    title: 'Sei_Andai_Bawang_Puting<br />\
    <img src="styles/legend/Sei_Andai_Bawang_Puting_4_0.png" /> Saluran Perumahan<br />\
    <img src="styles/legend/Sei_Andai_Bawang_Puting_4_1.png" /> Saluran Utama<br />\
    <img src="styles/legend/Sei_Andai_Bawang_Puting_4_2.png" /> <br />' });
var format_Sei_Andai_Kelurahan_5 = new ol.format.GeoJSON();
var features_Sei_Andai_Kelurahan_5 = format_Sei_Andai_Kelurahan_5.readFeatures(json_Sei_Andai_Kelurahan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sei_Andai_Kelurahan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sei_Andai_Kelurahan_5.addFeatures(features_Sei_Andai_Kelurahan_5);
var lyr_Sei_Andai_Kelurahan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sei_Andai_Kelurahan_5, 
                style: style_Sei_Andai_Kelurahan_5,
                popuplayertitle: 'Sei_Andai_Kelurahan',
                interactive: true,
    title: 'Sei_Andai_Kelurahan<br />\
    <img src="styles/legend/Sei_Andai_Kelurahan_5_0.png" /> <br />\
    <img src="styles/legend/Sei_Andai_Kelurahan_5_1.png" /> Saluran Perumahan<br />\
    <img src="styles/legend/Sei_Andai_Kelurahan_5_2.png" /> Saluran Utama<br />' });
var format_Sei_Andai_Dharma_Bakhti_6 = new ol.format.GeoJSON();
var features_Sei_Andai_Dharma_Bakhti_6 = format_Sei_Andai_Dharma_Bakhti_6.readFeatures(json_Sei_Andai_Dharma_Bakhti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sei_Andai_Dharma_Bakhti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sei_Andai_Dharma_Bakhti_6.addFeatures(features_Sei_Andai_Dharma_Bakhti_6);
var lyr_Sei_Andai_Dharma_Bakhti_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sei_Andai_Dharma_Bakhti_6, 
                style: style_Sei_Andai_Dharma_Bakhti_6,
                popuplayertitle: 'Sei_Andai_Dharma_Bakhti',
                interactive: true,
    title: 'Sei_Andai_Dharma_Bakhti<br />\
    <img src="styles/legend/Sei_Andai_Dharma_Bakhti_6_0.png" /> <br />\
    <img src="styles/legend/Sei_Andai_Dharma_Bakhti_6_1.png" /> Saluran Perumahan<br />\
    <img src="styles/legend/Sei_Andai_Dharma_Bakhti_6_2.png" /> Saluran Utama<br />' });
var format_BatasKalselPerKecamatan_7 = new ol.format.GeoJSON();
var features_BatasKalselPerKecamatan_7 = format_BatasKalselPerKecamatan_7.readFeatures(json_BatasKalselPerKecamatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKalselPerKecamatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKalselPerKecamatan_7.addFeatures(features_BatasKalselPerKecamatan_7);
var lyr_BatasKalselPerKecamatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKalselPerKecamatan_7, 
                style: style_BatasKalselPerKecamatan_7,
                popuplayertitle: 'Batas Kalsel Per Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/BatasKalselPerKecamatan_7.png" /> Batas Kalsel Per Kecamatan'
            });
var format_BatasProvKabKot_8 = new ol.format.GeoJSON();
var features_BatasProvKabKot_8 = format_BatasProvKabKot_8.readFeatures(json_BatasProvKabKot_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvKabKot_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvKabKot_8.addFeatures(features_BatasProvKabKot_8);
var lyr_BatasProvKabKot_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvKabKot_8, 
                style: style_BatasProvKabKot_8,
                popuplayertitle: 'Batas Prov Kab Kot',
                interactive: true,
                title: '<img src="styles/legend/BatasProvKabKot_8.png" /> Batas Prov Kab Kot'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_Kelurahan_Pekapuran_Raya_1.setVisible(true);lyr_Kelurahan_Sei_Andai_2.setVisible(true);lyr_Pekapuran_Raya_3.setVisible(true);lyr_Sei_Andai_Bawang_Puting_4.setVisible(true);lyr_Sei_Andai_Kelurahan_5.setVisible(true);lyr_Sei_Andai_Dharma_Bakhti_6.setVisible(true);lyr_BatasKalselPerKecamatan_7.setVisible(true);lyr_BatasProvKabKot_8.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_Kelurahan_Pekapuran_Raya_1,lyr_Kelurahan_Sei_Andai_2,lyr_Pekapuran_Raya_3,lyr_Sei_Andai_Bawang_Puting_4,lyr_Sei_Andai_Kelurahan_5,lyr_Sei_Andai_Dharma_Bakhti_6,lyr_BatasKalselPerKecamatan_7,lyr_BatasProvKabKot_8];
lyr_Kelurahan_Pekapuran_Raya_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kelurahan_Sei_Andai_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pekapuran_Raya_3.set('fieldAliases', {'Name': 'Name', 'Jenis': 'Jenis', });
lyr_Sei_Andai_Bawang_Puting_4.set('fieldAliases', {'Name': 'Name', 'Jenis': 'Jenis', });
lyr_Sei_Andai_Kelurahan_5.set('fieldAliases', {'Name': 'Name', 'Jenis': 'Jenis', });
lyr_Sei_Andai_Dharma_Bakhti_6.set('fieldAliases', {'Name': 'Name', 'Jenis': 'Jenis', });
lyr_BatasKalselPerKecamatan_7.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', 'Status': 'Status', });
lyr_BatasProvKabKot_8.set('fieldAliases', {'Keterangan': 'Keterangan', });
lyr_Kelurahan_Pekapuran_Raya_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kelurahan_Sei_Andai_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pekapuran_Raya_3.set('fieldImages', {'Name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Sei_Andai_Bawang_Puting_4.set('fieldImages', {'Name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Sei_Andai_Kelurahan_5.set('fieldImages', {'Name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_Sei_Andai_Dharma_Bakhti_6.set('fieldImages', {'Name': 'TextEdit', 'Jenis': 'TextEdit', });
lyr_BatasKalselPerKecamatan_7.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', 'Status': 'TextEdit', });
lyr_BatasProvKabKot_8.set('fieldImages', {'Keterangan': 'TextEdit', });
lyr_Kelurahan_Pekapuran_Raya_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Kelurahan_Sei_Andai_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Pekapuran_Raya_3.set('fieldLabels', {'Name': 'hidden field', 'Jenis': 'inline label - visible with data', });
lyr_Sei_Andai_Bawang_Puting_4.set('fieldLabels', {'Name': 'hidden field', 'Jenis': 'inline label - visible with data', });
lyr_Sei_Andai_Kelurahan_5.set('fieldLabels', {'Name': 'hidden field', 'Jenis': 'inline label - visible with data', });
lyr_Sei_Andai_Dharma_Bakhti_6.set('fieldLabels', {'Name': 'hidden field', 'Jenis': 'inline label - visible with data', });
lyr_BatasKalselPerKecamatan_7.set('fieldLabels', {'LEFT_FID': 'hidden field', 'RIGHT_FID': 'hidden field', 'Status': 'inline label - visible with data', });
lyr_BatasProvKabKot_8.set('fieldLabels', {'Keterangan': 'inline label - visible with data', });
lyr_BatasProvKabKot_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});