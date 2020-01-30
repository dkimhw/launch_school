


### Mountain Caps

Question: Is there a method to capitalize a string, for example turning 'mountain' into 'Mountain'?

Answer:
* We can use MDN to look for a method that might convert capitalize the first character in a string
* First find the object string: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String]
* On the left hand side are a list of methods that can be accessed by string objects. 
* No such function exists that explicitly does this. You can combine couple methods to do this easily however.

```javascript
"mountain".charAt(0).toUpperCase() + "mountain".slice(1);
```