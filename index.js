const SPLIT = '/';
const PARENT_PATH = '..'


function splitPath(p) {
    let result = [];
    try {
        result = p.split(SPLIT);
    } catch (e) {
        //TODO add error handler
    }
    return result;
}



module.exports = function relativeTo(sourcePath, distPath) {
    let src = splitPath(sourcePath);
    let dist = splitPath(distPath);

    let diffIndex = 0;
    // let distIndex = 0;

    for (; diffIndex < src.length; diffIndex ++) {
        if (diffIndex >= dist.length) {
            break;
        }
        if (src[diffIndex] !== dist[diffIndex]) {
            break;
        }
    }

    let result = [];
    for (let i = diffIndex + 1; i < src.length; i ++) {
        result.push(PARENT_PATH);
    }
    for (let i = diffIndex; i < dist.length; i++) {
        result.push(dist[i]);
    }
    return result.join(SPLIT);
}