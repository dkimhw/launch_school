

### And on and on and on

Question: The following code keeps looping forever. (You can hit Ctrl-C to stop it.) Why is that? Also modify it so that it stops after the first iteration.

```javascript
let i;

for (i = 0; ; i += 1) {
  console.log("and on");
}
```


Answer:

* It runs forever because there is no break condition
* The following code runs only once:

```javascript
let i;

for (i = 0; i <= 0; i += 1) {
  console.log("and on");
}

// Or use break
for (i = 0; ; i += 1) {
  console.log("and on");
  break;
}
```