1/ What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ams: The difference between getElementById, getElementsByClassName, and querySelector, querySelectorAll is
 getElementById:  Find an Element from HTML using id name. this name will be always unique and return a single Element. if the Element does not exist return null .
 getElementsByClassName: This selector find Elements using class name in  HTML . Return Multiple element as the same class name in a HTMLCllection.HTMLCollection is live .if DOm change it's update automatically.
 querySelector: Find the first Element that matches a CSS selector. it return a single Element .if the selector does not find provide null.
 querySelectorAll: Find all Element as the same of CSS selector . Return all result in a NodeList .It's static does not update automatically id DOM change.


 2/How do you create and insert a new element into the DOM?

 Ans: If i want to create and insert a new element into the DOM i have to follow 3 steps .
 firstly,  I have to create a new Element using " document.createelement (TagName)". This does not show yet in the page because it's just exist in the memory.
 secondly, After the first step I can set some content like Text or HTML , Class, Ids and other Attributes. and 
 thirdtly, I can show it on the page using this methods like .appendChild(), .prepend(), .insertBefore(), or .append(). 


 3/What is Event Bubbling and how does it work?

 Ans: Event Bubbling is a kind of process where an event sucs as click,hover etc first  occurs  on the child Element where the child element was triggered. 
 it's does not stay alone.the event gradually propagates to all parent elements above it.
 in other words, the event starts from the child and bubbles up through the DOM tree toward the top. if i want to stop this Bubbling I have to use (stopPropagation()).


 4/What is Event Delegation in JavaScript? Why is it useful?

 Ans: Event Delegation is a tecnique is Java Script where added event listener to the multiple child Element individually, I can added a single event listener to their Parrent.
 this works beacuse of event Bubbling. when an event occurs on a child, it bubbles up to the parent, which can then detect which child triggered the event.
 It is useful beacuse of Efficiency, Works for dynamically added elements and Simplifies code.


 5/What is the difference between preventDefault() and stopPropagation() methods?

 Ans: the difference between preventDefault() and stopPropagation() methods are 
 preventDeafault Prevents the browser’s default behavior for an event for example: Link navigation, form submission, etc. 
 and stopPropagation Stops the event from bubbling to parent elements. for example: If a child element is clicked, the event won’t trigger parent event listeners.
 
