var a = ['the','our'];
var b = ['great', 'big' ];
var c = ['jogger','racoon'];

(function(x, y, z){
    var final = [];
    for (var i = 0, l = x.length; i < l; i++){
        for (var j = 0, k = 0, m = y.length, n = z.length; j < m; j++){
            final.push([a[i]+ b[j]+ c[k]+'.com']);
            if (j == m - 1 && k < n - 1){
               k++;
               j = -1;
            }
        }
    }
    console.log(final);
})(a, b , c);