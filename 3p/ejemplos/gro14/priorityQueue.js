function PriorityQueue(){
    let ietems=[]
    function QueueElement(element,priority){
        this.element=element
        this.priority=priority
    }
    this.enqueue=function(element,priority){
        let queueElement=new QueueElement(element,priority)
        let added=false
        for(let i=0;i<ietems.length;i++){
            if(queueElement.priority<ietems[i].priority){
                ietems.splice(i,0,queueElement)
                added=true
                break
            }
        }
        if(!added){
            ietems.push(queueElement)
        }
    } 
    this.print=function(){
        for(let i=0;i<ietems.length;i++){
            console.log(`${ietems[i].element}${ietems[i].priority}`)
        }
    }  
}
let priorityQueue=new PriorityQueue()
priorityQueue.enqueue("john",2)
priorityQueue.enqueue("jack",1)
priorityQueue.enqueue("camila",1)
priorityQueue.print()