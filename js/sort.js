//use performance.now(); to count time consumed
//public functions here
function swap(arr, i ,j){
	var temp = arr[j];
	arr[j]=arr[i];
	arr[i]=temp;
}
//Record algorithm running time 
//padding to the same length result
function run(arr, type){
	var timeStart = performance.now();
	eval(type+"(arr)");
	var timeEnd = performance.now();

	var res = (timeEnd-timeStart).toString();
	var padding="";
	if(res.length<19){
		for(var i=res.length;i<19;i++){
			padding+="0";
		}
	}	
	res=res+padding;
	return res;
}
//Generate Array
/**
 * @param {number} the array length
 * @param {number} the random number rangning from 0 to specified range
 * @return {number[]} a random generated array
 */
function generate(length, range){
	var arr = [];
	while(length>0){
		var number = Math.floor(Math.random() * range);
		arr.push(number);
		length--;
	}
	return arr;
}
//check if it's sorted
/**
 * @param {number[]} array
 * @return {boolean}
 */
function checkSort(arr){
	for (var i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i+1]) {
			return false;
		}
	}
	
	return true;
}
//--------------------- 技术分割线 ------------------------//

//WIKI URL: https://en.wikipedia.org/wiki/Sorting_algorithm

//--- implement (max) Heap Sort ---//
/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array
 */
function heapSort(arr){
	heapify(arr);
	var end = arr.length-1;
	while(end>0){
		swap(arr, 0, end);
		end--;
		siftDown(arr, 0, end);
	}
	return arr;
}
function heapify(arr){
	var len = arr.length;
	start = iParent(len-1);
	while(start>0){
		siftDown(arr, start, len-1);
		start--;
	}
}
function siftDown(arr, start, end){
	var root = start;

    while(iLeftChild(root) <= end){  
        var child = iLeftChild(root);   
        var swapper = root; 

        if(arr[swapper] < arr[child]){
			swapper = child;
		}
        if(child+1 <= end && arr[swapper] < arr[child+1]){
			swapper = child + 1;
		}
        if(swapper === root){
			return ;
		}
        else{
			swap(arr, root, swapper);
			root = swapper;
		}
	}
}
var iParent=function(i){return Math.floor((i-1)/2)};
var iLeftChild=function(i){return 2*i + 1}; 
var iRightChild=function(i){return 2*i + 2};
/*
execute:
var arr=[9,4,5,8,2,3,5,7,2,8,4,8,2];
heapSort(arr);
*/



//=== implement Quick Sort ===//
/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array
 */
function quickSort(arr){
	quickSortHelper(arr, 0, arr.length-1);
	return arr;
}
function quickSortHelper(arr, lo, hi){
	if(lo<hi){
		var p = partition(arr, lo, hi);
		quickSortHelper(arr, lo, p-1);
		quickSortHelper(arr, p+1, hi)
	}
}
function partition(arr, lo, hi){
	var par = arr[hi];
	while(lo<hi){
		if(arr[lo]>arr[hi]){
			swap(arr, lo, hi-1);
			swap(arr, hi-1, hi);
			hi--;
		}
		else{
			lo++;
		}
	}
	return lo;
}
/*
execute:
var arr=[1,4,5,8,2,3,5,7,2,8,4,8,2];
quickSort(arr);
*/



//=== implement Merge Sort ===//
//top-down
/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array
 */
 //theta(nlogn) time complexity
 //linear auxiliary space(worst case) 
function mergeSort1(arr){
	var aux = [];
	var start = 0;
	var end = arr.length;
	mergeSortHelper(arr, start, end, aux);
	return arr;
}
function mergeSortHelper(arr, start, end, aux){
	if(end - start < 2){
		return ;
	} 
	var mid = parseInt((end+start)/2);

	mergeSortHelper(arr, start, mid, aux);
	mergeSortHelper(arr, mid, end, aux);
	mergeTopDown(arr, start, mid, end, aux);
	copy(arr, start, end, aux);
}
var mergeTopDown = function(arr, start, mid, end, aux) {
	var i=start, j=mid, k=start;
	for(;k<end;k++){
		if(i<mid&&(arr[i]<arr[j]||j>=end)){
			aux[k]=arr[i];
			i++;
		}
		else{
			aux[k]=arr[j];
			j++;
		}
	}
};
function copy(A, i, j, B){
	for(var k = i;k<j;k++){
		A[k]=B[k];
	}
}
/*
execute:
var arr=[1,4,5,8,2,3,5,7,2,8,4,8,2];
mergeSort1(arr);
*/
//bottom-up
function mergeSort2(){
	
}



//--- implement Insertion Sort ---//
//It's my favorite!!!!
/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array
 */
function insertionSort(arr){
	for(var i=1;i<arr.length;i++){
		var j=i;
		while(j>0&&arr[j-1]>arr[j]){
			swap(arr, j, j-1);
			j--;
		}
	}
	return arr;
}
/*
execute:
var arr=[9,4,5,8,2,3,5,7,2,8,4,8,2];
insertionSort(arr);
*/



//--- implement Selection Sort ---//
/*
 * obselete version *
function selectionSort(arr){
	for(var i=0;i<arr.length;i++){
		var minPos=selectMin(arr,i);//don't need to call...
		swap(arr, i, minPos);
	}
	return arr;
}
function selectMin(arr, k){
	var min = arr[k];//don't need to record the min value but only the key
	var position=k;
	for(;k<arr.length;k++){
		if(arr[k]<min){
			min=arr[k];
			position=k;
		}
	}
	return position;
}
 */
function selectionSort(arr){
	var len = arr.length;
	for (var j = 0; j < len - 1; j++) {
		var iMin = j;
		for (var i = j+1; i < len - 1; i++) {
			if (arr[i] < arr[iMin]) {
				iMin = i;
			}
		}
		if(iMin !== j) {
			swap(arr, j ,iMin);
		}
	}
	return arr;
}
/*
execute:
var arr=[9,4,5,8,2,3,5,7,2,8,4,8,2];
selectionSort(arr);
*/



//--- implement Bubble Sort ---//
/**
 * @param {number[]} unsorted array
 * @return {number[]} sorted array
 */
function bubbleSort(arr){
	var len = arr.length;
	var swapped = true;
	while(swapped){
		swapped=false;
		for(var i=0;i<len-1;i++){
			if(arr[i]>arr[i+1]){
				swap(arr, i, i+1);
				swapped=true;
			}
		}
	}
	return arr;
}
//optimization: put one or several sorted largest number(s) in the end at the end of each iteration.
//and next round can only iterate thru the len-n numbers from the start.
/*
execute:
var arr=[9,4,5,8,2,3,5,7,2,8,4,8,2];
bubbleSort(arr);
*/



/*
big test case:
var string1="0,1,10,11,11,12,13,13,16,17,19,19,2,2,20,21,21,24,24,24,25,25,26,26,26,26,27,29,29,3,30,30,30,31,31,32,33,33,37,37,37,38,39,39,39,39,4,43,44,45,45,45,46,49,52,55,55,6,6,60,60,60,61,64,64,67,68,7,7,70,70,70,71,71,72,73,74,77,77,79,79,79,79,80,81,84,84,88,89,92,93,93,93,94,94,96,96,97,98,99";
var arr=string1.split(",");
for(var i=0;i<arr.length;i++){
	arr[i]=Number(arr[i]);	
}
Sort(arr);
*/