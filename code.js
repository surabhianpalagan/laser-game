var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1 =createSprite(300,100,200,5);
laser1.shapeColor="red";
laser1.velocityY=-10;

laser1.velocityX=0;
var laser2 =createSprite(100,200,200,5);
laser2.shapeColor="red";
laser2.velocityX=0;
laser2.velocityY=10;

var laser3 = createSprite(200, 70, 5,200);
laser3.shapeColor="red";
laser3.velocityX=-10;
laser3.velocityY=0;


var thief =createSprite(200,360,25,25);
thief.shapeColor="black";

function draw() {
  background("lightgrey");
  fill("cyan");
  shape (390,0,380,10,390,20,400,10);
  shape (390,0,380,10,390,20,400,10);
  createEdgeSprites();
  
  thief.velocityX="0";
thief.velocityY="0";
  
  if (keyDown(UP_ARROW)){
    thief.velocityX=0;
    thief.velocityY=-10;
  } 
  
    if (keyDown(DOWN_ARROW)){
      thief.velocityX=0;
      thief.velocityY=10;
    }
    
    if(keyDown(LEFT_ARROW)){
      thief.velocityX=-15;
      thief.velocityY=0;
    }
  
  if(keyDown(RIGHT_ARROW)){
    thief.velocityX=15;
    thief.velocityY=0;
  }
  
  if(thief.isTouching(laser1)|| thief.isTouching(laser2)|| thief.isTouching(laser3)){
  stroke(0);
  fill("black");
  textSize(24);
  text("Thief was caught",120,180);
  laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
    thief.setVelocity(0,0); 
  }
  
if (thief.isTouching(topEdge)) {
  stroke(0);
  fill("green");
  textSize(24);
  text("Thief has stolen the jewels",50,180);
   laser1.setVelocity(0,0);
  laser2.setVelocity(0,0);
  laser3.setVelocity(0,0);
    thief.setVelocity(0,0); 
  }


  
  createEdgeSprites();
  laser1.bounceOff(edges);
  laser2.bounceOff(edges);
  thief.bounceOff(edges);
  laser3.bounceOff(edges);
  drawSprites();
 
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
