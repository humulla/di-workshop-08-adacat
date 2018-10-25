class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
               
  }
// if function for setHunger
  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0
    }
    if (newHunger > 10) {
      newHunger = 10
    }
    this.hunger = newHunger
  }
// this function would tell the user if the cat is sleeping and more information about the cat for example, their owner and weight.
  getDescription() {
    var sleepLine
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + this.getHealth() + '/30.',
      sleepLine

    ]
    var tiredness
    if(this.feed) {
      tiredness++ 
    }
    if(this.play) {
      tiredness = tiredness + 3
    }
    if(this.nap){
      tiredness = 0
    }
    var message
    message
    if(this.feed){
      message = 'the cat is eating'
    } else{
      message 
    }
    if(this.play){
      message = 'the cat is playing'
    } else{
      message
    }
    if(this.nap){
      message = 'the cat is sleeping'
    } else{
      message 
    }

    
    return lines.join('\n')
  }
// this is to determine if the cat is hungry or not
  feed() {
    var hunger = this.hunger - 1

    if (hunger < 3) {
      this.size = this.size + 1
    }

    this.setHunger(hunger)
  }
// to see if the cat is sleeping
  nap() {
    this.isSleeping = true
  }
// to see if the cat is awake
  wakeUp() {
    this.isSleeping = false
  }

  play() {
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    return healthScore
  }
}

module.exports = AdaCat
