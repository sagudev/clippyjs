```html
<!-- Add the stylesheet to the head -->
<link rel="stylesheet" type="text/css" href="clippy.css" media="all">


<!-- jQuery 1.7+ -->
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

<!-- Clippy.js -->
<script src="clippy.js"></script>

<!-- Init script -->
<script type="text/javascript">
//clippy.load('agent name', id,...
// id can be any number
    clippy.load('Merlin', 5, function(agent){
        // do anything with the loaded agent
        agent.show();
    });
</script>

```

Usage: Actions
--------------
All the agent actions are queued and executed by order, so you could stack them.

```javascript
// play a given animation
agent.play('Searching');

// play a given animation for 2 seconds
agent.play('Searching', 2000);

// play a random animation
agent.animate();

// get a list of all the animations
agent.animations();
// => ["MoveLeft", "Congratulate", "Hide", "Pleased", "Acknowledge", ...]

// Show text balloon
// Where time enter how many miliseconds will user had to read text in balloon
agent.speak('When all else fails, bind some paper together. My name is Clippy.', time);

// move to the given point, use animation if available
agent.moveTo(100,100);

// gesture at a given point (if gesture animation is available)
agent.gestureAt(200,200);

// stop the current action in the queue
agent.stopCurrent();

// stop all actions in the queue and go back to idle mode
agent.stop();

agent.ask(asktext, option1-text, option1-function, option2-text, ... unlimited)

...
```
Run code outside clippy.load function
-------------------------------------

```javascript

clippy.con(id).command()

example:

clippy.con(2).ask('what to write', 'hi', 'samo()', 'ho', 'vili()');

Explore yourself
```

