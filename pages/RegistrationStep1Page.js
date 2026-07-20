import { BasePage } from './BasePage';
export class RegistrationStep1Page extends BasePage {
  constructor(page) {
        super(page);
         this.genderMan = page.getByText('Man', {exact: true});
         this.genderWoman = page.getByText('Woman', {exact: true});
         this.completedSubStep = page.locator('.completed-sub-step');
         
    }
}