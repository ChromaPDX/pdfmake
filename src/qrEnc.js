/*eslint no-unused-vars: ["error", {"args": "none"}]*/
/*eslint no-redeclare: "off"*/

'use strict';


const QRCodeStyling = require("qr-code-styling");


// async function doStuff(arg) { console.log(arg + "Assume this is a useful async function") }

// options
// - modulesize: a number. this is a size of each modules in pixels, and
//   defaults to 5px.
// - margin: a number. this is a size of margin in *modules*, and defaults to
//   4 (white modules). the specficiation mandates the margin no less than 4
//   modules, so it is better not to alter this value unless you know what
//   you're doing.
function buildQrSvgNode(data, options) {

	return {
		svg: `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="231.73" height="231.73" viewBox="0 0 231.73 231.73">
  <defs>
    <style>
      .cls-1, .cls-31 {
        fill: none;
      }

      .cls-2 {
        clip-path: url(#clip-path);
      }

      .cls-3 {
        font-size: 8.09px;
      }

      .cls-21, .cls-3, .cls-52, .cls-7 {
        font-family: Document-Regular, Document;
      }

      .cls-4 {
        letter-spacing: -0.03em;
      }

      .cls-5 {
        letter-spacing: -0.02em;
      }

      .cls-6 {
        letter-spacing: -0.02em;
      }

      .cls-7 {
        font-size: 12.9px;
      }

      .cls-8 {
        letter-spacing: -0.02em;
      }

      .cls-9 {
        letter-spacing: -0.02em;
      }

      .cls-10 {
        letter-spacing: -0.03em;
      }

      .cls-11 {
        letter-spacing: -0.02em;
      }

      .cls-12 {
        letter-spacing: -0.1em;
      }

      .cls-13 {
        letter-spacing: -0.02em;
      }

      .cls-14 {
        letter-spacing: -0.02em;
      }

      .cls-15 {
        letter-spacing: -0.03em;
      }

      .cls-16 {
        letter-spacing: -0.03em;
      }

      .cls-17 {
        letter-spacing: -0.03em;
      }

      .cls-18 {
        letter-spacing: -0.02em;
      }

      .cls-19 {
        letter-spacing: -0.02em;
      }

      .cls-20 {
        letter-spacing: -0.02em;
      }

      .cls-21 {
        font-size: 19.83px;
      }

      .cls-22 {
        letter-spacing: -0.05em;
      }

      .cls-23 {
        letter-spacing: -0.04em;
      }

      .cls-24 {
        letter-spacing: -0.05em;
      }

      .cls-25 {
        letter-spacing: -0.05em;
      }

      .cls-26 {
        letter-spacing: -0.04em;
      }

      .cls-27 {
        letter-spacing: -0.04em;
      }

      .cls-28 {
        letter-spacing: -0.04em;
      }

      .cls-29 {
        letter-spacing: -0.05em;
      }

      .cls-30 {
        letter-spacing: -0.06em;
      }

      .cls-31 {
        stroke: #000;
        stroke-miterlimit: 10;
        stroke-width: 0.53px;
      }

      .cls-32 {
        font-size: 6.74px;
        font-family: HelveticaNeueLTPro-Cn, Helvetica Neue LT Pro;
      }

      .cls-33 {
        letter-spacing: 0.04em;
      }

      .cls-34 {
        letter-spacing: 0.04em;
      }

      .cls-35 {
        letter-spacing: 0.04em;
      }

      .cls-36 {
        letter-spacing: 0.02em;
      }

      .cls-37 {
        letter-spacing: 0.04em;
      }

      .cls-38 {
        letter-spacing: 0em;
      }

      .cls-39 {
        letter-spacing: 0em;
      }

      .cls-40 {
        letter-spacing: -0.08em;
      }

      .cls-41 {
        letter-spacing: -0.03em;
      }

      .cls-42 {
        letter-spacing: -0.08em;
      }

      .cls-43 {
        letter-spacing: -0.03em;
      }

      .cls-44 {
        letter-spacing: -0.07em;
      }

      .cls-45 {
        letter-spacing: -0.08em;
      }

      .cls-46 {
        letter-spacing: -0.03em;
      }

      .cls-47 {
        letter-spacing: -0.03em;
      }

      .cls-48 {
        letter-spacing: -0.04em;
      }

      .cls-49 {
        letter-spacing: -0.03em;
      }

      .cls-50 {
        letter-spacing: -0.03em;
      }

      .cls-51 {
        letter-spacing: -0.03em;
      }

      .cls-52 {
        font-size: 11.33px;
      }

      .cls-53 {
        letter-spacing: -0.03em;
      }

      .cls-54 {
        letter-spacing: -0.03em;
      }

      .cls-55 {
        letter-spacing: -0.02em;
      }

      .cls-56 {
        letter-spacing: -0.02em;
      }

      .cls-57 {
        letter-spacing: -0.02em;
      }
    </style>
    <clipPath id="clip-path" transform="translate(-989.99 -693.28)">
      <rect class="cls-1" width="1920" height="1080"/>
    </clipPath>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <g class="cls-2">
        <rect class="cls-1" width="231.73" height="231.73" rx="4.32"/>
        <text class="cls-3" transform="translate(86.21 83.38)"><tspan class="cls-4">T</tspan><tspan class="cls-5" x="4.7" y="0">ERPE</tspan><tspan class="cls-6" x="24.87" y="0">N</tspan><tspan class="cls-5" x="30.78" y="0">E</tspan><tspan x="35.8" y="0">S</tspan></text>
        <text class="cls-7" transform="translate(86.21 101.11)"><tspan class="cls-8">3</tspan><tspan class="cls-9" x="7.49" y="0">.</tspan><tspan class="cls-10" x="10.2" y="0">2</tspan><tspan class="cls-9" x="17.37" y="0">1</tspan><tspan x="23.3" y="0">%</tspan></text>
        <text class="cls-3" transform="translate(14.32 83.38)"><tspan class="cls-4">T</tspan><tspan class="cls-11" x="4.7" y="0">H</tspan><tspan x="10.56" y="0">C</tspan></text>
        <text class="cls-7" transform="translate(14.32 101.11)"><tspan class="cls-8">3</tspan><tspan class="cls-12" x="7.49" y="0">7</tspan><tspan class="cls-13" x="13.04" y="0">.7</tspan><tspan class="cls-9" x="22.35" y="0">7</tspan><tspan x="28.93" y="0">%</tspan></text>
        <text class="cls-3" transform="translate(14.32 119.65)"><tspan class="cls-14">CB</tspan><tspan x="10.77" y="0">D</tspan></text>
        <text class="cls-7" transform="translate(14.32 137.38)"><tspan class="cls-8">44</tspan><tspan class="cls-9" x="15.24" y="0">.</tspan><tspan class="cls-15" x="17.95" y="0">8</tspan><tspan class="cls-9" x="25.31" y="0">2</tspan><tspan x="32.67" y="0">%</tspan></text>
        <text class="cls-3" transform="translate(157.09 83.38)"><tspan class="cls-16">C</tspan><tspan class="cls-14" x="5.48" y="0">A</tspan><tspan class="cls-6" x="10.63" y="0">N</tspan><tspan class="cls-17" x="16.53" y="0">N</tspan><tspan class="cls-18" x="22.4" y="0">A</tspan><tspan class="cls-11" x="27.54" y="0">B</tspan><tspan class="cls-5" x="32.76" y="0">I</tspan><tspan class="cls-11" x="34.87" y="0">NO</tspan><tspan class="cls-19" x="46.84" y="0">I</tspan><tspan class="cls-20" x="48.95" y="0">D</tspan><tspan x="54.37" y="0">S</tspan></text>
        <text class="cls-7" transform="translate(157.09 101.11)"><tspan class="cls-8">44.</tspan><tspan class="cls-15" x="17.96" y="0">8</tspan><tspan class="cls-9" x="25.33" y="0">2</tspan><tspan x="32.68" y="0">%</tspan></text>
        <text class="cls-21" transform="translate(7.92 27.24)"><tspan class="cls-22">D</tspan><tspan class="cls-23" x="12.61" y="0">OU</tspan><tspan class="cls-24" x="40.21" y="0">B</tspan><tspan class="cls-25" x="52.61" y="0">L</tspan><tspan class="cls-26" x="63.14" y="0">E</tspan><tspan class="cls-27" x="75.06" y="0"> </tspan><tspan class="cls-26" x="79.22" y="0">R</tspan><tspan class="cls-28" x="91.34" y="0">A</tspan><tspan class="cls-26" x="103.55" y="0">I</tspan><tspan class="cls-27" x="108.33" y="0">N</tspan><tspan class="cls-29" x="122.41" y="0">B</tspan><tspan class="cls-30" x="134.7" y="0">O</tspan><tspan x="149.04" y="0">W</tspan></text>
        <g class="cls-2">
          <rect class="cls-31" x="81.7" y="73.09" width="66.9" height="71.65" rx="0.98"/>
          <rect class="cls-31" x="10.23" y="73.09" width="66.9" height="71.65" rx="0.98"/>
          <rect class="cls-31" x="153.16" y="73.09" width="66.9" height="71.65" rx="0.98"/>
        </g>
        <text class="cls-32" transform="translate(86.37 120.7)"><tspan class="cls-33">B</tspan><tspan class="cls-34" x="3.76" y="0">-C</tspan><tspan class="cls-35" x="10.17" y="0">A</tspan><tspan class="cls-36" x="13.8" y="0">R</tspan><tspan class="cls-34" x="17.45" y="0">YOPHYLL</tspan><tspan class="cls-33" x="42.16" y="0">EN</tspan><tspan x="49.55" y="0">E</tspan></text>
        <text class="cls-32" transform="translate(86.37 128.79)"><tspan class="cls-34">LI</tspan><tspan class="cls-33" x="4.91" y="0">M</tspan><tspan class="cls-34" x="9.91" y="0">O</tspan><tspan class="cls-35" x="13.93" y="0">NE</tspan><tspan class="cls-34" x="21.33" y="0">N</tspan><tspan x="25.34" y="0">E</tspan></text>
        <text class="cls-32" transform="translate(86.37 136.88)"><tspan class="cls-33">B</tspan><tspan class="cls-34" x="3.76" y="0">-</tspan><tspan class="cls-33" x="6.4" y="0">M</tspan><tspan class="cls-37" x="11.41" y="0">YR</tspan><tspan class="cls-33" x="18.56" y="0">CE</tspan><tspan class="cls-34" x="25.71" y="0">N</tspan><tspan x="29.72" y="0">E</tspan></text>
        <text class="cls-32" transform="translate(157.47 120.7)"><tspan class="cls-33">T</tspan><tspan class="cls-34" x="3.38" y="0">H</tspan><tspan class="cls-33" x="7.27" y="0">C</tspan><tspan class="cls-37" x="11.03" y="0">A</tspan><tspan class="cls-38" x="14.67" y="0">:</tspan><tspan class="cls-34" x="16.31" y="0" xml:space="preserve"> XX</tspan><tspan x="25.22" y="0">%</tspan></text>
        <text class="cls-32" transform="translate(157.47 128.79)"><tspan class="cls-34">D</tspan><tspan class="cls-33" x="4.02" y="0">9</tspan><tspan class="cls-34" x="7.51" y="0">THC</tspan><tspan class="cls-39" x="18.56" y="0">:</tspan><tspan class="cls-34" x="20.2" y="0" xml:space="preserve"> XX</tspan><tspan x="29.11" y="0">%</tspan></text>
        <text class="cls-32" transform="translate(157.47 136.88)"><tspan class="cls-33">C</tspan><tspan class="cls-34" x="3.76" y="0">BGA</tspan><tspan class="cls-39" x="15.06" y="0">:</tspan><tspan class="cls-34" x="16.69" y="0" xml:space="preserve"> XX</tspan><tspan x="25.6" y="0">%</tspan></text>
        <text class="cls-3" transform="translate(10.85 166.39)"><tspan class="cls-19">B</tspan><tspan class="cls-40" x="5.27" y="0">A</tspan><tspan class="cls-41" x="9.96" y="0">T</tspan><tspan class="cls-14" x="14.62" y="0">C</tspan><tspan class="cls-19" x="20.17" y="0">H</tspan><tspan class="cls-20" x="26.08" y="0">:</tspan><tspan class="cls-19" x="27.78" y="0" xml:space="preserve"> #GG</tspan><tspan class="cls-42" x="46.86" y="0">_</tspan><tspan class="cls-20" x="50.66" y="0">111</tspan><tspan class="cls-4" x="61.83" y="0">8</tspan><tspan class="cls-43" x="66.45" y="0">2</tspan><tspan x="70.94" y="0">1</tspan></text>
        <text class="cls-3" transform="translate(10.85 174.89)"><tspan class="cls-43">T</tspan><tspan class="cls-44" x="4.66" y="0">O</tspan><tspan class="cls-45" x="10.37" y="0">T</tspan><tspan class="cls-14" x="14.66" y="0">A</tspan><tspan class="cls-19" x="19.81" y="0">L</tspan><tspan class="cls-20" x="24.34" y="0"> </tspan><tspan class="cls-16" x="26.21" y="0">C</tspan><tspan class="cls-18" x="31.69" y="0">A</tspan><tspan class="cls-5" x="36.83" y="0">N</tspan><tspan class="cls-14" x="42.75" y="0">NA</tspan><tspan class="cls-11" x="53.76" y="0">B</tspan><tspan class="cls-5" x="58.98" y="0">I</tspan><tspan class="cls-14" x="61.09" y="0">N</tspan><tspan class="cls-11" x="66.96" y="0">O</tspan><tspan class="cls-6" x="73.07" y="0">I</tspan><tspan class="cls-5" x="75.17" y="0">DS</tspan><tspan class="cls-20" x="85.7" y="0">:</tspan><tspan class="cls-19" x="87.4" y="0"> </tspan><tspan class="cls-20" x="89.27" y="0">4</tspan><tspan class="cls-19" x="94.04" y="0">4</tspan><tspan class="cls-20" x="98.82" y="0">.</tspan><tspan class="cls-4" x="100.52" y="0">8</tspan><tspan class="cls-19" x="105.14" y="0">2</tspan><tspan x="109.76" y="0">%</tspan></text>
        <text class="cls-3" transform="translate(10.85 183.39)"><tspan class="cls-19">UID:</tspan><tspan class="cls-20" x="14.67" y="0" xml:space="preserve"> 1</tspan><tspan class="cls-14" x="20.25" y="0">A</tspan><tspan class="cls-19" x="25.4" y="0">4060300</tspan><tspan class="cls-46" x="59.75" y="0">0</tspan><tspan class="cls-19" x="64.68" y="0">26554</tspan><tspan class="cls-20" x="88.26" y="0">0</tspan><tspan class="cls-19" x="93.27" y="0">000</tspan><tspan class="cls-20" x="108.34" y="0">0</tspan><tspan class="cls-47" x="113.36" y="0">0</tspan><tspan class="cls-20" x="118.29" y="0">2</tspan><tspan class="cls-19" x="122.9" y="0">5</tspan><tspan x="127.6" y="0">8</tspan></text>
        <text class="cls-3" transform="translate(10.85 191.89)"><tspan class="cls-4">T</tspan><tspan class="cls-20" x="4.7" y="0">E</tspan><tspan class="cls-4" x="9.71" y="0">ST</tspan><tspan class="cls-5" x="19.44" y="0">ED</tspan><tspan class="cls-20" x="29.89" y="0">:</tspan><tspan class="cls-19" x="31.58" y="0"> </tspan><tspan class="cls-20" x="33.45" y="0">11/</tspan><tspan class="cls-19" x="44.21" y="0">23/</tspan><tspan class="cls-48" x="56.85" y="0">2</tspan><tspan class="cls-19" x="61.34" y="0">1</tspan><tspan class="cls-20" x="65.07" y="0"> </tspan><tspan class="cls-19" x="66.93" y="0"> </tspan><tspan class="cls-20" x="68.8" y="0"> </tspan><tspan class="cls-19" x="70.66" y="0">P</tspan><tspan class="cls-43" x="75.69" y="0">A</tspan><tspan class="cls-47" x="80.75" y="0">C</tspan><tspan class="cls-5" x="86.25" y="0">K</tspan><tspan class="cls-41" x="91.59" y="0">A</tspan><tspan class="cls-49" x="96.66" y="0">G</tspan><tspan class="cls-6" x="102.35" y="0">E</tspan><tspan class="cls-5" x="107.37" y="0">D</tspan><tspan class="cls-6" x="112.79" y="0">:</tspan><tspan class="cls-5" x="114.49" y="0"> </tspan><tspan class="cls-6" x="116.36" y="0">1</tspan><tspan class="cls-5" x="120.08" y="0">2</tspan><tspan class="cls-6" x="124.7" y="0">/1</tspan><tspan class="cls-19" x="131.74" y="0">/</tspan><tspan class="cls-48" x="135.06" y="0">2</tspan><tspan x="139.55" y="0">1</tspan></text>
        <text class="cls-3" transform="translate(10.85 200.39)"><tspan class="cls-4">T</tspan><tspan class="cls-5" x="4.7" y="0">H</tspan><tspan class="cls-6" x="10.61" y="0">E </tspan><tspan class="cls-19" x="17.49" y="0">H</tspan><tspan class="cls-14" x="23.4" y="0">I</tspan><tspan class="cls-11" x="25.47" y="0">G</tspan><tspan class="cls-20" x="31.17" y="0">H</tspan><tspan class="cls-19" x="37.08" y="0">L</tspan><tspan class="cls-14" x="41.62" y="0">A</tspan><tspan class="cls-6" x="46.76" y="0">N</tspan><tspan class="cls-5" x="52.66" y="0">D </tspan><tspan class="cls-16" x="59.96" y="0">C</tspan><tspan class="cls-14" x="65.44" y="0">AN</tspan><tspan class="cls-11" x="76.46" y="0">O</tspan><tspan class="cls-19" x="82.57" y="0">P</tspan><tspan x="87.59" y="0">Y</tspan></text>
        <text class="cls-3" transform="translate(10.85 208.89)"><tspan class="cls-14">D</tspan><tspan class="cls-19" x="5.39" y="0">BA</tspan><tspan class="cls-6" x="15.84" y="0"> </tspan><tspan class="cls-50" x="17.7" y="0">S</tspan><tspan class="cls-14" x="22.69" y="0">ON</tspan><tspan class="cls-46" x="34.67" y="0">O</tspan><tspan class="cls-18" x="40.74" y="0">M</tspan><tspan class="cls-5" x="47.83" y="0">A</tspan><tspan class="cls-6" x="53.01" y="0"> </tspan><tspan class="cls-5" x="54.87" y="0">H</tspan><tspan class="cls-6" x="60.78" y="0">I</tspan><tspan class="cls-51" x="62.89" y="0">L</tspan><tspan class="cls-19" x="67.34" y="0">LS </tspan><tspan class="cls-45" x="78.85" y="0">F</tspan><tspan class="cls-14" x="82.83" y="0">A</tspan><tspan class="cls-19" x="87.97" y="0">R</tspan><tspan x="93.07" y="0">M</tspan></text>
        <path d="M1005.28,910v.69h-3.72V905h.81v5Zm1.54-5v5.71H1006V905Zm3.56-.09a2.2,2.2,0,0,1,2.37,2.08h-.83a1.43,1.43,0,0,0-1.54-1.4c-1.13,0-1.8.84-1.8,2.25s.67,2.28,1.8,2.28a1.44,1.44,0,0,0,1.55-1.5h.84a2.25,2.25,0,0,1-2.39,2.18c-1.7,0-2.63-1.26-2.63-3S1008.68,904.88,1010.38,904.88Zm7.36,5.11v.69h-4.12V905h4v.69h-3.25v1.74h2.93v.69h-2.93V910Zm.89-5h1l2,3.16a16.27,16.27,0,0,1,.91,1.58h0c0-.81,0-1.26,0-1.58V905h.79v5.71h-1l-2-3.16a15.45,15.45,0,0,1-.91-1.58h0c0,.81,0,1.26,0,1.58v3.16h-.79Zm6.33,4c0,.6.51,1.11,1.48,1.11s1.39-.25,1.39-.89-.29-.85-1.16-1L1026,908c-.87-.18-1.74-.47-1.74-1.53s.81-1.61,2.12-1.61c1.13,0,2.1.5,2.14,1.75h-.84c0-.77-.51-1.07-1.3-1.07s-1.28.37-1.28.85.38.72,1.19.89l.63.12c.88.18,1.71.56,1.71,1.69s-.88,1.66-2.22,1.66-2.23-.66-2.31-1.79Zm8.8,1v.69h-4.13V905h4v.69h-3.25v1.74h2.93v.69h-2.93V910Zm6.43-2.91-.3,1.48h1v.64h-1.13l-.31,1.48h-.65l.3-1.48h-1.29l-.3,1.48h-.65l.3-1.48h-1.05v-.64h1.19l.31-1.48h-1.06v-.65h1.19l.3-1.46h.64l-.3,1.46h1.27l.3-1.46h.69l-.31,1.46h1v.65Zm-.68,0h-1.27l-.3,1.48h1.27Zm6.86-2.2a2.2,2.2,0,0,1,2.37,2.08h-.83a1.43,1.43,0,0,0-1.54-1.4c-1.13,0-1.79.84-1.79,2.25s.66,2.28,1.79,2.28a1.45,1.45,0,0,0,1.56-1.5h.83a2.25,2.25,0,0,1-2.39,2.18c-1.7,0-2.63-1.26-2.63-3S1044.67,904.88,1046.37,904.88Zm5.46,0a2.2,2.2,0,0,1,2.37,2.08h-.83a1.43,1.43,0,0,0-1.54-1.4c-1.13,0-1.79.84-1.79,2.25s.66,2.28,1.79,2.28a1.45,1.45,0,0,0,1.56-1.5h.83a2.25,2.25,0,0,1-2.39,2.18c-1.69,0-2.62-1.26-2.62-3S1050.14,904.88,1051.83,904.88Zm7,5.11v.69h-3.72V905h.81v5Zm.48,0,1.25-1.26c1.32-1.29,1.78-1.71,1.78-2.28s-.32-.9-1-.9a1,1,0,0,0-1.09,1.08h-.8a1.72,1.72,0,0,1,1.89-1.75c1.09,0,1.86.56,1.86,1.49,0,.61-.16,1-1.38,2.2-.48.48-1,1-1.55,1.46.44,0,.7,0,1,0h2v.68h-4Zm4.49-2.19c0-1.9.81-2.93,2.2-2.93s2.17,1,2.17,2.93-.79,3-2.17,3S1063.76,909.71,1063.76,907.8Zm3.56,0c0-1.37-.43-2.24-1.36-2.24s-1.39.87-1.39,2.24.45,2.29,1.39,2.29S1067.32,909.18,1067.32,907.8Zm3.8-.33v.68h-2.18v-.68Zm.81.33c0-1.9.81-2.93,2.19-2.93s2.18,1,2.18,2.93-.79,3-2.18,3S1071.93,909.71,1071.93,907.8Zm3.56,0c0-1.37-.44-2.24-1.37-2.24s-1.38.87-1.38,2.24.45,2.29,1.38,2.29S1075.49,909.18,1075.49,907.8Zm1.46,0c0-1.9.81-2.93,2.19-2.93s2.17,1,2.17,2.93-.79,3-2.17,3S1077,909.71,1077,907.8Zm3.56,0c0-1.37-.44-2.24-1.37-2.24s-1.38.87-1.38,2.24.44,2.29,1.38,2.29S1080.51,909.18,1080.51,907.8Zm1.45,0c0-1.9.81-2.93,2.19-2.93s2.18,1,2.18,2.93-.79,3-2.18,3S1082,909.71,1082,907.8Zm3.56,0c0-1.37-.44-2.24-1.37-2.24s-1.38.87-1.38,2.24.45,2.29,1.38,2.29S1085.52,909.18,1085.52,907.8Zm1.46,0c0-1.9.81-2.93,2.19-2.93s2.17,1,2.17,2.93-.79,3-2.17,3S1087,909.71,1087,907.8Zm3.56,0c0-1.37-.44-2.24-1.37-2.24s-1.38.87-1.38,2.24.44,2.29,1.38,2.29S1090.54,909.18,1090.54,907.8Zm2.24,1.34a1.18,1.18,0,0,0,1.27,1,1.14,1.14,0,0,0,1.26-1.21,1.08,1.08,0,0,0-1.18-1.22,1.29,1.29,0,0,0-1.18.66h-.8l.51-3.36h3.25v.68h-2.66l-.3,2a1.54,1.54,0,0,1,1.38-.65,1.7,1.7,0,0,1,1.79,1.88,1.86,1.86,0,0,1-2.09,1.88,1.81,1.81,0,0,1-2-1.63Zm3.9.85,1.25-1.26c1.32-1.29,1.78-1.71,1.78-2.28s-.33-.9-1-.9a1,1,0,0,0-1.09,1.08h-.81a1.73,1.73,0,0,1,1.9-1.75c1.09,0,1.86.56,1.86,1.49,0,.61-.16,1-1.38,2.2-.48.48-1,1-1.55,1.46.44,0,.69,0,1,0h2v.68h-4Zm4.49-2.19c0-1.9.81-2.93,2.19-2.93s2.18,1,2.18,2.93-.79,3-2.18,3S1101.17,909.71,1101.17,907.8Zm3.56,0c0-1.37-.44-2.24-1.37-2.24s-1.38.87-1.38,2.24.44,2.29,1.38,2.29S1104.73,909.18,1104.73,907.8Z" transform="translate(-989.99 -693.28)"/>
        <g class="cls-2">
          <path d="M1198.71,890h3.88c.46,0,.62.15.62.61v3.34c0,.45-.17.6-.63.61h-1.09a.48.48,0,0,0-.55.54c0,.39,0,.79,0,1.19a.48.48,0,0,0,.52.53c.39,0,.78,0,1.16,0s.59.17.59.58v5.69c0,.4-.16.55-.56.56h-1.16c-.39,0-.55-.18-.55-.58s0-.75,0-1.12a.51.51,0,0,0-.57-.57h-3.44a.5.5,0,0,0-.55.55v3.4c0,.42.19.6.61.6h3.3c.5,0,.65.14.65.64v1.09a.48.48,0,0,1-.53.53h-5.75c-.38,0-.54-.18-.54-.59v-5.48c0-.62-.14-.75-.76-.75h-.88c-.48,0-.65.17-.65.66v1.06c0,.38-.16.54-.54.55h-1.19c-.37,0-.53-.18-.53-.55s0-.75,0-1.13-.18-.59-.61-.59h-1.12a.49.49,0,0,1-.54-.53c0-.4,0-.81,0-1.22s.17-.51.54-.52H1189c.39,0,.58-.17.58-.55,0-1.15,0-2.29,0-3.44,0-.38-.2-.55-.58-.55h-1.12c-.4,0-.57-.17-.57-.57,0-1.14,0-2.29,0-3.44,0-.38.18-.54.58-.54h3.26c.56,0,.7-.15.7-.71v-1c0-.4.17-.57.56-.58h1.16c.4,0,.56.18.57.6v1.09c0,.42.16.58.6.58h4m-6.83,2.45c0,.2-.05.33-.05.45v5.62c0,.41.2.59.62.59H1198c.46,0,.64-.18.64-.63,0-1.85,0-3.7,0-5.55a2.46,2.46,0,0,0-.17-.62c-.23,0-.37,0-.5,0-1.84,0-3.68,0-5.52,0a2,2,0,0,0-.59.17" transform="translate(-989.99 -693.28)"/>
          <path d="M1180.1,883.17h-1.33c-.41,0-.58-.18-.58-.59v-1.09c0-.42-.18-.6-.6-.6h-1.13a.51.51,0,0,0-.55.57,9.35,9.35,0,0,0,0,1.06,2.83,2.83,0,0,0,.18.66h1.5c.43,0,.58.15.58.57,0,1.12,0,2.25,0,3.37,0,.42-.17.59-.58.59h-5.68c-.4,0-.56-.16-.56-.55s0-.78,0-1.16.17-.55.56-.56.73,0,1.09,0,.61-.17.61-.62c0-1.3,0-2.59,0-3.89v-6.19c0-.51-.15-.67-.67-.68h-1c-.4,0-.57.19-.58.59s0,.71,0,1.06-.16.62-.64.63h-1c-.46,0-.62-.17-.62-.62v-1.09c0-.38-.16-.55-.56-.57h-1.12c-.43,0-.58-.16-.59-.6V872.4c0-.45.16-.6.62-.6h10.11c.5,0,.65.15.65.65v1.09a.48.48,0,0,1-.54.52c-.35,0-.7,0-1.05,0a4.69,4.69,0,0,0-.69.18v2.4c0,.45,0,.91,0,1.36s.17.6.6.61h1.12a.51.51,0,0,0,.56-.55c0-.39,0-.77,0-1.16s.16-.57.55-.57h5.72c.37,0,.54.18.55.55V878c0,.48-.16.64-.63.64h-3.27c-.49,0-.65.16-.66.64v1c0,.44.17.6.6.6h1.09c.42,0,.6.17.6.6v3.34c0,.44.17.61.62.61h1.06c.41,0,.58.17.59.57v1.16c0,.37-.18.53-.55.54h-1.09c-.47,0-.63.16-.63.63v5.48c0,.58-.14.72-.73.72h-.92c-.47,0-.63-.17-.63-.64,0-1.35,0-2.7,0-4q0-3,0-6a.65.65,0,0,0-.36-.66" transform="translate(-989.99 -693.28)"/>
          <path d="M1160,874.27a2.84,2.84,0,0,0-.67-.2c-1.07,0-2.13,0-3.2,0-.53,0-.68.16-.68.69V878c0,.52.14.67.66.67h3.24c.49,0,.64.15.65.65v5.52c0,.5.15.65.64.65,1.08,0,2.15,0,3.23,0a2.66,2.66,0,0,0,.67-.18c0-1.37,0-2.64,0-3.91,0-.3-.21-.44-.5-.45h-1.19c-.41,0-.57-.17-.57-.58s0-.73,0-1.09.16-.59.6-.59.68,0,1,0a3.19,3.19,0,0,0,.65-.19V877c0-.44.16-.61.6-.61h3.37c.42,0,.57.16.58.58V878c0,.41-.17.57-.59.58h-1.12a.49.49,0,0,0-.56.53v1.23a.48.48,0,0,0,.52.5h1.19c.39,0,.55.17.56.56v1.16c0,.39-.18.55-.57.56h-1.16a.5.5,0,0,0-.54.52v1.2a.49.49,0,0,0,.54.55c.39,0,.77,0,1.16,0s.56.17.57.56v1.12c0,.44-.16.59-.6.6h-3.3c-.49,0-.65.16-.65.64s0,.73,0,1.09a.48.48,0,0,1-.56.54h-1.15c-.38,0-.56-.18-.56-.57s0-.68,0-1a4.27,4.27,0,0,0-.18-.68h-3.73c-.48,0-.64-.17-.64-.64,0-1.09,0-2.18,0-3.27a2.68,2.68,0,0,0-.18-.64h-1.38c-.56,0-.69-.14-.69-.71v-1c0-.41-.18-.59-.58-.59h-1.16c-.37,0-.54-.16-.54-.54,0-2.67,0-5.33,0-8,0-.38.17-.54.54-.54H1164c.38,0,.54.16.55.54,0,1.16,0,2.31,0,3.47,0,.36-.16.52-.52.52h-3.47c-.38,0-.53-.16-.54-.55s0-.93,0-1.51" transform="translate(-989.99 -693.28)"/>
          <path d="M1210,869.47h-15.88V853.64H1210Zm-2.26-13.59h-11.33v11.34h11.33Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1153.2,853.64h15.85v15.83H1153.2Zm13.61,2.24h-11.33v11.34h11.33Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1169.06,910.42h-15.85V894.58h15.85Zm-2.25-13.58h-11.33v11.33h11.33Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1173.27,896.81c-.45,0-.89,0-1.33,0s-.57-.16-.57-.55c0-1.14,0-2.29,0-3.44,0-.38.17-.55.56-.56H1173c.44,0,.61-.17.61-.62s0-.72,0-1.09.18-.55.57-.55h3.37c.45,0,.62.16.62.61v3.3c0,.46.17.63.63.64h1.09c.37,0,.54.16.54.54s0,.7,0,1c0,.52.16.67.67.67h1.05a.5.5,0,0,1,.57.56c0,.35,0,.71,0,1.06s-.15.65-.65.65h-7.79c-.52,0-.66-.15-.67-.67,0-.31,0-.63,0-.95a.66.66,0,0,0-.37-.66" transform="translate(-989.99 -693.28)"/>
          <path d="M1178.19,858v-1.48c0-.48.15-.62.63-.62h5.55c.49,0,.63.14.64.62v1c0,.48-.15.62-.64.62h-3.27c-.5,0-.64.15-.64.66,0,1.09,0,2.18,0,3.26,0,.49-.14.63-.62.64h-1.09a.48.48,0,0,1-.55-.54c0-.38,0-.77,0-1.15s-.19-.57-.6-.57h-1.12a.5.5,0,0,0-.56.56c0,.39,0,.78,0,1.16a.47.47,0,0,1-.54.54h-3.44c-.37,0-.54-.17-.55-.54s0-.81,0-1.22a.46.46,0,0,1,.5-.51h1.41a.68.68,0,0,0,.36-.67c0-.35,0-.7,0-1a.51.51,0,0,0-.56-.57h-1.16c-.37,0-.54-.17-.54-.54s0-.79,0-1.19.17-.53.55-.53h1c.55,0,.69-.14.69-.68v-1c0-.4.18-.58.59-.59h1.09c.43,0,.59.16.6.6v3.3c0,.49.16.65.65.65s.68,0,1,0a5.08,5.08,0,0,0,.61-.16" transform="translate(-989.99 -693.28)"/>
          <path d="M1183,908.19h1.48c.41,0,.57.17.58.59v1.15a.48.48,0,0,1-.53.54H1181c-.34,0-.51-.19-.52-.55s0-.77,0-1.15a.51.51,0,0,0-.58-.58c-.38,0-.77,0-1.15,0a.49.49,0,0,0-.53.53c0,.4,0,.8,0,1.2a.5.5,0,0,1-.55.55h-1.19a.48.48,0,0,1-.54-.56v-5.72c0-.37.18-.54.55-.55h1.19c.36,0,.53.2.54.57v1.09c0,.45.17.62.63.62h3.27c.5,0,.65.15.65.65,0,.33,0,.66,0,1a2.88,2.88,0,0,0,.2.63" transform="translate(-989.99 -693.28)"/>
          <path d="M1194.12,884.27v-2.79c0-.43.16-.59.6-.59h5.61c.44,0,.61.17.61.62v1.06c0,.42-.17.6-.6.6H1197c-.48,0-.62.14-.63.63v1.06c0,.4.18.58.58.58h3.27c.58,0,.71.14.71.72v1c0,.37-.17.56-.53.56h-5.75c-.39,0-.54-.17-.54-.58v-2.86" transform="translate(-989.99 -693.28)"/>
          <path d="M1196.57,876.34h8.21c.57,0,.71.14.71.7,0,.34,0,.68,0,1a.5.5,0,0,1-.57.56h-1.16a.49.49,0,0,0-.55.54c0,.39,0,.77,0,1.16s-.16.56-.56.56h-1.19a.48.48,0,0,1-.52-.53c0-.37,0-.75,0-1.12s-.17-.61-.63-.61h-5.51c-.54,0-.68-.14-.68-.68V874.7c0-.49.15-.63.65-.64h1c.47,0,.62.16.62.64,0,.32,0,.64,0,.95a3.7,3.7,0,0,0,.18.69" transform="translate(-989.99 -693.28)"/>
          <path d="M1210,892.29v3.85c0,.53-.14.67-.66.67h-5.51c-.52,0-.66-.14-.66-.67v-.92c0-.53.14-.67.66-.67h3.2c.55,0,.69-.14.69-.68v-3.23c0-.49-.15-.64-.65-.65H1206a.47.47,0,0,1-.52-.53c0-.4,0-.81,0-1.22a.45.45,0,0,1,.5-.52h3.54c.36,0,.5.2.5.62,0,1.32,0,2.64,0,3.95" transform="translate(-989.99 -693.28)"/>
          <path d="M1190.72,871.8h2.79c.45,0,.6.16.61.62v1c0,.46-.17.62-.65.62h-1c-.43,0-.62.18-.62.62V878c0,.48-.15.64-.63.64h-3.3c-.45,0-.61-.16-.61-.62v-5.62c0-.44.15-.58.6-.58h2.83" transform="translate(-989.99 -693.28)"/>
          <path d="M1191.83,884.3v2.79c0,.48-.14.62-.63.63h-3.27c-.49,0-.64-.15-.64-.63v-5.57c0-.48.16-.63.64-.63h3.26c.48,0,.64.15.64.62v2.79" transform="translate(-989.99 -693.28)"/>
          <path d="M1191.83,866.13v2.79c0,.44-.15.58-.6.59h-1.15a.45.45,0,0,1-.51-.5c0-.39,0-.77,0-1.16s-.17-.59-.6-.6h-1.06c-.43,0-.61-.16-.61-.58V861c0-.4.16-.54.57-.55H1189c.41,0,.58.17.58.58s0,.74,0,1.12a.5.5,0,0,0,.57.57c.37,0,.75,0,1.12,0s.58.16.58.58v2.86" transform="translate(-989.99 -693.28)"/>
          <path d="M1171.37,904.77c0-1.67,0-3.34,0-5,0-.54.12-.67.65-.67h1.09c.35,0,.51.18.52.54s0,.77,0,1.15a.52.52,0,0,0,.57.58h1.15c.37,0,.55.17.55.54s0,.79,0,1.19-.16.53-.55.54h-1.12c-.41,0-.59.18-.6.6v5.58c0,.5-.15.65-.65.65h-1c-.44,0-.59-.16-.59-.6,0-1.7,0-3.4,0-5.1" transform="translate(-989.99 -693.28)"/>
          <path d="M1205.5,907.82c0-.46,0-.91,0-1.36a.46.46,0,0,1,.52-.53h1.22c.35,0,.51.18.52.53s0,.77,0,1.16.17.56.59.57h1.12c.39,0,.56.18.57.56s0,.77,0,1.16-.18.56-.57.56h-8c-.4,0-.57-.18-.57-.59v-1.09c0-.43.17-.6.6-.6,1.09,0,2.18,0,3.26,0a.69.69,0,0,0,.7-.38" transform="translate(-989.99 -693.28)"/>
          <path d="M1187.29,905.74c0-.55,0-1,0-1.48s.16-.61.62-.62H1189a.5.5,0,0,1,.56.57c0,.37,0,.75,0,1.12s.19.59.58.59h1.16a.46.46,0,0,1,.53.52c0,.4,0,.81,0,1.22a.47.47,0,0,1-.53.52h-1.13c-.44,0-.6.17-.61.62s0,.73,0,1.09-.17.56-.56.57h-1.12c-.42,0-.58-.16-.59-.58s0-.75,0-1.12-.18-.57-.59-.58h-1.12c-.4,0-.57-.17-.57-.59s0-.73,0-1.09.16-.58.57-.58.69,0,1,0a4.69,4.69,0,0,0,.69-.18" transform="translate(-989.99 -693.28)"/>
          <path d="M1153.18,887.68v-3.91c0-.47.11-.58.58-.59h1.06c.47,0,.6.13.61.61,0,1.4,0,2.79,0,4.19v3.64c0,.48-.16.64-.63.64h-1c-.48,0-.63-.15-.64-.63v-4h0" transform="translate(-989.99 -693.28)"/>
          <path d="M1207.76,873.7a.65.65,0,0,0,.66.37c.37,0,.73,0,1.09,0a.48.48,0,0,1,.53.51c0,1.18,0,2.35,0,3.53a.47.47,0,0,1-.52.51c-.41,0-.82,0-1.22,0a.5.5,0,0,1-.54-.53c0-.4,0-.8,0-1.19a.5.5,0,0,0-.57-.56H1206c-.38,0-.54-.17-.54-.54,0-1.15,0-2.29,0-3.44,0-.39.16-.55.56-.55h1.16c.37,0,.53.17.54.54v1.36" transform="translate(-989.99 -693.28)"/>
          <path d="M1182.74,870.65v2.76c0,.5-.16.65-.65.65s-.73,0-1.09,0-.54-.18-.54-.52q0-2.89,0-5.79c0-.34.19-.5.55-.5h1.15c.41,0,.58.17.58.59v2.82" transform="translate(-989.99 -693.28)"/>
          <path d="M1175.91,866.09v-2.75c0-.5.16-.65.65-.65s.73,0,1.09,0a.48.48,0,0,1,.53.53c0,1.92,0,3.85,0,5.78a.45.45,0,0,1-.51.5h-1.12c-.49,0-.64-.14-.64-.63v-2.79" transform="translate(-989.99 -693.28)"/>
          <path d="M1207.79,901.37h1.67c.41,0,.58.17.58.58,0,1.14,0,2.27,0,3.4,0,.39-.18.56-.56.57h-1.16a.5.5,0,0,1-.56-.57v-1.09c0-.45-.17-.62-.61-.62h-1.09c-.4,0-.56-.16-.56-.55s0-.8,0-1.19a.47.47,0,0,1,.52-.53h1.77" transform="translate(-989.99 -693.28)"/>
          <path d="M1189.93,855.87h1.36c.37,0,.53.17.54.54s0,.77,0,1.16-.16.56-.55.56h-3.44c-.37,0-.54-.16-.55-.53v-3.47a.48.48,0,0,1,.55-.54H1189c.4,0,.56.18.56.59s0,.69,0,1a.66.66,0,0,0,.37.67" transform="translate(-989.99 -693.28)"/>
          <path d="M1187.29,869.52c0,.56,0,1.13,0,1.69,0,.41-.17.58-.58.58h-1.12c-.39,0-.57-.18-.57-.56,0-1.15,0-2.29,0-3.43,0-.37.17-.55.54-.55h1.19c.36,0,.54.16.54.53,0,.58,0,1.16,0,1.74" transform="translate(-989.99 -693.28)"/>
          <path d="M1210,883.2v1.64c0,.47-.13.59-.62.59s-.72,0-1.08,0-.54-.15-.55-.5c0-1.17,0-2.34,0-3.51a.49.49,0,0,1,.54-.53h1.22a.48.48,0,0,1,.52.51c0,.6,0,1.2,0,1.8h0" transform="translate(-989.99 -693.28)"/>
          <path d="M1173.63,867.22v1.7c0,.42-.16.58-.57.59h-1.15c-.36,0-.54-.17-.54-.52,0-1.16,0-2.33,0-3.5a.45.45,0,0,1,.49-.52q.63,0,1.26,0a.47.47,0,0,1,.51.54c0,.57,0,1.14,0,1.71" transform="translate(-989.99 -693.28)"/>
          <path d="M1193,908.19c.19,0,.39,0,.58,0a.5.5,0,0,1,.54.56c0,.39,0,.79,0,1.18a.48.48,0,0,1-.52.54h-1.23a.48.48,0,0,1-.52-.54c0-.39,0-.79,0-1.18a.5.5,0,0,1,.54-.56h.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1205.49,904.78c0,.21,0,.43,0,.64a.48.48,0,0,1-.5.5h-1.29a.46.46,0,0,1-.48-.47q0-.66,0-1.32c0-.32.2-.48.54-.49h1.16c.4,0,.56.19.57.59,0,.18,0,.37,0,.55Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1185,897.93c0-1.12,0-1.12,1.1-1.12h.65a.48.48,0,0,1,.52.53c0,.41,0,.81,0,1.22a.46.46,0,0,1-.5.52h-1.26a.47.47,0,0,1-.51-.51v-.65" transform="translate(-989.99 -693.28)"/>
          <path d="M1205.49,886.57c0,1.15,0,1.15-1.13,1.15h-.62a.47.47,0,0,1-.52-.49q0-.65,0-1.29a.47.47,0,0,1,.53-.49c.4,0,.8,0,1.19,0a.5.5,0,0,1,.55.55c0,.19,0,.38,0,.58" transform="translate(-989.99 -693.28)"/>
          <path d="M1187.29,859.3c0,1.12,0,1.12-1.11,1.12-.23,0-.45,0-.68,0a.48.48,0,0,1-.49-.5q0-.63,0-1.26a.48.48,0,0,1,.51-.51c.41,0,.82,0,1.23,0s.52.18.53.55c0,.2,0,.41,0,.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1181.6,865H1181c-.33,0-.52-.18-.53-.5s0-.86,0-1.29a.48.48,0,0,1,.51-.48q.63,0,1.26,0a.46.46,0,0,1,.5.48q0,.65,0,1.29a.48.48,0,0,1-.52.5h-.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1197.53,871.8h.64a.45.45,0,0,1,.49.46q0,.66,0,1.32a.46.46,0,0,1-.51.48c-.42,0-.84,0-1.25,0a.48.48,0,0,1-.51-.51q0-.62,0-1.23a.47.47,0,0,1,.52-.52Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1182.74,866.09v-.58c0-.37.17-.54.54-.55h1.19c.36,0,.53.18.53.53s0,.81,0,1.22a.48.48,0,0,1-.52.53h-1.22a.48.48,0,0,1-.52-.54v-.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1186.13,887.72h.68a.46.46,0,0,1,.47.48q0,.66,0,1.32a.46.46,0,0,1-.48.47h-1.29a.48.48,0,0,1-.5-.53c0-.4,0-.79,0-1.19s.17-.53.54-.55Z" transform="translate(-989.99 -693.28)"/>
          <path d="M1185,904.79c0,.2,0,.41,0,.61a.47.47,0,0,1-.5.52h-1.25a.48.48,0,0,1-.51-.52v-1.25a.46.46,0,0,1,.49-.5q.64,0,1.29,0c.32,0,.47.19.49.53v.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1193,880.88h-.57c-.37,0-.54-.17-.55-.54a11.81,11.81,0,0,1,0-1.19c0-.36.18-.52.55-.53h1.19a.48.48,0,0,1,.53.53c0,.39,0,.79,0,1.18s-.18.55-.57.55H1193" transform="translate(-989.99 -693.28)"/>
          <path d="M1186.15,880.88h-.61c-.34,0-.52-.17-.53-.49s0-.84,0-1.26a.47.47,0,0,1,.51-.51h1.26a.46.46,0,0,1,.5.48q0,.64,0,1.29c0,.33-.19.48-.52.49h-.61" transform="translate(-989.99 -693.28)"/>
          <path d="M1169.08,891.13c0,.22,0,.43,0,.65a.45.45,0,0,1-.46.48h-1.32a.44.44,0,0,1-.47-.48c0-.43,0-.86,0-1.29a.45.45,0,0,1,.51-.49h1.19c.39,0,.55.16.56.56v.57" transform="translate(-989.99 -693.28)"/>
          <path d="M1182.74,895.66v-.54c0-.4.16-.56.55-.57h1.19a.47.47,0,0,1,.53.52c0,.41,0,.82,0,1.22a.46.46,0,0,1-.53.52c-.4,0-.81,0-1.22,0a.48.48,0,0,1-.51-.5v-.65" transform="translate(-989.99 -693.28)"/>
          <path d="M1202.07,883.18h.68a.4.4,0,0,1,.44.45q0,.66,0,1.32a.42.42,0,0,1-.46.47c-.44,0-.87,0-1.3,0a.44.44,0,0,1-.48-.46q0-.66,0-1.32a.44.44,0,0,1,.47-.47h.65" transform="translate(-989.99 -693.28)"/>
          <path d="M1205.5,879.73v-.47c0-.49.14-.64.61-.64h1.12a.47.47,0,0,1,.53.53c0,.4,0,.81,0,1.22a.46.46,0,0,1-.5.51H1206a.46.46,0,0,1-.5-.5c0-.22,0-.43,0-.65" transform="translate(-989.99 -693.28)"/>
          <path d="M1202.06,871.8h.65a.44.44,0,0,1,.49.48q0,.65,0,1.29a.45.45,0,0,1-.49.49q-.64,0-1.29,0a.45.45,0,0,1-.47-.47q0-.66,0-1.32a.44.44,0,0,1,.47-.47h.64" transform="translate(-989.99 -693.28)"/>
          <path d="M1196.38,895.67c0,.21,0,.43,0,.64a.46.46,0,0,1-.48.5q-.66,0-1.32,0a.43.43,0,0,1-.46-.45c0-.46,0-.91,0-1.36a.43.43,0,0,1,.45-.45h1.33a.45.45,0,0,1,.47.51c0,.2,0,.4,0,.61" transform="translate(-989.99 -693.28)"/>
          <rect x="208.7" y="164.87" width="6.79" height="6.78"/>
          <rect x="167.74" y="164.87" width="6.78" height="6.79"/>
          <rect x="167.73" y="205.84" width="6.79" height="6.79"/>
        </g>
        <text class="cls-52" transform="translate(13.68 48.12)"><tspan class="cls-53">H</tspan><tspan class="cls-54" x="8.16" y="0">Y</tspan><tspan class="cls-55" x="15.31" y="0">B</tspan><tspan class="cls-56" x="22.62" y="0">R</tspan><tspan class="cls-57" x="29.75" y="0">I</tspan><tspan x="32.71" y="0">D</tspan></text>
        <rect class="cls-31" x="10.52" y="37.16" width="47.06" height="14.08" rx="0.98"/>
      </g>
    </g>
  </g>
</svg>


		`,
		size: 300
	};

	// console.log(qrCode._qr);
	// console.log(qrCode._qr.createDataURL());
	// console.log(qrCode._svgDrawingPromise);
	// return qrCode._svgDrawingPromise.then((svgContent) => {
	// 	return {
	// 		svg: svgContent,
	// 		size: 100
	// 	};
	// });



	// 	.then((x, y) => {
	// 	console.log("x", x, y);
	// 	// process.exit(-1);
	// });



	// var canvas = [];
	// var background = options.background || '#fff';
	// var foreground = options.foreground || '#000';
	// //var margin = options.margin || 4;
	// var matrix = generateFrame(data, options);
	// var n = matrix.length;
	// var modSize = Math.floor(options.fit ? options.fit / n : 5);
	// var size = n * modSize;

	// canvas.push({
	// 	type: 'rect',
	// 	x: 0, y: 0, w: size, h: size, lineWidth: 0, color: background
	// });

	// for (var i = 0; i < n; ++i) {
	// 	for (var j = 0; j < n; ++j) {
	// 		if (matrix[i][j]) {
	// 			canvas.push({
	// 				type: 'rect',
	// 				x: modSize * j,
	// 				y: modSize * i,
	// 				w: modSize,
	// 				h: modSize,
	// 				lineWidth: 0,
	// 				color: foreground
	// 			});
	// 		}
	// 	}
	// }
	// return {
	// 	canvas: canvas,
	// 	size: size
	// };

}

function measure(node) {
	var svgNode = buildQrSvgNode(node.qr, node);
	node._svg = svgNode.svg;
	// console.log("qrEnc measure", node);
	node._width = node._height = node._minWidth = node._maxWidth = node._minHeight = node._maxHeight = svgNode.size;
	return node;
}

module.exports = {
	measure: measure
};