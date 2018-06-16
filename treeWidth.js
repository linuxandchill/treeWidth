function treeWidth(rootNode){
  let holderArr = [rootNode, 'stopper'];
  let widthCounters = [0]; 

  while holderArr.length > 1 {
    const node = holderArr.shift();

    if (node === 'stopper'){
      widthCounters.push(0); 
      holderArr.push('stopper'); 
    } else{
      holderArr.push(...node.children); 
      widthCounters[widthCounters.length - 1]++; 
    }

  }
  return widthCounters; 
}

module.exports = treeWidth; 
