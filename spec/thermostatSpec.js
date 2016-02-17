
describe("Thermostat", function() {

  beforeEach(function(){
    thermo = new Thermostat;
  });

  it("should initialize at 20 degrees", function(){
    expect(thermo.temperature).toEqual(20);
  });

  it("should initialize with powersaving on", function(){
    expect(thermo.powerSavingMode).toBe("on");
  });

  it("should raise the temperature with the up button", function(){
    thermo.up()
    expect(thermo.temperature).toEqual(21)
  });

  it("should lower the temperature with the down button", function(){
    thermo.down()
    expect(thermo.temperature).toEqual(19)
  });

  it("Should throw an error if .down is called at 10 degrees.", function(){
    thermo.temperature = 10;
    expect(function () {thermo.down();}).toThrow(new Error ('Temp too low'));
  });

  it("Should change value of powersaving mode", function(){
    expect(thermo.powerSavingMode).toBe("on");
  });

  it("Should change value of powersaving mode", function(){
    thermo.powerSaveOff()
    expect(thermo.powerSavingMode).toBe("off");
  });

  it("Should raise error at 33 temp if powersave off", function(){
    thermo.powerSaveOff()
    thermo.temperature = 32;
    expect(function () {thermo.up();}).toThrowError('Max temperature reached');
  });

  it("Should raise error at 26 temp if powersave on",function(){
    thermo.temperature = 25;
    expect(function () {thermo.up();}).toThrowError('Max temperature reached');
  });

  it("Should return to 20 degrees when reset is pushed", function(){
    thermo.temperature = 30;
    thermo.reset();
    expect(thermo.temperature).toEqual(20);
  });

  it("Should change the energy usage to low below 18 degrees", function() {
    thermo.temperature = 17;
    expect(thermo.energyUsage()).toBe('low-usage')
  });

  it("Should change the energy usage to medium between 18 - 24 degrees", function() {
    thermo.temperature = 23;
    expect(thermo.energyUsage()).toBe('medium-usage');
  });

  it("Should change the energy usage to high above 25 degrees", function() {
    thermo.powerSaveOff();
    thermo.temperature = 28;
    expect(thermo.energyUsage()).toBe('high-usage');
  });

  it("Should reset the temperature to 25 if powersave switched off while above 25.", function(){
    thermo.powerSaveOff()
    thermo.temperature = 30;
    thermo.powerSaveOn()
    expect(thermo.temperature).toEqual(25);
  });
});
