describe('User Registration Process',() => {
    it('should Open Apps and allow the user to select gender', async () => {
        const genderMaleRadioButton = await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_male']");
        await genderMaleRadioButton.click();
        const nextButton = await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']");
        await nextButton.click();
      });
    
      it('should allow the user to enter their name', async () => {
        const nameInput = await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_name']");
        await nameInput.setValue('Dedi Harwizh');
        const nextButton = await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']");
        await nextButton.click();
        const heightInput = await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']");
        await expect(heightInput).toBeDisplayed();
      });
    
      it('should allow the user to enter their height', async () => {
        const heightInput = await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_height']");
        await heightInput.setValue('172');
        const nextButton = await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']");
        await nextButton.click();
        const weightInput = await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']");
        await expect(weightInput).toBeDisplayed();
      });
    
      it('should allow the user to enter their weight', async () => {
        const weightInput = await $("//android.widget.EditText[@resource-id='com.fghilmany.dietmealapp:id/et_weight']");
        await weightInput.setValue('60');
        const nextButton = await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_next']");
        await nextButton.click();
        const activityRadioButton = await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_rest']");
        await expect(activityRadioButton).toBeDisplayed();
      });
    
      it('should allow the user to select their activity level and finish onboarding', async () => {
        const activityRadioButton = await $("//android.widget.RadioButton[@resource-id='com.fghilmany.dietmealapp:id/rb_rest']");
        await activityRadioButton.click();
        const finishButton = await $("//android.widget.Button[@resource-id='com.fghilmany.dietmealapp:id/bt_finish']");
        await finishButton.click();
        const homeScreen = await $("//android.view.View[@resource-id='com.fghilmany.dietmealapp:id/view']");
        await expect(homeScreen).toBeDisplayed();
      });
}) 