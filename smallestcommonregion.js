//Objective is to find the smallest common region between two given regions.

let regions = [["Earth","North America","South America"], ["North America","United States","Canada"], ["United States","New York","Boston"], ["Canada","Ontario","Quebec"],["South America","Brazil"]]
let region1 = "Quebec", region2 = "New York"


//O(n * m) solution where n is the length of the list and n is the length
//of the longest subset of regions

let root = {}
    
//Map out the smaller regions to their parents
for (let region of regions) {
    for (let i = 1; i < region.length; i++) {
        if (!root[region[i]]) {
            root[region[i]] = region[0]
        }
    }
}

let result = [region1]
let result2 = [region2]

//DFS through the children to find all parents 
function dfs(node, result) {
    if (root[node] != undefined) {
        result.push(root[node])
        dfs(root[node], result)
    }
} 
dfs(region1, result)
dfs(region2, result2)

//Find the intersection
for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result2.length; j++) {
        if (result[i] == result2[j]) {
            return result[i]
        }
    }
}