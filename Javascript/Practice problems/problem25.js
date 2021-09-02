// merge two sorted arrays


var merge = function(nums1, m, nums2, n) {
      let first=m-1,second=n-1;
        for(i=m+n-1;i>=0;i--)
            {  
               if(second<0){
                   break;
               }
                if(nums1[first]>nums2[second]){
                    nums1[i]= nums1[first];
                    first--;
                }else{
                    nums1[i]=nums2[second];
                    second--;
                }
            }
        return nums1;
    };


var n1 = [1,2,3,0,0,0];
m = 3;
var n2 = [4,5,6];
n = n2.length;

console.log(merge(n1,m,n2,n));
