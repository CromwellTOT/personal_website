//Test Console

/* time performance test template
var start = new Date().getTime();
// do something
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);
*/

/*
//src

put code here

execute:

*/


console.log($('#hei').width());











/*
//src:fibonacci
(function(){
	var map = [,1,1];
	function fibonacci(n){
		if(map[n]){
			return map[n];
		}
		var res = fibonacci(n-1)+fibonacci(n-2);
		map[n]=res;
		return res;
	}
	console.log(fibonacci(100));
})();

function fibonacciIteration(n){
  var fibo = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }

 return fibo[n];
} 

execute:
var start = new Date().getTime();
fibonacci(100);
var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time);
fibonacciIteration(100);
*/





















/*
//src

var obj=[];
obj.push("1");
obj.push("1");
obj.push("1");

execute:

*/

/*
//src: leetcode 287

var findDuplicate = function(nums) {
    var res = 0,
        n = nums.length-1;
        
    for(var bit = 0; n>>bit; bit++){
		var should = 0;//remember to reset
        for(var i = 1; i<=n; i++){//record how many ones should n consecutive numbers have on'bit'bit (starting from 1!!)
            if((i>>bit)&1){
                should++;
            }
        }
		var real=0;//remember to reset
        for(var j = 0; j<=n; j++){
            if((nums[j]>>bit)&1){
				//console.log(bit+" ");
                real++;
            }
        }
        if(real!==should){
            res|=(1<<bit);//the res' 'bit'bit should be 1
        }
    }
    return res;
};

execute:
findDuplicate([1,1,2]);
*/
























/*
//src:Closure
add(1)(2);
function add(x){
	this.x = x+1;
	return function(y){
		return x+y;
	}
}
function addPlus(x){
	return function(y){
		return x+y;
	}
}
function foo(p){
	
	return function(){this.p=p;console.log(this)};
}
*/








/*
//src:改一改Number的string玩嘛是吧
function x(){
var num = 5;
Number.prototype.string = function (n){
	for(var value = +this, str = ""; n>0 ;n--){
		var temp = value%2;
		value>>=1;
		str=temp+str;
	}
	return str;
}
console.log(num.string(16));
}

execute:
x();
*/





/*
//src：leetcode 315

var countSmaller = function(nums) {
    if(nums.length===0){
        return nums;
    }
	
	var ans = [];
    
	merge(nums, 0, nums.length-1, ans);
	
	return ans;
};
function merge(nums, s, e, ans){
	if(s===e){
		nums[s]=Object(nums[s]);
		nums[s].order = s;	
		ans[s]=0;
		return ;
	}
	
	var mid = parseInt((s+e)/2);
	
	merge(nums, s, mid, ans);
	merge(nums, mid+1, e, ans);
	
	for(var i = s, x = s, y = mid+1; i<= e; i++){
		if(x>mid){
			nums[i].temp = nums[y++].order;
		}
		else if(y>e){
			nums[i].temp = nums[x++].order;
		}
		else if(+nums[nums[x].order]>+nums[nums[y].order]){
			ans[nums[x].order]+=e-y+1;
			nums[i].temp = nums[x++].order;
		}
		else{
			nums[i].temp = nums[y++].order;
		}
	}
	
	for(var j = s; j<= e; j++){
		nums[j].order = nums[j].temp;
	}
}


execute:
countSmaller([5,2,6,1]);
countSmaller([]);
countSmaller([0,2,1]);
*/























/* check an Array-like object is empty in js is difficult.... 
function cao(nums){
	function isEmpty(object) {
		for(var key in object) {
			if(object.hasOwnProperty(key)){
				return false;
			}
		}
		return true;
	}
	if(isEmpty(nums)){
		return "hehe";
	}
}

execute:
cao([]);
*/




/*
//src: leetcode 139

var wordBreak = function(s, wordDict) {
    var hashDic = [];
    for(var i = 0;i<wordDict.length;i++){
        if(hashDic[wordDict[i]]===undefined){
            hashDic[wordDict[i]]=true;
        }
    }
    var visited=[];

    return helper(hashDic, s, 0, visited);
};
function helper(dic, s, i, visited){
	if(s.length===i){
        return true; 
    }
	if(visited[i]){
		return false;
	}
	visited[i]=true;
    for(var j = 1;j<=s.length-i;j++){
		//console.log(j);
        var temp = s.substr(i,j);
        if(dic[temp]&&helper(dic, s, i+j, visited)){
            return true;
        }
    }
	return false;
}

execute:
wordBreak("leetcode",["leet","code"]);
*/



