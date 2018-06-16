class Node{
  constructor(data){
    this.data = data;
    this.children = []; 
  }

  insertChild(childData){
    this.children.push(new Node(childData)); 
  }
}; 
