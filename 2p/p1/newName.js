let arr=[2, -4]

function swap(i, k){
    t=arr[i]
    arr[i]=arr[k]
    arr[k]=t

}

swap(0,1)
console.log(arr);