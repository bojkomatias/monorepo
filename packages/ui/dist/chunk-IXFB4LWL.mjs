var i=Object.defineProperty;var e=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var f=(a,c,b)=>c in a?i(a,c,{enumerable:!0,configurable:!0,writable:!0,value:b}):a[c]=b,j=(a,c)=>{for(var b in c||(c={}))g.call(c,b)&&f(a,b,c[b]);if(e)for(var b of e(c))h.call(c,b)&&f(a,b,c[b]);return a};var k=(a,c)=>{var b={};for(var d in a)g.call(a,d)&&c.indexOf(d)<0&&(b[d]=a[d]);if(a!=null&&e)for(var d of e(a))c.indexOf(d)<0&&h.call(a,d)&&(b[d]=a[d]);return b};

export { j as a, k as b };