/*
//src:leetcode 22

var generateParenthesis = function(n) {
	n = Math.pow(2,n);
    function node(left, right, str){
        this.left=left;
        this.right=right;
        this.str=str;
    }
	
    var other= new node(0,0,"");
    var queue =[other];
    for(var i = 0; i<n;i++){
        var len = queue.length;
		console.log(queue.length);
        for(var j = 0; j<len;j++){
            var temp = queue.shift();
			
            if(temp.left<n){
                var left = new node(temp.left+1, temp.right, temp.str+"(");
                queue.push(left);
            }
            if(temp.right<temp.left){
                var right = new node(temp.left, temp.right+1, temp.str+")");
                queue.push(right);
            }
        }
    }
    var res =[];
    for(var k=0;k<queue.length;k++){
        res.push(queue.pop().str);
    }
    return res;
};

execute:
generateParenthesis(3);
*/




//src
//leetcode 321
/*
var maxNumber = function(nums1, nums2, k) {
    var res = [];
	var m = nums1.length;
    var n = nums2.length;
	var limit, limit1, limit2, maxVal1, maxVal2, maxLoc, maxLoc1, maxLoc2, inNums1;
    while(k>0){
        m = nums1.length;
		n = nums2.length;
        limit = m+n-k;
		limit1 = (limit>m)?m:limit;
		limit2 = (limit>n)?n:limit;
		
        maxLoc1=findMax(nums1, 0 , limit1);
		maxVal1=nums1[maxLoc1];
		maxLoc2=findMax(nums2, 0 , limit2);
		maxVal2=nums2[maxLoc2];
		
		if(maxVal1===undefined){
			maxLoc=maxLoc2;
			inNums1=false;
		}
		else if(maxVal2===undefined){
			maxLoc=maxLoc1;
			inNums1=true;
		}
		else{
			if(maxVal1>maxVal2){
				maxLoc=maxLoc1;
				inNums1=true;
			}
			else if(maxVal1<maxVal2){
				maxLoc=maxLoc2;
				inNums1=false;
			}
			else{
				var sec1=findMax(nums1, 0 , maxLoc1-1);
				var sec2=findMax(nums2, 0 , maxLoc2-1);
				if(sec1===undefined){
					maxLoc=maxLoc2;
					inNums1=false;
				}
				else if(sec2===undefined){
					maxLoc=maxLoc1;
					inNums1=true;
				}
				else{
					if(sec1>sec2){
						
					}
				}
			}
		}
		
        if(inNums1){
            res.push(nums1[maxLoc]);
            while(maxLoc>=0){
                nums1.shift();
				maxLoc--;
            }
        }
        else{
            res.push(nums2[maxLoc]);
            while(maxLoc>=0){
                nums2.shift();
				maxLoc--;
            }
        }
		k--;
    }
    return res;
};
function findMax(arr, i , j){
	var maxVal=-1;
	var maxLoc;
	for(var x = i;x<=j;x++){
        if(nums2[x]!==undefined&&arr[x]>maxVal){//do the !==undefined judgement
			maxVal=arr[x];
            maxLoc = x;
        }
    }
	if(maxLoc===undefined){
		return -1;
	}
	return maxLoc;
}
//remember that ... arr=[0] and arr[0]->false;
//this method would fail cause you dont choose the right equal key among two nums.(should use an arr to remember the previous choices and choose the best previous choice afterwards)
//[8,9],[3,9],3 this input for example

execute:
var num1 = [3,4,6,5];
var num2 = [9,1,2,5,8,3];
console.log(maxNumber(num1, num2, 5));
*/

/*
//leetcode 3. Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    
    var maxLen=0;
    

    for(var start=0; start<=s.length-maxLen;start++){
        var map=[];
		var len=0;
		
        for(var i = start; i < s.length; i++){
            
			//console.log(map[s[i]]);
            if(map[s[i]]===undefined){
				
                map[s[i]]=true;
                len++;
            }
            else{
                if(len>maxLen){
                    maxLen=len;
                }
                break ;
            }
            
        }
    }
    
    return maxLen;
};

execute:
lengthOfLongestSubstring("abcabcbb");
*/