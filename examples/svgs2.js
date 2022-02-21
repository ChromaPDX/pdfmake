var fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

var PdfPrinter = require('../src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');


var highchartSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="72" height="504" viewBox="0 0 72 504">
<rect width="100%" height="100%" fill="green" />
      <g transform-origin="50% 25%" transform="scale(0.5)">
        <svg viewBox="0 0 60 60">
          <defs>
            <clipPath id="clip-path-dot-color">
              <rect x="0.3" y="18.3" width="1.8" height="1.8" transform="rotate(0,1.2,19.2)" />
              <rect x="0.3" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,1.2,24.6)" />
              <rect x="0.3" y="27.3" width="1.8" height="1.8" transform="rotate(0,1.2,28.2)" />
              <rect x="0.3" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,1.2,31.8)" />
              <rect x="0.3" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,1.2,33.599999999999994)" />
              <rect x="0.3" y="36.3" width="1.8" height="1.8" transform="rotate(0,1.2,37.199999999999996)" />
              <rect x="0.3" y="38.1" width="1.8" height="1.8" transform="rotate(0,1.2,39)" />
              <rect x="0.3" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,1.2,42.599999999999994)" />
              <rect x="2.1" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,3,15.600000000000001)" />
              <rect x="2.1" y="16.5" width="1.8" height="1.8" transform="rotate(0,3,17.4)" />
              <rect x="2.1" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,3,22.8)" />
              <rect x="2.1" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,3,24.6)" />
              <rect x="2.1" y="25.5" width="1.8" height="1.8" transform="rotate(0,3,26.4)" />
              <rect x="2.1" y="27.3" width="1.8" height="1.8" transform="rotate(0,3,28.2)" />
              <rect x="2.1" y="29.1" width="1.8" height="1.8" transform="rotate(0,3,30)" />
              <rect x="2.1" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,3,33.599999999999994)" />
              <rect x="2.1" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,3,42.599999999999994)" />
              <rect x="3.9" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,4.8,15.600000000000001)" />
              <rect x="3.9" y="20.1" width="1.8" height="1.8" transform="rotate(0,4.8,21)" />
              <rect x="3.9" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,4.8,24.6)" />
              <rect x="3.9" y="27.3" width="1.8" height="1.8" transform="rotate(0,4.8,28.2)" />
              <rect x="3.9" y="29.1" width="1.8" height="1.8" transform="rotate(0,4.8,30)" />
              <rect x="3.9" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,4.8,31.8)" />
              <rect x="3.9" y="34.5" width="1.8" height="1.8" transform="rotate(0,4.8,35.4)" />
              <rect x="3.9" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,4.8,42.599999999999994)" />
              <rect x="5.7" y="20.1" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,21)" />
              <rect x="5.7" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,22.8)" />
              <rect x="5.7" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,24.6)" />
              <rect x="5.7" y="25.5" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,26.4)" />
              <rect x="5.7" y="29.1" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,30)" />
              <rect x="5.7" y="34.5" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,35.4)" />
              <rect x="5.7" y="36.3" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,37.199999999999996)" />
              <rect x="5.7" y="39.9" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,40.8)" />
              <rect x="5.7" y="43.5" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,44.4)" />
              <rect x="7.5" y="20.1" width="1.8" height="1.8" transform="rotate(0,8.4,21)" />
              <rect x="7.5" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,8.4,22.8)" />
              <rect x="7.5" y="25.5" width="1.8" height="1.8" transform="rotate(0,8.4,26.4)" />
              <rect x="7.5" y="29.1" width="1.8" height="1.8" transform="rotate(0,8.4,30)" />
              <rect x="7.5" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,8.4,31.8)" />
              <rect x="7.5" y="36.3" width="1.8" height="1.8" transform="rotate(0,8.4,37.199999999999996)" />
              <rect x="7.5" y="38.1" width="1.8" height="1.8" transform="rotate(0,8.4,39)" />
              <rect x="7.5" y="39.9" width="1.8" height="1.8" transform="rotate(0,8.4,40.8)" />
              <rect x="7.5" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,8.4,42.599999999999994)" />
              <rect x="7.5" y="43.5" width="1.8" height="1.8" transform="rotate(0,8.4,44.4)" />
              <rect x="9.3" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,22.8)" />
              <rect x="9.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,30)" />
              <rect x="9.3" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,31.8)" />
              <rect x="9.3" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,33.599999999999994)" />
              <rect x="9.3" y="34.5" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,35.4)" />
              <rect x="9.3" y="36.3" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,37.199999999999996)" />
              <rect x="9.3" y="38.1" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,39)" />
              <rect x="11.100000000000001" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,15.600000000000001)" />
              <rect x="11.100000000000001" y="18.3" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,19.2)" />
              <rect x="11.100000000000001" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,22.8)" />
              <rect x="11.100000000000001" y="25.5" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,26.4)" />
              <rect x="11.100000000000001" y="29.1" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,30)" />
              <rect x="11.100000000000001" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,33.599999999999994)" />
              <rect x="11.100000000000001" y="36.3" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,37.199999999999996)" />
              <rect x="11.100000000000001" y="39.9" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,40.8)" />
              <rect x="11.100000000000001" y="43.5" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,44.4)" />
              <rect x="12.9" y="16.5" width="1.8" height="1.8" transform="rotate(0,13.8,17.4)" />
              <rect x="12.9" y="20.1" width="1.8" height="1.8" transform="rotate(0,13.8,21)" />
              <rect x="12.9" y="25.5" width="1.8" height="1.8" transform="rotate(0,13.8,26.4)" />
              <rect x="12.9" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,13.8,31.8)" />
              <rect x="12.9" y="36.3" width="1.8" height="1.8" transform="rotate(0,13.8,37.199999999999996)" />
              <rect x="12.9" y="39.9" width="1.8" height="1.8" transform="rotate(0,13.8,40.8)" />
              <rect x="14.700000000000001" y="2.1" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,3)" />
              <rect x="14.700000000000001" y="3.9" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,4.8)" />
              <rect x="14.700000000000001" y="5.7" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,6.6000000000000005)" />
              <rect x="14.700000000000001" y="9.3" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,10.200000000000001)" />
              <rect x="14.700000000000001" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,12.000000000000002)" />
              <rect x="14.700000000000001" y="20.1" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,21)" />
              <rect x="14.700000000000001" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,24.6)" />
              <rect x="14.700000000000001" y="25.5" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,26.4)" />
              <rect x="14.700000000000001" y="27.3" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,28.2)" />
              <rect x="14.700000000000001" y="29.1" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,30)" />
              <rect x="14.700000000000001" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,31.8)" />
              <rect x="14.700000000000001" y="34.5" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,35.4)" />
              <rect x="14.700000000000001" y="36.3" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,37.199999999999996)" />
              <rect x="14.700000000000001" y="38.1" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,39)" />
              <rect x="14.700000000000001" y="43.5" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,44.4)" />
              <rect x="14.700000000000001" y="54.3" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,55.199999999999996)" />
              <rect x="14.700000000000001" y="56.1" width="1.8" height="1.8" transform="rotate(0,15.600000000000001,57)" />
              <rect x="16.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,17.4,1.2)" />
              <rect x="16.5" y="5.7" width="1.8" height="1.8" transform="rotate(0,17.4,6.6000000000000005)" />
              <rect x="16.5" y="7.5" width="1.8" height="1.8" transform="rotate(0,17.4,8.4)" />
              <rect x="16.5" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,17.4,15.600000000000001)" />
              <rect x="16.5" y="16.5" width="1.8" height="1.8" transform="rotate(0,17.4,17.4)" />
              <rect x="16.5" y="18.3" width="1.8" height="1.8" transform="rotate(0,17.4,19.2)" />
              <rect x="16.5" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,17.4,24.6)" />
              <rect x="16.5" y="25.5" width="1.8" height="1.8" transform="rotate(0,17.4,26.4)" />
              <rect x="16.5" y="36.3" width="1.8" height="1.8" transform="rotate(0,17.4,37.199999999999996)" />
              <rect x="16.5" y="38.1" width="1.8" height="1.8" transform="rotate(0,17.4,39)" />
              <rect x="16.5" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,17.4,42.599999999999994)" />
              <rect x="16.5" y="47.1" width="1.8" height="1.8" transform="rotate(0,17.4,48)" />
              <rect x="16.5" y="48.9" width="1.8" height="1.8" transform="rotate(0,17.4,49.8)" />
              <rect x="16.5" y="52.5" width="1.8" height="1.8" transform="rotate(0,17.4,53.4)" />
              <rect x="16.5" y="54.3" width="1.8" height="1.8" transform="rotate(0,17.4,55.199999999999996)" />
              <rect x="16.5" y="57.9" width="1.8" height="1.8" transform="rotate(0,17.4,58.8)" />
              <rect x="18.3" y="0.3" width="1.8" height="1.8" transform="rotate(0,19.2,1.2)" />
              <rect x="18.3" y="2.1" width="1.8" height="1.8" transform="rotate(0,19.2,3)" />
              <rect x="18.3" y="3.9" width="1.8" height="1.8" transform="rotate(0,19.2,4.8)" />
              <rect x="18.3" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,19.2,12.000000000000002)" />
              <rect x="18.3" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,19.2,15.600000000000001)" />
              <rect x="18.3" y="16.5" width="1.8" height="1.8" transform="rotate(0,19.2,17.4)" />
              <rect x="18.3" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,19.2,24.6)" />
              <rect x="18.3" y="27.3" width="1.8" height="1.8" transform="rotate(0,19.2,28.2)" />
              <rect x="18.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,19.2,30)" />
              <rect x="18.3" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,19.2,31.8)" />
              <rect x="18.3" y="38.1" width="1.8" height="1.8" transform="rotate(0,19.2,39)" />
              <rect x="18.3" y="39.9" width="1.8" height="1.8" transform="rotate(0,19.2,40.8)" />
              <rect x="18.3" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,19.2,42.599999999999994)" />
              <rect x="18.3" y="45.3" width="1.8" height="1.8" transform="rotate(0,19.2,46.199999999999996)" />
              <rect x="18.3" y="47.1" width="1.8" height="1.8" transform="rotate(0,19.2,48)" />
              <rect x="18.3" y="48.9" width="1.8" height="1.8" transform="rotate(0,19.2,49.8)" />
              <rect x="18.3" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,19.2,51.599999999999994)" />
              <rect x="18.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,19.2,53.4)" />
              <rect x="18.3" y="56.1" width="1.8" height="1.8" transform="rotate(0,19.2,57)" />
              <rect x="18.3" y="57.9" width="1.8" height="1.8" transform="rotate(0,19.2,58.8)" />
              <rect x="20.1" y="7.5" width="1.8" height="1.8" transform="rotate(0,21,8.4)" />
              <rect x="20.1" y="9.3" width="1.8" height="1.8" transform="rotate(0,21,10.200000000000001)" />
              <rect x="20.1" y="12.9" width="1.8" height="1.8" transform="rotate(0,21,13.8)" />
              <rect x="20.1" y="27.3" width="1.8" height="1.8" transform="rotate(0,21,28.2)" />
              <rect x="20.1" y="29.1" width="1.8" height="1.8" transform="rotate(0,21,30)" />
              <rect x="20.1" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,21,33.599999999999994)" />
              <rect x="20.1" y="36.3" width="1.8" height="1.8" transform="rotate(0,21,37.199999999999996)" />
              <rect x="20.1" y="47.1" width="1.8" height="1.8" transform="rotate(0,21,48)" />
              <rect x="20.1" y="48.9" width="1.8" height="1.8" transform="rotate(0,21,49.8)" />
              <rect x="20.1" y="52.5" width="1.8" height="1.8" transform="rotate(0,21,53.4)" />
              <rect x="21.900000000000002" y="0.3" width="1.8" height="1.8" transform="rotate(0,22.8,1.2)" />
              <rect x="21.900000000000002" y="2.1" width="1.8" height="1.8" transform="rotate(0,22.8,3)" />
              <rect x="21.900000000000002" y="3.9" width="1.8" height="1.8" transform="rotate(0,22.8,4.8)" />
              <rect x="21.900000000000002" y="5.7" width="1.8" height="1.8" transform="rotate(0,22.8,6.6000000000000005)" />
              <rect x="21.900000000000002" y="9.3" width="1.8" height="1.8" transform="rotate(0,22.8,10.200000000000001)" />
              <rect x="21.900000000000002" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,22.8,12.000000000000002)" />
              <rect x="21.900000000000002" y="12.9" width="1.8" height="1.8" transform="rotate(0,22.8,13.8)" />
              <rect x="21.900000000000002" y="18.3" width="1.8" height="1.8" transform="rotate(0,22.8,19.2)" />
              <rect x="21.900000000000002" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,22.8,22.8)" />
              <rect x="21.900000000000002" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,22.8,24.6)" />
              <rect x="21.900000000000002" y="29.1" width="1.8" height="1.8" transform="rotate(0,22.8,30)" />
              <rect x="21.900000000000002" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,22.8,33.599999999999994)" />
              <rect x="21.900000000000002" y="34.5" width="1.8" height="1.8" transform="rotate(0,22.8,35.4)" />
              <rect x="21.900000000000002" y="38.1" width="1.8" height="1.8" transform="rotate(0,22.8,39)" />
              <rect x="21.900000000000002" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,22.8,42.599999999999994)" />
              <rect x="21.900000000000002" y="43.5" width="1.8" height="1.8" transform="rotate(0,22.8,44.4)" />
              <rect x="21.900000000000002" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,22.8,51.599999999999994)" />
              <rect x="21.900000000000002" y="52.5" width="1.8" height="1.8" transform="rotate(0,22.8,53.4)" />
              <rect x="23.700000000000003" y="0.3" width="1.8" height="1.8" transform="rotate(0,24.6,1.2)" />
              <rect x="23.700000000000003" y="5.7" width="1.8" height="1.8" transform="rotate(0,24.6,6.6000000000000005)" />
              <rect x="23.700000000000003" y="12.9" width="1.8" height="1.8" transform="rotate(0,24.6,13.8)" />
              <rect x="23.700000000000003" y="20.1" width="1.8" height="1.8" transform="rotate(0,24.6,21)" />
              <rect x="23.700000000000003" y="25.5" width="1.8" height="1.8" transform="rotate(0,24.6,26.4)" />
              <rect x="23.700000000000003" y="27.3" width="1.8" height="1.8" transform="rotate(0,24.6,28.2)" />
              <rect x="23.700000000000003" y="29.1" width="1.8" height="1.8" transform="rotate(0,24.6,30)" />
              <rect x="23.700000000000003" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,24.6,33.599999999999994)" />
              <rect x="23.700000000000003" y="38.1" width="1.8" height="1.8" transform="rotate(0,24.6,39)" />
              <rect x="23.700000000000003" y="43.5" width="1.8" height="1.8" transform="rotate(0,24.6,44.4)" />
              <rect x="23.700000000000003" y="48.9" width="1.8" height="1.8" transform="rotate(0,24.6,49.8)" />
              <rect x="23.700000000000003" y="54.3" width="1.8" height="1.8" transform="rotate(0,24.6,55.199999999999996)" />
              <rect x="23.700000000000003" y="56.1" width="1.8" height="1.8" transform="rotate(0,24.6,57)" />
              <rect x="25.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,26.4,1.2)" />
              <rect x="25.5" y="2.1" width="1.8" height="1.8" transform="rotate(0,26.4,3)" />
              <rect x="25.5" y="7.5" width="1.8" height="1.8" transform="rotate(0,26.4,8.4)" />
              <rect x="25.5" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,26.4,12.000000000000002)" />
              <rect x="25.5" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,26.4,15.600000000000001)" />
              <rect x="25.5" y="16.5" width="1.8" height="1.8" transform="rotate(0,26.4,17.4)" />
              <rect x="25.5" y="20.1" width="1.8" height="1.8" transform="rotate(0,26.4,21)" />
              <rect x="25.5" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,26.4,22.8)" />
              <rect x="25.5" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,26.4,31.8)" />
              <rect x="25.5" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,26.4,33.599999999999994)" />
              <rect x="25.5" y="43.5" width="1.8" height="1.8" transform="rotate(0,26.4,44.4)" />
              <rect x="25.5" y="47.1" width="1.8" height="1.8" transform="rotate(0,26.4,48)" />
              <rect x="25.5" y="48.9" width="1.8" height="1.8" transform="rotate(0,26.4,49.8)" />
              <rect x="25.5" y="52.5" width="1.8" height="1.8" transform="rotate(0,26.4,53.4)" />
              <rect x="25.5" y="54.3" width="1.8" height="1.8" transform="rotate(0,26.4,55.199999999999996)" />
              <rect x="27.3" y="2.1" width="1.8" height="1.8" transform="rotate(0,28.2,3)" />
              <rect x="27.3" y="3.9" width="1.8" height="1.8" transform="rotate(0,28.2,4.8)" />
              <rect x="27.3" y="9.3" width="1.8" height="1.8" transform="rotate(0,28.2,10.200000000000001)" />
              <rect x="27.3" y="12.9" width="1.8" height="1.8" transform="rotate(0,28.2,13.8)" />
              <rect x="27.3" y="16.5" width="1.8" height="1.8" transform="rotate(0,28.2,17.4)" />
              <rect x="27.3" y="18.3" width="1.8" height="1.8" transform="rotate(0,28.2,19.2)" />
              <rect x="27.3" y="27.3" width="1.8" height="1.8" transform="rotate(0,28.2,28.2)" />
              <rect x="27.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,28.2,30)" />
              <rect x="27.3" y="34.5" width="1.8" height="1.8" transform="rotate(0,28.2,35.4)" />
              <rect x="27.3" y="36.3" width="1.8" height="1.8" transform="rotate(0,28.2,37.199999999999996)" />
              <rect x="27.3" y="38.1" width="1.8" height="1.8" transform="rotate(0,28.2,39)" />
              <rect x="27.3" y="39.9" width="1.8" height="1.8" transform="rotate(0,28.2,40.8)" />
              <rect x="27.3" y="45.3" width="1.8" height="1.8" transform="rotate(0,28.2,46.199999999999996)" />
              <rect x="27.3" y="47.1" width="1.8" height="1.8" transform="rotate(0,28.2,48)" />
              <rect x="27.3" y="48.9" width="1.8" height="1.8" transform="rotate(0,28.2,49.8)" />
              <rect x="27.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,28.2,53.4)" />
              <rect x="27.3" y="54.3" width="1.8" height="1.8" transform="rotate(0,28.2,55.199999999999996)" />
              <rect x="29.1" y="2.1" width="1.8" height="1.8" transform="rotate(0,30,3)" />
              <rect x="29.1" y="5.7" width="1.8" height="1.8" transform="rotate(0,30,6.6000000000000005)" />
              <rect x="29.1" y="7.5" width="1.8" height="1.8" transform="rotate(0,30,8.4)" />
              <rect x="29.1" y="9.3" width="1.8" height="1.8" transform="rotate(0,30,10.200000000000001)" />
              <rect x="29.1" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,30,12.000000000000002)" />
              <rect x="29.1" y="12.9" width="1.8" height="1.8" transform="rotate(0,30,13.8)" />
              <rect x="29.1" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,30,22.8)" />
              <rect x="29.1" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,30,24.6)" />
              <rect x="29.1" y="29.1" width="1.8" height="1.8" transform="rotate(0,30,30)" />
              <rect x="29.1" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,30,31.8)" />
              <rect x="29.1" y="34.5" width="1.8" height="1.8" transform="rotate(0,30,35.4)" />
              <rect x="29.1" y="36.3" width="1.8" height="1.8" transform="rotate(0,30,37.199999999999996)" />
              <rect x="29.1" y="38.1" width="1.8" height="1.8" transform="rotate(0,30,39)" />
              <rect x="29.1" y="39.9" width="1.8" height="1.8" transform="rotate(0,30,40.8)" />
              <rect x="29.1" y="45.3" width="1.8" height="1.8" transform="rotate(0,30,46.199999999999996)" />
              <rect x="29.1" y="47.1" width="1.8" height="1.8" transform="rotate(0,30,48)" />
              <rect x="29.1" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,30,51.599999999999994)" />
              <rect x="29.1" y="52.5" width="1.8" height="1.8" transform="rotate(0,30,53.4)" />
              <rect x="30.900000000000002" y="0.3" width="1.8" height="1.8" transform="rotate(0,31.8,1.2)" />
              <rect x="30.900000000000002" y="9.3" width="1.8" height="1.8" transform="rotate(0,31.8,10.200000000000001)" />
              <rect x="30.900000000000002" y="12.9" width="1.8" height="1.8" transform="rotate(0,31.8,13.8)" />
              <rect x="30.900000000000002" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,31.8,15.600000000000001)" />
              <rect x="30.900000000000002" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,31.8,22.8)" />
              <rect x="30.900000000000002" y="25.5" width="1.8" height="1.8" transform="rotate(0,31.8,26.4)" />
              <rect x="30.900000000000002" y="29.1" width="1.8" height="1.8" transform="rotate(0,31.8,30)" />
              <rect x="30.900000000000002" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,31.8,33.599999999999994)" />
              <rect x="30.900000000000002" y="38.1" width="1.8" height="1.8" transform="rotate(0,31.8,39)" />
              <rect x="30.900000000000002" y="39.9" width="1.8" height="1.8" transform="rotate(0,31.8,40.8)" />
              <rect x="30.900000000000002" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,31.8,42.599999999999994)" />
              <rect x="30.900000000000002" y="43.5" width="1.8" height="1.8" transform="rotate(0,31.8,44.4)" />
              <rect x="30.900000000000002" y="45.3" width="1.8" height="1.8" transform="rotate(0,31.8,46.199999999999996)" />
              <rect x="30.900000000000002" y="47.1" width="1.8" height="1.8" transform="rotate(0,31.8,48)" />
              <rect x="30.900000000000002" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,31.8,51.599999999999994)" />
              <rect x="30.900000000000002" y="52.5" width="1.8" height="1.8" transform="rotate(0,31.8,53.4)" />
              <rect x="32.699999999999996" y="3.9" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,4.8)" />
              <rect x="32.699999999999996" y="7.5" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,8.4)" />
              <rect x="32.699999999999996" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,12.000000000000002)" />
              <rect x="32.699999999999996" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,15.600000000000001)" />
              <rect x="32.699999999999996" y="20.1" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,21)" />
              <rect x="32.699999999999996" y="25.5" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,26.4)" />
              <rect x="32.699999999999996" y="27.3" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,28.2)" />
              <rect x="32.699999999999996" y="29.1" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,30)" />
              <rect x="32.699999999999996" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,33.599999999999994)" />
              <rect x="32.699999999999996" y="36.3" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,37.199999999999996)" />
              <rect x="32.699999999999996" y="39.9" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,40.8)" />
              <rect x="32.699999999999996" y="45.3" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,46.199999999999996)" />
              <rect x="32.699999999999996" y="47.1" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,48)" />
              <rect x="32.699999999999996" y="48.9" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,49.8)" />
              <rect x="32.699999999999996" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,51.599999999999994)" />
              <rect x="32.699999999999996" y="54.3" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,55.199999999999996)" />
              <rect x="32.699999999999996" y="56.1" width="1.8" height="1.8" transform="rotate(0,33.599999999999994,57)" />
              <rect x="34.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,35.4,1.2)" />
              <rect x="34.5" y="2.1" width="1.8" height="1.8" transform="rotate(0,35.4,3)" />
              <rect x="34.5" y="3.9" width="1.8" height="1.8" transform="rotate(0,35.4,4.8)" />
              <rect x="34.5" y="5.7" width="1.8" height="1.8" transform="rotate(0,35.4,6.6000000000000005)" />
              <rect x="34.5" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,35.4,15.600000000000001)" />
              <rect x="34.5" y="20.1" width="1.8" height="1.8" transform="rotate(0,35.4,21)" />
              <rect x="34.5" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,35.4,22.8)" />
              <rect x="34.5" y="25.5" width="1.8" height="1.8" transform="rotate(0,35.4,26.4)" />
              <rect x="34.5" y="29.1" width="1.8" height="1.8" transform="rotate(0,35.4,30)" />
              <rect x="34.5" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,35.4,31.8)" />
              <rect x="34.5" y="34.5" width="1.8" height="1.8" transform="rotate(0,35.4,35.4)" />
              <rect x="34.5" y="38.1" width="1.8" height="1.8" transform="rotate(0,35.4,39)" />
              <rect x="34.5" y="45.3" width="1.8" height="1.8" transform="rotate(0,35.4,46.199999999999996)" />
              <rect x="34.5" y="47.1" width="1.8" height="1.8" transform="rotate(0,35.4,48)" />
              <rect x="34.5" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,35.4,51.599999999999994)" />
              <rect x="34.5" y="56.1" width="1.8" height="1.8" transform="rotate(0,35.4,57)" />
              <rect x="34.5" y="57.9" width="1.8" height="1.8" transform="rotate(0,35.4,58.8)" />
              <rect x="36.3" y="2.1" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,3)" />
              <rect x="36.3" y="9.3" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,10.200000000000001)" />
              <rect x="36.3" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,12.000000000000002)" />
              <rect x="36.3" y="16.5" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,17.4)" />
              <rect x="36.3" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,22.8)" />
              <rect x="36.3" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,24.6)" />
              <rect x="36.3" y="27.3" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,28.2)" />
              <rect x="36.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,30)" />
              <rect x="36.3" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,31.8)" />
              <rect x="36.3" y="36.3" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,37.199999999999996)" />
              <rect x="36.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,53.4)" />
              <rect x="36.3" y="54.3" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,55.199999999999996)" />
              <rect x="36.3" y="57.9" width="1.8" height="1.8" transform="rotate(0,37.199999999999996,58.8)" />
              <rect x="38.1" y="0.3" width="1.8" height="1.8" transform="rotate(0,39,1.2)" />
              <rect x="38.1" y="2.1" width="1.8" height="1.8" transform="rotate(0,39,3)" />
              <rect x="38.1" y="5.7" width="1.8" height="1.8" transform="rotate(0,39,6.6000000000000005)" />
              <rect x="38.1" y="9.3" width="1.8" height="1.8" transform="rotate(0,39,10.200000000000001)" />
              <rect x="38.1" y="12.9" width="1.8" height="1.8" transform="rotate(0,39,13.8)" />
              <rect x="38.1" y="16.5" width="1.8" height="1.8" transform="rotate(0,39,17.4)" />
              <rect x="38.1" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,39,22.8)" />
              <rect x="38.1" y="25.5" width="1.8" height="1.8" transform="rotate(0,39,26.4)" />
              <rect x="38.1" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,39,31.8)" />
              <rect x="38.1" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,39,33.599999999999994)" />
              <rect x="38.1" y="38.1" width="1.8" height="1.8" transform="rotate(0,39,39)" />
              <rect x="38.1" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,39,42.599999999999994)" />
              <rect x="38.1" y="43.5" width="1.8" height="1.8" transform="rotate(0,39,44.4)" />
              <rect x="38.1" y="45.3" width="1.8" height="1.8" transform="rotate(0,39,46.199999999999996)" />
              <rect x="38.1" y="57.9" width="1.8" height="1.8" transform="rotate(0,39,58.8)" />
              <rect x="39.9" y="5.7" width="1.8" height="1.8" transform="rotate(0,40.8,6.6000000000000005)" />
              <rect x="39.9" y="7.5" width="1.8" height="1.8" transform="rotate(0,40.8,8.4)" />
              <rect x="39.9" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,40.8,12.000000000000002)" />
              <rect x="39.9" y="16.5" width="1.8" height="1.8" transform="rotate(0,40.8,17.4)" />
              <rect x="39.9" y="20.1" width="1.8" height="1.8" transform="rotate(0,40.8,21)" />
              <rect x="39.9" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,40.8,22.8)" />
              <rect x="39.9" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,40.8,24.6)" />
              <rect x="39.9" y="25.5" width="1.8" height="1.8" transform="rotate(0,40.8,26.4)" />
              <rect x="39.9" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,40.8,42.599999999999994)" />
              <rect x="39.9" y="47.1" width="1.8" height="1.8" transform="rotate(0,40.8,48)" />
              <rect x="39.9" y="48.9" width="1.8" height="1.8" transform="rotate(0,40.8,49.8)" />
              <rect x="39.9" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,40.8,51.599999999999994)" />
              <rect x="39.9" y="54.3" width="1.8" height="1.8" transform="rotate(0,40.8,55.199999999999996)" />
              <rect x="39.9" y="56.1" width="1.8" height="1.8" transform="rotate(0,40.8,57)" />
              <rect x="39.9" y="57.9" width="1.8" height="1.8" transform="rotate(0,40.8,58.8)" />
              <rect x="41.699999999999996" y="2.1" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,3)" />
              <rect x="41.699999999999996" y="3.9" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,4.8)" />
              <rect x="41.699999999999996" y="7.5" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,8.4)" />
              <rect x="41.699999999999996" y="9.3" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,10.200000000000001)" />
              <rect x="41.699999999999996" y="12.9" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,13.8)" />
              <rect x="41.699999999999996" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,15.600000000000001)" />
              <rect x="41.699999999999996" y="16.5" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,17.4)" />
              <rect x="41.699999999999996" y="20.1" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,21)" />
              <rect x="41.699999999999996" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,31.8)" />
              <rect x="41.699999999999996" y="34.5" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,35.4)" />
              <rect x="41.699999999999996" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,42.599999999999994)" />
              <rect x="41.699999999999996" y="48.9" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,49.8)" />
              <rect x="41.699999999999996" y="52.5" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,53.4)" />
              <rect x="41.699999999999996" y="56.1" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,57)" />
              <rect x="41.699999999999996" y="57.9" width="1.8" height="1.8" transform="rotate(0,42.599999999999994,58.8)" />
              <rect x="43.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,44.4,1.2)" />
              <rect x="43.5" y="9.3" width="1.8" height="1.8" transform="rotate(0,44.4,10.200000000000001)" />
              <rect x="43.5" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,44.4,12.000000000000002)" />
              <rect x="43.5" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,44.4,15.600000000000001)" />
              <rect x="43.5" y="20.1" width="1.8" height="1.8" transform="rotate(0,44.4,21)" />
              <rect x="43.5" y="25.5" width="1.8" height="1.8" transform="rotate(0,44.4,26.4)" />
              <rect x="43.5" y="27.3" width="1.8" height="1.8" transform="rotate(0,44.4,28.2)" />
              <rect x="43.5" y="29.1" width="1.8" height="1.8" transform="rotate(0,44.4,30)" />
              <rect x="43.5" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,44.4,31.8)" />
              <rect x="43.5" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,44.4,33.599999999999994)" />
              <rect x="43.5" y="43.5" width="1.8" height="1.8" transform="rotate(0,44.4,44.4)" />
              <rect x="43.5" y="45.3" width="1.8" height="1.8" transform="rotate(0,44.4,46.199999999999996)" />
              <rect x="43.5" y="47.1" width="1.8" height="1.8" transform="rotate(0,44.4,48)" />
              <rect x="43.5" y="48.9" width="1.8" height="1.8" transform="rotate(0,44.4,49.8)" />
              <rect x="43.5" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,44.4,51.599999999999994)" />
              <rect x="43.5" y="54.3" width="1.8" height="1.8" transform="rotate(0,44.4,55.199999999999996)" />
              <rect x="43.5" y="56.1" width="1.8" height="1.8" transform="rotate(0,44.4,57)" />
              <rect x="45.3" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,15.600000000000001)" />
              <rect x="45.3" y="16.5" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,17.4)" />
              <rect x="45.3" y="20.1" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,21)" />
              <rect x="45.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,30)" />
              <rect x="45.3" y="34.5" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,35.4)" />
              <rect x="45.3" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,42.599999999999994)" />
              <rect x="45.3" y="43.5" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,44.4)" />
              <rect x="45.3" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,51.599999999999994)" />
              <rect x="45.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,53.4)" />
              <rect x="45.3" y="57.9" width="1.8" height="1.8" transform="rotate(0,46.199999999999996,58.8)" />
              <rect x="47.1" y="18.3" width="1.8" height="1.8" transform="rotate(0,48,19.2)" />
              <rect x="47.1" y="20.1" width="1.8" height="1.8" transform="rotate(0,48,21)" />
              <rect x="47.1" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,48,24.6)" />
              <rect x="47.1" y="27.3" width="1.8" height="1.8" transform="rotate(0,48,28.2)" />
              <rect x="47.1" y="29.1" width="1.8" height="1.8" transform="rotate(0,48,30)" />
              <rect x="47.1" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,48,31.8)" />
              <rect x="47.1" y="34.5" width="1.8" height="1.8" transform="rotate(0,48,35.4)" />
              <rect x="47.1" y="36.3" width="1.8" height="1.8" transform="rotate(0,48,37.199999999999996)" />
              <rect x="47.1" y="39.9" width="1.8" height="1.8" transform="rotate(0,48,40.8)" />
              <rect x="47.1" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,48,42.599999999999994)" />
              <rect x="47.1" y="43.5" width="1.8" height="1.8" transform="rotate(0,48,44.4)" />
              <rect x="47.1" y="47.1" width="1.8" height="1.8" transform="rotate(0,48,48)" />
              <rect x="47.1" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,48,51.599999999999994)" />
              <rect x="48.9" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,49.8,15.600000000000001)" />
              <rect x="48.9" y="16.5" width="1.8" height="1.8" transform="rotate(0,49.8,17.4)" />
              <rect x="48.9" y="20.1" width="1.8" height="1.8" transform="rotate(0,49.8,21)" />
              <rect x="48.9" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,49.8,22.8)" />
              <rect x="48.9" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,49.8,24.6)" />
              <rect x="48.9" y="25.5" width="1.8" height="1.8" transform="rotate(0,49.8,26.4)" />
              <rect x="48.9" y="27.3" width="1.8" height="1.8" transform="rotate(0,49.8,28.2)" />
              <rect x="48.9" y="29.1" width="1.8" height="1.8" transform="rotate(0,49.8,30)" />
              <rect x="48.9" y="38.1" width="1.8" height="1.8" transform="rotate(0,49.8,39)" />
              <rect x="48.9" y="39.9" width="1.8" height="1.8" transform="rotate(0,49.8,40.8)" />
              <rect x="48.9" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,49.8,42.599999999999994)" />
              <rect x="48.9" y="43.5" width="1.8" height="1.8" transform="rotate(0,49.8,44.4)" />
              <rect x="48.9" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,49.8,51.599999999999994)" />
              <rect x="48.9" y="52.5" width="1.8" height="1.8" transform="rotate(0,49.8,53.4)" />
              <rect x="48.9" y="54.3" width="1.8" height="1.8" transform="rotate(0,49.8,55.199999999999996)" />
              <rect x="48.9" y="57.9" width="1.8" height="1.8" transform="rotate(0,49.8,58.8)" />
              <rect x="50.699999999999996" y="16.5" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,17.4)" />
              <rect x="50.699999999999996" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,22.8)" />
              <rect x="50.699999999999996" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,24.6)" />
              <rect x="50.699999999999996" y="25.5" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,26.4)" />
              <rect x="50.699999999999996" y="29.1" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,30)" />
              <rect x="50.699999999999996" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,31.8)" />
              <rect x="50.699999999999996" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,33.599999999999994)" />
              <rect x="50.699999999999996" y="34.5" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,35.4)" />
              <rect x="50.699999999999996" y="36.3" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,37.199999999999996)" />
              <rect x="50.699999999999996" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,42.599999999999994)" />
              <rect x="50.699999999999996" y="43.5" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,44.4)" />
              <rect x="50.699999999999996" y="45.3" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,46.199999999999996)" />
              <rect x="50.699999999999996" y="47.1" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,48)" />
              <rect x="50.699999999999996" y="48.9" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,49.8)" />
              <rect x="50.699999999999996" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,51.599999999999994)" />
              <rect x="50.699999999999996" y="54.3" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,55.199999999999996)" />
              <rect x="50.699999999999996" y="56.1" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,57)" />
              <rect x="50.699999999999996" y="57.9" width="1.8" height="1.8" transform="rotate(0,51.599999999999994,58.8)" />
              <rect x="52.5" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,53.4,15.600000000000001)" />
              <rect x="52.5" y="20.1" width="1.8" height="1.8" transform="rotate(0,53.4,21)" />
              <rect x="52.5" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,53.4,22.8)" />
              <rect x="52.5" y="29.1" width="1.8" height="1.8" transform="rotate(0,53.4,30)" />
              <rect x="52.5" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,53.4,31.8)" />
              <rect x="52.5" y="34.5" width="1.8" height="1.8" transform="rotate(0,53.4,35.4)" />
              <rect x="52.5" y="36.3" width="1.8" height="1.8" transform="rotate(0,53.4,37.199999999999996)" />
              <rect x="52.5" y="38.1" width="1.8" height="1.8" transform="rotate(0,53.4,39)" />
              <rect x="52.5" y="43.5" width="1.8" height="1.8" transform="rotate(0,53.4,44.4)" />
              <rect x="52.5" y="45.3" width="1.8" height="1.8" transform="rotate(0,53.4,46.199999999999996)" />
              <rect x="52.5" y="48.9" width="1.8" height="1.8" transform="rotate(0,53.4,49.8)" />
              <rect x="52.5" y="54.3" width="1.8" height="1.8" transform="rotate(0,53.4,55.199999999999996)" />
              <rect x="52.5" y="56.1" width="1.8" height="1.8" transform="rotate(0,53.4,57)" />
              <rect x="52.5" y="57.9" width="1.8" height="1.8" transform="rotate(0,53.4,58.8)" />
              <rect x="54.3" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,15.600000000000001)" />
              <rect x="54.3" y="16.5" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,17.4)" />
              <rect x="54.3" y="20.1" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,21)" />
              <rect x="54.3" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,22.8)" />
              <rect x="54.3" y="29.1" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,30)" />
              <rect x="54.3" y="34.5" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,35.4)" />
              <rect x="54.3" y="39.9" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,40.8)" />
              <rect x="54.3" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,42.599999999999994)" />
              <rect x="54.3" y="47.1" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,48)" />
              <rect x="54.3" y="48.9" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,49.8)" />
              <rect x="54.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,55.199999999999996,53.4)" />
              <rect x="56.1" y="14.700000000000001" width="1.8" height="1.8" transform="rotate(0,57,15.600000000000001)" />
              <rect x="56.1" y="16.5" width="1.8" height="1.8" transform="rotate(0,57,17.4)" />
              <rect x="56.1" y="25.5" width="1.8" height="1.8" transform="rotate(0,57,26.4)" />
              <rect x="56.1" y="29.1" width="1.8" height="1.8" transform="rotate(0,57,30)" />
              <rect x="56.1" y="30.900000000000002" width="1.8" height="1.8" transform="rotate(0,57,31.8)" />
              <rect x="56.1" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,57,33.599999999999994)" />
              <rect x="56.1" y="34.5" width="1.8" height="1.8" transform="rotate(0,57,35.4)" />
              <rect x="56.1" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,57,42.599999999999994)" />
              <rect x="56.1" y="43.5" width="1.8" height="1.8" transform="rotate(0,57,44.4)" />
              <rect x="56.1" y="48.9" width="1.8" height="1.8" transform="rotate(0,57,49.8)" />
              <rect x="56.1" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,57,51.599999999999994)" />
              <rect x="56.1" y="57.9" width="1.8" height="1.8" transform="rotate(0,57,58.8)" />
              <rect x="57.9" y="16.5" width="1.8" height="1.8" transform="rotate(0,58.8,17.4)" />
              <rect x="57.9" y="18.3" width="1.8" height="1.8" transform="rotate(0,58.8,19.2)" />
              <rect x="57.9" y="21.900000000000002" width="1.8" height="1.8" transform="rotate(0,58.8,22.8)" />
              <rect x="57.9" y="23.700000000000003" width="1.8" height="1.8" transform="rotate(0,58.8,24.6)" />
              <rect x="57.9" y="25.5" width="1.8" height="1.8" transform="rotate(0,58.8,26.4)" />
              <rect x="57.9" y="27.3" width="1.8" height="1.8" transform="rotate(0,58.8,28.2)" />
              <rect x="57.9" y="29.1" width="1.8" height="1.8" transform="rotate(0,58.8,30)" />
              <rect x="57.9" y="32.699999999999996" width="1.8" height="1.8" transform="rotate(0,58.8,33.599999999999994)" />
              <rect x="57.9" y="38.1" width="1.8" height="1.8" transform="rotate(0,58.8,39)" />
              <rect x="57.9" y="41.699999999999996" width="1.8" height="1.8" transform="rotate(0,58.8,42.599999999999994)" />
              <rect x="57.9" y="45.3" width="1.8" height="1.8" transform="rotate(0,58.8,46.199999999999996)" />
              <rect x="57.9" y="50.699999999999996" width="1.8" height="1.8" transform="rotate(0,58.8,51.599999999999994)" />
              <rect x="57.9" y="54.3" width="1.8" height="1.8" transform="rotate(0,58.8,55.199999999999996)" />
              <rect x="0.3" y="0.3" width="1.8" height="1.8" transform="rotate(0,1.2,1.2)" />
              <rect x="0.3" y="2.1" width="1.8" height="1.8" transform="rotate(0,1.2,3)" />
              <rect x="0.3" y="3.9" width="1.8" height="1.8" transform="rotate(0,1.2,4.8)" />
              <rect x="0.3" y="5.7" width="1.8" height="1.8" transform="rotate(0,1.2,6.6000000000000005)" />
              <rect x="0.3" y="7.5" width="1.8" height="1.8" transform="rotate(0,1.2,8.4)" />
              <rect x="0.3" y="9.3" width="1.8" height="1.8" transform="rotate(0,1.2,10.200000000000001)" />
              <rect x="0.3" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,1.2,12.000000000000002)" />
              <rect x="2.1" y="0.3" width="1.8" height="1.8" transform="rotate(0,3,1.2)" />
              <rect x="2.1" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,3,12.000000000000002)" />
              <rect x="3.9" y="0.3" width="1.8" height="1.8" transform="rotate(0,4.8,1.2)" />
              <rect x="3.9" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,4.8,12.000000000000002)" />
              <rect x="5.7" y="0.3" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,1.2)" />
              <rect x="5.7" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,12.000000000000002)" />
              <rect x="7.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,8.4,1.2)" />
              <rect x="7.5" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,8.4,12.000000000000002)" />
              <rect x="9.3" y="0.3" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,1.2)" />
              <rect x="9.3" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,12.000000000000002)" />
              <rect x="11.100000000000001" y="0.3" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,1.2)" />
              <rect x="11.100000000000001" y="2.1" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,3)" />
              <rect x="11.100000000000001" y="3.9" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,4.8)" />
              <rect x="11.100000000000001" y="5.7" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,6.6000000000000005)" />
              <rect x="11.100000000000001" y="7.5" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,8.4)" />
              <rect x="11.100000000000001" y="9.3" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,10.200000000000001)" />
              <rect x="11.100000000000001" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,12.000000000000002)" />
              <rect x="3.9" y="3.9" width="1.8" height="1.8" transform="rotate(0,4.8,4.8)" />
              <rect x="3.9" y="5.7" width="1.8" height="1.8" transform="rotate(0,4.8,6.6000000000000005)" />
              <rect x="3.9" y="7.5" width="1.8" height="1.8" transform="rotate(0,4.8,8.4)" />
              <rect x="5.7" y="3.9" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,4.8)" />
              <rect x="5.7" y="5.7" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,6.6000000000000005)" />
              <rect x="5.7" y="7.5" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,8.4)" />
              <rect x="7.5" y="3.9" width="1.8" height="1.8" transform="rotate(0,8.4,4.8)" />
              <rect x="7.5" y="5.7" width="1.8" height="1.8" transform="rotate(0,8.4,6.6000000000000005)" />
              <rect x="7.5" y="7.5" width="1.8" height="1.8" transform="rotate(0,8.4,8.4)" />
              <rect x="47.1" y="0.3" width="1.8" height="1.8" transform="rotate(0,48,1.2)" />
              <rect x="47.1" y="2.1" width="1.8" height="1.8" transform="rotate(0,48,3)" />
              <rect x="47.1" y="3.9" width="1.8" height="1.8" transform="rotate(0,48,4.8)" />
              <rect x="47.1" y="5.7" width="1.8" height="1.8" transform="rotate(0,48,6.6000000000000005)" />
              <rect x="47.1" y="7.5" width="1.8" height="1.8" transform="rotate(0,48,8.4)" />
              <rect x="47.1" y="9.3" width="1.8" height="1.8" transform="rotate(0,48,10.200000000000001)" />
              <rect x="47.1" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,48,12.000000000000002)" />
              <rect x="48.9" y="0.3" width="1.8" height="1.8" transform="rotate(0,49.8,1.2)" />
              <rect x="48.9" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,49.8,12.000000000000002)" />
              <rect x="50.7" y="0.3" width="1.8" height="1.8" transform="rotate(0,51.6,1.2)" />
              <rect x="50.7" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,51.6,12.000000000000002)" />
              <rect x="52.5" y="0.3" width="1.8" height="1.8" transform="rotate(0,53.4,1.2)" />
              <rect x="52.5" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,53.4,12.000000000000002)" />
              <rect x="54.300000000000004" y="0.3" width="1.8" height="1.8" transform="rotate(0,55.2,1.2)" />
              <rect x="54.300000000000004" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,55.2,12.000000000000002)" />
              <rect x="56.1" y="0.3" width="1.8" height="1.8" transform="rotate(0,57,1.2)" />
              <rect x="56.1" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,57,12.000000000000002)" />
              <rect x="57.900000000000006" y="0.3" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,1.2)" />
              <rect x="57.900000000000006" y="2.1" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,3)" />
              <rect x="57.900000000000006" y="3.9" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,4.8)" />
              <rect x="57.900000000000006" y="5.7" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,6.6000000000000005)" />
              <rect x="57.900000000000006" y="7.5" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,8.4)" />
              <rect x="57.900000000000006" y="9.3" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,10.200000000000001)" />
              <rect x="57.900000000000006" y="11.100000000000001" width="1.8" height="1.8" transform="rotate(0,58.800000000000004,12.000000000000002)" />
              <rect x="50.7" y="3.9" width="1.8" height="1.8" transform="rotate(0,51.6,4.8)" />
              <rect x="50.7" y="5.7" width="1.8" height="1.8" transform="rotate(0,51.6,6.6000000000000005)" />
              <rect x="50.7" y="7.5" width="1.8" height="1.8" transform="rotate(0,51.6,8.4)" />
              <rect x="52.5" y="3.9" width="1.8" height="1.8" transform="rotate(0,53.4,4.8)" />
              <rect x="52.5" y="5.7" width="1.8" height="1.8" transform="rotate(0,53.4,6.6000000000000005)" />
              <rect x="52.5" y="7.5" width="1.8" height="1.8" transform="rotate(0,53.4,8.4)" />
              <rect x="54.300000000000004" y="3.9" width="1.8" height="1.8" transform="rotate(0,55.2,4.8)" />
              <rect x="54.300000000000004" y="5.7" width="1.8" height="1.8" transform="rotate(0,55.2,6.6000000000000005)" />
              <rect x="54.300000000000004" y="7.5" width="1.8" height="1.8" transform="rotate(0,55.2,8.4)" />
              <rect x="0.3" y="47.1" width="1.8" height="1.8" transform="rotate(0,1.2,48)" />
              <rect x="0.3" y="48.9" width="1.8" height="1.8" transform="rotate(0,1.2,49.8)" />
              <rect x="0.3" y="50.7" width="1.8" height="1.8" transform="rotate(0,1.2,51.6)" />
              <rect x="0.3" y="52.5" width="1.8" height="1.8" transform="rotate(0,1.2,53.4)" />
              <rect x="0.3" y="54.300000000000004" width="1.8" height="1.8" transform="rotate(0,1.2,55.2)" />
              <rect x="0.3" y="56.1" width="1.8" height="1.8" transform="rotate(0,1.2,57)" />
              <rect x="0.3" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,1.2,58.800000000000004)" />
              <rect x="2.1" y="47.1" width="1.8" height="1.8" transform="rotate(0,3,48)" />
              <rect x="2.1" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,3,58.800000000000004)" />
              <rect x="3.9" y="47.1" width="1.8" height="1.8" transform="rotate(0,4.8,48)" />
              <rect x="3.9" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,4.8,58.800000000000004)" />
              <rect x="5.7" y="47.1" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,48)" />
              <rect x="5.7" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,58.800000000000004)" />
              <rect x="7.5" y="47.1" width="1.8" height="1.8" transform="rotate(0,8.4,48)" />
              <rect x="7.5" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,8.4,58.800000000000004)" />
              <rect x="9.3" y="47.1" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,48)" />
              <rect x="9.3" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,10.200000000000001,58.800000000000004)" />
              <rect x="11.100000000000001" y="47.1" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,48)" />
              <rect x="11.100000000000001" y="48.9" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,49.8)" />
              <rect x="11.100000000000001" y="50.7" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,51.6)" />
              <rect x="11.100000000000001" y="52.5" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,53.4)" />
              <rect x="11.100000000000001" y="54.300000000000004" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,55.2)" />
              <rect x="11.100000000000001" y="56.1" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,57)" />
              <rect x="11.100000000000001" y="57.900000000000006" width="1.8" height="1.8" transform="rotate(0,12.000000000000002,58.800000000000004)" />
              <rect x="3.9" y="50.7" width="1.8" height="1.8" transform="rotate(0,4.8,51.6)" />
              <rect x="3.9" y="52.5" width="1.8" height="1.8" transform="rotate(0,4.8,53.4)" />
              <rect x="3.9" y="54.300000000000004" width="1.8" height="1.8" transform="rotate(0,4.8,55.2)" />
              <rect x="5.7" y="50.7" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,51.6)" />
              <rect x="5.7" y="52.5" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,53.4)" />
              <rect x="5.7" y="54.300000000000004" width="1.8" height="1.8" transform="rotate(0,6.6000000000000005,55.2)" />
              <rect x="7.5" y="50.7" width="1.8" height="1.8" transform="rotate(0,8.4,51.6)" />
              <rect x="7.5" y="52.5" width="1.8" height="1.8" transform="rotate(0,8.4,53.4)" />
              <rect x="7.5" y="54.300000000000004" width="1.8" height="1.8" transform="rotate(0,8.4,55.2)" />
            </clipPath>
          </defs>
          <rect x="0" y="0" height="60" width="60" clip-path="url(&apos;#clip-path-background-color&apos;)" fill="#fff" />
          <rect x="0.3" y="0.3" height="59.4" width="59.4" clip-path="url(&apos;#clip-path-dot-color&apos;)" fill="#5B6233" />
        </svg>
        <g transform-origin="50% 50%" transform="scale(0.3)">
          <svg width="100%" height="100%" viewBox="0 0 206.14 203.34">
            <g id="logo Layer_2" data-name="Layer 2">
              <g id="Layer_54" data-name="Layer 54">
                <g>
                  <path fill="red" d="M201.87,101.67c-2.21,129.87-195.4,129.85-197.6,0C6.49-28.21,199.67-28.19,201.87,101.67Z" />
                  <path fill="blue" d="M103.65,119.69c-9.76,37.45,9.18,23.36,12.1,39.84-.51,3.07,0,9.75,2.93,12.08,1.21,1,.38,1-.07.9-1.81-.42-4.33-4.94-4.73-6.24-2.19,4.28,5,13.33,1.68,16.69-.41,0-.61,0-.45-1.17-.17-5-5.72-13.32-3.6-16.71,4.79-7-1.79-12.66-7.79-14.35.39,1.05-.75,7.23-.79,8.35,1.13,2.87,3.55,11.73-.88,13.44-1.61.08,3.4-4.72,0-10.34-.42,3.29-4.06,7.3-5,10.77-.35,1.29.38,3.75.48,4.18s-.25,1-.59.06c-5.53-8.8,9.64-15.46,1.85-33.78-.33-.5-1,3.4-1.49,4.57s-2.55,4-3.76,5.91c-2.84,2.79-2.36,6.3-1.34,8.79.11.35-.21.75-.62.22-3.2-2.59-1-10.06,1.53-12.93,3-2.52,3.71-22,5.42-24.38.7-.84,2.48-8.14,2.27-9.17,0-10.42.57-29.28.28-33.43-1.18-5.54-2.75-5.45-4.26-10.24-7-18.42-10.58-8.29-24.64-14.09-11.58-6-14.45-8.38-18.44-17,0,0,4.07,1,5.06.21,7.34-7.6,29.14,2.84,30.88,11.25.71,2.85,3.19,5.83,4.73,8.79,1.9,3.2,5.22,13.55,6.67,8.87.4-9-3-25,9.92-31.9,9-5.54,22.59-7.64,28.55-7.19s8.54-3.47,5.71,1.78-12.25,6.74-19.92,10.1S105.63,54.2,104,56.78c-2.21,10.8,1.75,20.85.45,35.26-.67,7.49.41,19.48-.84,27.65" />
                </g>
              </g>
            </g>
          </svg>
        </g>
      </g>
    </svg>
`;

var docDefinition = {
	content: [
		'SVG nodes behave similar to images by supporting width/height or fit',
		'It is however not yet possible to use svg files or to have a library of svgs in the document definition',
		'\n',
		'Note that before you can use SVG nodes you must install svg-to-pdfkit as it is not included with pdfmake to keep bundle size down',
		{
			svg: highchartSvg,
			width: 600,
			height: 400
		},
		'If you specify width, svg will scale proportionally',
		{
			svg: highchartSvg,
			width: 200
		},
		'You can also fit the svg inside a rectangle',
		{
			svg: highchartSvg,
			fit: [100, 100],
		},
	],
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/svgs2.pdf'));
pdfDoc.end();
