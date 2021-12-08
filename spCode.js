/* eslint-disable */

export function spCode()  {
    let noiseScale = 5.2;
   
   let s = getSpace();
   let n = noise(s * noiseScale + time*.2 + .01);
   n = nsin(n * 7);
   
   let nColor = pow(n, 3);
   let col = vec3(nColor+.2, .3, nColor+2) + normal * .4;
   color(col);
   
   sphere(0.5 + n*.02);
     
   };