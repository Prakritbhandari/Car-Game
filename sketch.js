cCar = 0
gmState = 0

function preload(){
  main_i = loadImage("car.png");
  car_i = loadImage("car1.png")
}

function setup() {
  createCanvas(600,600);


  main = createSprite(300, 500, 70, 100);
  main.addImage("main",main_i)

  rWall = createSprite(610,300,20,600)
  lWall = createSprite(-10,300,20,600)

  fake = createSprite(-100,-100,70,100)

  carGroup = createGroup()

}

function draw() {
  background(0);  

  if(gmState === 0){
    drive()
    inc()
    move()
    fail()
    if(carGroup.isTouching(main)){
      gmState = 1
    }
  }
  if(gmState === 1){
      background("red")
      main.velocityX = 0
      gmState = 1
      carGroup.destroyEach()
      text("Failed!",290,300)
  }

  drawSprites();
}

function drive(){
  if(cCar>0.9){
    car = createSprite(Math.random()*(550-50)+50,-50,70,100)
    car.velocityY = 10
    car.lifetime = 70
    car.addImage("car",car_i)
    cCar = 0

    carGroup.add(car)
  }
}

function inc(){
  if(cCar<1){
    cCar = cCar+0.01
  }
}

function move(){
  if (keyDown(37)) {
    main.velocityX = -10
  } 
  else if (keyDown(39)) {
    main.velocityX = 10
  } 
}

function fail(){
    if(main.isTouching(rWall)){
      background("red")
      main.velocityX = 0
      gmState = 1
    }
    if(main.isTouching(lWall)){
      background("red")
      main.velocityX = 0
      gmState = 1
    }
  }