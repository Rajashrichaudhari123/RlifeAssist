var relianceBlob;

$m.onResume(function(){
	initResume();
});

relianceBlob = "data:image/png;base64,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"

function generatePdf(){
	var blobContent = $m.getPref("lifePlannerBlobs");
	
	var data = {
	"template":'<?xml version="1.0" encoding="UTF-8"?><xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:fo="http://www.w3 .org/1999/XSL/Format"><xsl:output encoding="iso-8859-1" /><xsl:template match="SuperTrackLifePlannerImagesPdf"><fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format"><fo:layout-master-set><fo:simple-page-master page-height="279mm" page-width="216mm" margin-top="10mm" margin-left="20mm" margin-right="10mm" margin-bottom="10mm" master-name="SuperTrackLifePlannerImagesPdf"><fo:region-body margin-left="0mm" margin-right="0mm" margin-bottom="20mm" /><fo:region-before extent="16mm" /><fo:region-after extent="16mm" /><fo:region-start extent="8mm" reference-orientation="270" /><fo:region-end extent="8mm" reference-orientation="270" /></fo:simple-page-master></fo:layout-master-set><fo:page-sequence master-reference="SuperTrackLifePlannerImagesPdf"><fo:flow flow-name="xsl-region-body"><fo:block background-color="#0B4DA1" border="solid 0.1mm #0B4DA1" text-align="center" padding="5"><fo:external-graphic content-height="scale-to-fit" content-width="1.5in"><xsl:attribute name="src">url(<xsl:value-of select="comp_image" />)</xsl:attribute></fo:external-graphic></fo:block><fo:block text-align="center" padding="5" margin="5" padding-top="15"><fo:external-graphic content-height="scale-to-fit" content-width="4.5in"><xsl:attribute name="src">url(<xsl:value-of select="lifePlannerFirstImage" />)</xsl:attribute></fo:external-graphic></fo:block><fo:block text-align="center" padding="5" margin="5" padding-top="15"><fo:external-graphic content-height="scale-to-fit" content-width="4.5in"><xsl:attribute name="src">url(<xsl:value-of select="lifePlannerSecondImage" />)</xsl:attribute></fo:external-graphic></fo:block><fo:block text-align="center" padding="5" margin="5" padding-top="15"><fo:external-graphic content-height="scale-to-fit" content-width="4.5in"><xsl:attribute name="src">url(<xsl:value-of select="lifePlannerThirdImage" />)</xsl:attribute></fo:external-graphic></fo:block><fo:block text-align="center" padding="5" margin="5" padding-top="15"><fo:external-graphic content-height="scale-to-fit" content-width="4.5in"><xsl:attribute name="src">url(<xsl:value-of select="lifePlannerFourthImage" />)</xsl:attribute></fo:external-graphic></fo:block></fo:flow></fo:page-sequence></fo:root></xsl:template></xsl:stylesheet>',
	"hsource":blobContent,
	"action":"generatePDF",
	"filename":"samplePdf"
};

	var callback = function(res){
		console.log(res);
	};
	
	var url = "http://124.124.218.136/rlife2/mowblyserver/generatePdf/rellife/prod/RlifeAssist";
	fireRequestPDF(url,data,callback);
}

function fireRequestPDF(url,data, callback){
     if ($m.networkConnected()) {
    	data = JSON.stringify(data);
        $m.post(url, {"data":data}, function(callback) {
            return function(response) {
                if (response.code == 200) {
                    var result = response.result;
                    result = JSON.parse(result.data);
                    callback.call(this, result);
                } else {
                    $m.alert(messages.ServerError);
                    var errMsg = response;
                    $m.logError(JSON.stringify(response));
                }
            };
        }(callback));
    } else {
        $m.alert(messages.NoNetworkConnectivity);
    }
}

function fireGetRequest(url,res){
	if ($m.networkConnected()) {
        $m.get(url, function(cb) {
        	return function(response) {
                if (response.code === 200) {
                    // Successs
                    var result = response.result;
                    var inputsArray = JSON.parse(result.data);
                    cb.call(this, inputsArray);
                } else {
                    // Error
                    $m.alert(messages.ServerError);
                    var errMsg = response;
                    $m.logError(JSON.stringify(response));
                    cb.call(this, response);
                }
            };
        	}(res));
    } else {
        $m.alert(messages.NoNetworkConnectivity);
    }
};   

function initResume(){
	var url = "http://124.124.218.136/rlife2/mowblyserver/getExpertCallBlobImages/rellife/prod/RlifeAssist?lead_id=30";
	var resCallback = function(res){
		imagesXmlScript(res);
	};
	fireGetRequest(url,resCallback);
}


function imagesXmlScript(res){
	lifePlannerXML = "";
	//for(var i=0;i<res.length;i++){
		lifePlannerXML = '<?xml version="1.0"?><SuperTrackLifePlannerImagesPdf>';
		lifePlannerXML+= "<comp_name>Reliance</comp_name>";
		lifePlannerXML+= "<comp_image><![CDATA["+ relianceBlob +"]]></comp_image>";
		lifePlannerXML+= "<lifePlannerFirstImage><![CDATA["+ res[0] +"]]></lifePlannerFirstImage>";
		lifePlannerXML += "<lifePlannerSecondImage><![CDATA["+ res[1] +"]]></lifePlannerSecondImage>";
		lifePlannerXML += "<lifePlannerThirdImage><![CDATA["+ res[2]+ "]]></lifePlannerThirdImage>";
		lifePlannerXML +="</SuperTrackLifePlannerImagesPdf>";
	//}
	$m.putPref("lifePlannerBlobs",lifePlannerXML);
	$m.savePref();
}
