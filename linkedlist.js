class node{
	constructor(value = null, nextNode = null){
		this.value = value;
		this.nextNode = nextNode;
	}
}

const linkedList = (function(){
	
	// the orignal list
	const list = {
		head:null,
		tail:null,
		size:0
	}
	
	// add the node to the end of the list
	function append(value){
		const newnode = new node(value);
		if(list.head === null){
			list.head = newnode;
			list.tail = newnode;
		}else{
			list.tail.nextNode = newnode;
			list.tail = newnode;
		}
		
		++list.size;
	}
	
	//to add element at front of list
	function prepend(value){
		if(list.head === null){
			const newnode = new node(value);
			list.head = newnode;
			list.tail = newnode;
		}else{
			const newnode = new node(value,list.head);
			list.head = newnode;
		}
		++list.size;
	}
	
	//return the size of the list
	function size(){
		return list.size;
	}
	
	//return the head of the list
	function head(){
		return list.head
	}
	
	//return the tail of the list
	function tail(){
		return list.tail;
	}
	
	//return true or false if value exist
	function contains(value){
		let temp = list.head;
		while(temp !== null){
			if(temp.value === value){
				return true;
			}
			temp = temp.nextNode;
		}
		return false;
	}
	
	//remove the last element
	function pop(){
		if(list.head.nextNode === null){
			list.head = null;
		}else{		
			let temp = list.head;
			while(temp !== null){
				if(temp.nextNode.nextNode === null){
					temp.nextNode = null;
					list.tail = temp;
				}
				temp = temp.nextNode;
			};
		}		
		--list.size;
}
	
	// return value at index
	function at(index){
		if(index > list.size-1 || index < 0 || index === undefined){
			console.log("index out of bound");
		}else{
			let temp = list.head;
			if(index === 0){
				console.log(temp);
			}else{
				for(let i = 0;i < index;i++){
					temp = temp.nextNode;
				}
				console.log(temp);
			}
		}
	}
	
	// returns index of node
	function find(value){
		if(contains(value) === true){
			let index = 0;
			let temp = list.head;
			while(temp !== null){
				if(temp.value === value){
					return index;
				};
				++index;
				temp = temp.nextNode;
			}
		}else{
			return null;	
		}
	}
	
	
	function toString(){
		let temp = list.head;
		let str = "";
		while(temp !== null){
			str += `( ${temp.value} ) to `;
			temp = temp.nextNode;
		}
		str += null;
		console.log(str)
	}
	
	//inser at given index
	function insertAt(value,index){
		
		if(index < 0 || index > list.size-1){
			console.log("index out of bound");
		}
	
		if(index === 0){
			prepend(value);
			++list.size;
		}else if(index === list.size){
			append(value);
			++list.size;
		}
		else{
		let temp = list.head;
		for(let i = 0;i <= index;i++){
			if(i === index-1){
				const newnode = new node(value,temp.nextNode);
				temp.nextNode = newnode;
				++list.size;
			}else{
				temp = temp.nextNode;	
			}
		}}
	}
	
	//remove value from give index
	function removeAt(index){
				let temp = list.head;
				for(let i = 0;i <= index;i++){
					if(index - 1 === i){
						temp.nextNode = temp.nextNode.nextNode;
					}else{
						temp = temp.nextNode;
					}
				}
				--list.size;
		}
	
	return{
		prepend,
		append,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
		removeAt,
	}
})();

linkedList.append(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.insertAt(100,1);
linkedList.toString();
